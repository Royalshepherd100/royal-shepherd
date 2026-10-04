import re
from datetime import datetime
import json
import os
import secrets
import shutil
import time
from copy import deepcopy
from threading import RLock
from pathlib import Path
from pathlib import PurePosixPath
from typing import Any, Dict, List
from urllib.parse import urlparse

from fastapi import FastAPI, File, Form, HTTPException, Request, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from pydantic import BaseModel


class CompanyPayload(BaseModel):
    companyId: str
    name: str
    active: List[str] = []
    inactive: List[str] = []
    officers: List[str] = []
    anchor: List[str] = []
    junior: List[str] = []
    intermediate: List[str] = []
    senior: List[str] = []
    officer: List[str] = []
    totalMembers: int = 0
    totalNcos: int = 0
    totalOfficers: int = 0
    totalCommissionedOfficers: int = 0
    members: List[Dict[str, Any]] = []


class CompanyBulkPayload(BaseModel):
    companies: List[CompanyPayload]


DEFAULT_DATA_FILE = Path(__file__).resolve().parent / "data_store.json"
DATA_FILE = Path(os.environ.get("RS_DATA_FILE", DEFAULT_DATA_FILE))
LEGACY_UPLOAD_ROOT = Path(__file__).resolve().parent.parent / "uploads"
UPLOAD_ROOT = Path(os.environ.get("RS_UPLOAD_DIR", LEGACY_UPLOAD_ROOT))
ADMIN_SESSION_TTL_SECONDS = 12 * 60 * 60
ADMIN_SESSIONS: Dict[str, tuple[str, float]] = {}
ADMIN_SESSIONS_LOCK = RLock()
GALLERY_CATEGORIES = {
    "parades",
    "band",
    "rehearsals",
    "moments-enjoyment",
    "exams",
    "trophies",
    "member-catalogue",
}
REQUEST_COLLECTION_KEYS = (
    "captainRequests",
    "companyDashboardRequests",
    "dashboardRequests",
    "companyRequests",
    "pendingRequests",
    "pendingCompanyRequests",
)
PUBLIC_ROOT_FILES = {
    "index.html",
    "index-v2.html",
    "captain-dashboard.html",
    "commander-dashboard.html",
    "exco-dashboard.html",
    "index.css",
    "app.js",
    "gallery-data.js",
    "membership-data.js",
    "official-division-serials.js",
    "coy-membership-data.js",
    "CNAME",
    "robots.txt",
    "sitemap.xml",
    "RS New Constitution Book.pdf",
}
PUBLIC_ASSET_FILES = {"assets/jspdf.umd.min.js", "assets/emblem.svg"}
PUBLIC_IMAGE_EXTENSIONS = {".avif", ".gif", ".jpeg", ".jpg", ".png", ".svg", ".webp"}
PUBLIC_PRIVATE_COLLECTION_KEYS = (
    *REQUEST_COLLECTION_KEYS,
    "enlistmentApplications",
    "commanderVerificationCodes",
    "commanderSettings",
)


def merge_state_value(existing: Any, incoming: Any) -> Any:
    if isinstance(existing, dict) and isinstance(incoming, dict):
        merged = dict(existing)
        for key, value in incoming.items():
            if isinstance(value, dict) and isinstance(merged.get(key), dict):
                merged[key] = merge_state_value(merged.get(key), value)
            elif isinstance(value, list):
                if value:
                    merged[key] = value
                elif isinstance(merged.get(key), list) and merged.get(key):
                    merged[key] = merged.get(key)
                else:
                    merged[key] = []
            elif isinstance(value, dict):
                if value:
                    merged[key] = merge_state_value(merged.get(key), value)
                elif isinstance(merged.get(key), dict) and merged.get(key):
                    merged[key] = merged.get(key)
                else:
                    merged[key] = {}
            elif value in (None, ""):
                if existing is not None and existing != "" and existing != {} and existing != []:
                    merged[key] = existing
                else:
                    merged[key] = value
            else:
                merged[key] = value
        return merged

    if isinstance(existing, list) and isinstance(incoming, list):
        if incoming:
            return incoming
        if existing:
            return existing
        return []

    if incoming in (None, ""):
        return existing if existing not in (None, "", [], {}) else incoming

    return incoming


def normalize_state_payload(payload: Dict[str, Any] | None, existing_state: Dict[str, Any] | None = None) -> Dict[str, Any]:
    default_state = build_default_state()
    merged_state = dict(default_state)
    if existing_state:
        merged_state.update(existing_state)

    if not isinstance(payload, dict):
        return merged_state

    full_state = payload.get("_fullState") is True
    for key, value in payload.items():
        if key == "_fullState":
            continue
        if key in REQUEST_COLLECTION_KEYS:
            continue
        merged_state[key] = deepcopy(value) if full_state else merge_state_value(merged_state.get(key), value)

    request_payload: Dict[str, Any] = {}
    for key in REQUEST_COLLECTION_KEYS:
        if isinstance(payload.get(key), dict):
            request_payload = merge_state_value(request_payload, payload[key])

    if request_payload:
        merged_state["captainRequests"] = merge_state_value(merged_state.get("captainRequests", {}), request_payload)

    return merged_state


def build_default_companies() -> Dict[str, Dict[str, Any]]:
    return {
        "1": {"name": "Oke Odo - 12th Akiling Regional Coy", "anchor": [], "junior": [], "intermediate": [], "senior": [], "officer": [], "active": [], "inactive": [], "officers": [], "members": [], "totalMembers": 0, "totalNcos": 0, "totalOfficers": 0, "totalCommissionedOfficers": 0},
        "2": {"name": "Ikorodu - 15th Akiling Regional Coy", "anchor": [], "junior": [], "intermediate": [], "senior": [], "officer": [], "active": [], "inactive": [], "officers": [], "members": [], "totalMembers": 0, "totalNcos": 0, "totalOfficers": 0, "totalCommissionedOfficers": 0},
        "3": {"name": "Iyesi - 17th Akiling Regional Coy", "anchor": [], "junior": [], "intermediate": [], "senior": [], "officer": [], "active": [], "inactive": [], "officers": [], "members": [], "totalMembers": 0, "totalNcos": 0, "totalOfficers": 0, "totalCommissionedOfficers": 0},
        "4": {"name": "Sango - 28th Akiling Regional Coy", "anchor": [], "junior": [], "intermediate": [], "senior": [], "officer": [], "active": [], "inactive": [], "officers": [], "members": [], "totalMembers": 0, "totalNcos": 0, "totalOfficers": 0, "totalCommissionedOfficers": 0},
        "5": {"name": "Command - 31st Akiling Regional Coy", "anchor": [], "junior": [], "intermediate": [], "senior": [], "officer": [], "active": [], "inactive": [], "officers": [], "members": [], "totalMembers": 0, "totalNcos": 0, "totalOfficers": 0, "totalCommissionedOfficers": 0},
        "6": {"name": "Ipaja - 38th Akiling Regional Coy", "anchor": [], "junior": [], "intermediate": [], "senior": [], "officer": [], "active": [], "inactive": [], "officers": [], "members": [], "totalMembers": 0, "totalNcos": 0, "totalOfficers": 0, "totalCommissionedOfficers": 0},
        "7": {"name": "Ijaba - 44th Akiling Regional Coy", "anchor": [], "junior": [], "intermediate": [], "senior": [], "officer": [], "active": [], "inactive": [], "officers": [], "members": [], "totalMembers": 0, "totalNcos": 0, "totalOfficers": 0, "totalCommissionedOfficers": 0},
        "8": {"name": "Ijoko - 48th Akiling Regional Coy", "anchor": [], "junior": [], "intermediate": [], "senior": [], "officer": [], "active": [], "inactive": [], "officers": [], "members": [], "totalMembers": 0, "totalNcos": 0, "totalOfficers": 0, "totalCommissionedOfficers": 0},
        "9": {"name": "Ikeja - 49th Akiling Regional Coy", "anchor": [], "junior": [], "intermediate": [], "senior": [], "officer": [], "active": [], "inactive": [], "officers": [], "members": [], "totalMembers": 0, "totalNcos": 0, "totalOfficers": 0, "totalCommissionedOfficers": 0},
    }


def build_default_state() -> Dict[str, Any]:
    admin_email = os.environ.get("RS_ADMIN_EMAIL", "").strip().lower()
    admin_password = os.environ.get("RS_ADMIN_PASSWORD", "")
    return {
        "companies": build_default_companies(),
        "captainAccounts": {},
        "commanderAccounts": ({admin_email: {"password": admin_password, "verified": True, "email": admin_email}} if admin_email and admin_password else {}),
        "captainRequests": {},
        "enlistmentApplications": {},
        "divisionMembers": {"active": []},
        "commandStructure": {"officers": []},
        "founderStory": "",
        "excoProfiles": {},
        "newsItems": [],
        "examScores": {},
        "activeExamYear": str(datetime.utcnow().year),
        "galleryItems": [],
        "companyDocuments": [],
        "memberDivisionIds": [],
    }


def migrate_legacy_storage() -> None:
    if DATA_FILE != DEFAULT_DATA_FILE and not DATA_FILE.exists() and DEFAULT_DATA_FILE.exists():
        DATA_FILE.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(DEFAULT_DATA_FILE, DATA_FILE)
    if UPLOAD_ROOT != LEGACY_UPLOAD_ROOT and not UPLOAD_ROOT.exists() and LEGACY_UPLOAD_ROOT.exists():
        UPLOAD_ROOT.parent.mkdir(parents=True, exist_ok=True)
        shutil.copytree(LEGACY_UPLOAD_ROOT, UPLOAD_ROOT)


def load_state() -> Dict[str, Any]:
    if DATA_FILE.exists():
        try:
            payload = json.loads(DATA_FILE.read_text(encoding="utf-8"))
            if isinstance(payload, dict):
                return normalize_state_payload(payload)
        except json.JSONDecodeError:
            pass
    return build_default_state()


def save_state() -> None:
    DATA_FILE.parent.mkdir(parents=True, exist_ok=True)
    temporary_file = DATA_FILE.with_suffix(f"{DATA_FILE.suffix}.tmp")
    temporary_file.write_text(json.dumps(store, indent=2, ensure_ascii=False), encoding="utf-8")
    temporary_file.replace(DATA_FILE)


def calculate_age(dob_value: str) -> int:
    try:
        birth_date = datetime.strptime(dob_value, "%Y-%m-%d")
    except ValueError:
        return 0
    today = datetime.utcnow()
    years = today.year - birth_date.year
    if (today.month, today.day) < (birth_date.month, birth_date.day):
        years -= 1
    return years


def get_section_and_rank(dob_value: str) -> Dict[str, str]:
    age = calculate_age(dob_value)
    if age <= 7:
        return {"section": "anchor", "rank": None}
    if age <= 12:
        return {"section": "junior", "rank": None}
    if age <= 16:
        return {"section": "intermediate", "rank": None}
    if age <= 24:
        return {"section": "senior", "rank": None}
    return {"section": "officer", "rank": None}


def classify_personnel(member: Dict[str, Any]) -> str:
    explicit_category = str(member.get("category") or member.get("classification") or "").strip().lower()
    explicit_rank = str(member.get("rank") or member.get("designation") or member.get("title") or "").strip().lower()
    values = [
        explicit_rank,
        str(member.get("name") or ""),
    ]
    combined = " ".join(value.strip().lower() for value in values if value.strip())
    normalized_rank = re.sub(r"[^a-z]+", " ", explicit_rank).strip()
    if normalized_rank in {"nco", "non commissioned officer", "noncommissioned officer"}:
        return "NCO"
    if re.search(r"\b(nco|non[- ]commissioned officer|warrant officer|sergeant|corporal|provost)\b", explicit_rank):
        return "NCO"
    if re.search(r"\b(commissioned officer|captain|capt\.?|lieutenant|lt\.?|colonel|major|general|brigadier|ensign)\b", explicit_rank):
        return "COMMISSIONED_OFFICER"
    name = str(member.get("name") or "").strip().lower()
    if re.search(r"\b(nco|non[- ]commissioned officer|warrant officer|sergeant|corporal|provost)\b", name):
        return "NCO"
    if re.search(r"\b(commissioned officer|captain|capt\.?|lieutenant|lt\.?|colonel|major|general|brigadier|ensign)\b", name):
        return "COMMISSIONED_OFFICER"
    if re.search(r"\bofficer\b", name):
        return "OFFICER"

    normalized_category = re.sub(r"[^a-z]+", " ", explicit_category).strip()
    if normalized_category in {"nco", "non commissioned officer", "noncommissioned officer"}:
        return "NCO"
    if normalized_category in {"officer", "officers"}:
        return "OFFICER"
    if normalized_category in {"commissioned officer", "commissioned officers", "c o"}:
        return "COMMISSIONED_OFFICER"
    if explicit_category in {"member", "members"}:
        return "MEMBER"

    if re.search(r"\b(nco|non[- ]commissioned officer|warrant officer|sergeant|corporal)\b", combined):
        return "NCO"
    if re.search(r"\b(commissioned officer|captain|capt\.?|lieutenant|lt\.?|colonel|major|general|brigadier|ensign)\b", combined):
        return "COMMISSIONED_OFFICER"
    if re.search(r"\bofficer\b", combined):
        return "OFFICER"
    if str(member.get("section") or "").strip().lower() == "officer":
        return "OFFICER"
    return "MEMBER"


migrate_legacy_storage()
store = load_state()
store_lock = RLock()

app = FastAPI(title="Royal Shepherd Backend", version="1.0.0")

ROOT_DIR = Path(__file__).resolve().parent.parent
GALLERY_UPLOAD_DIR = UPLOAD_ROOT / "gallery"
PDF_UPLOAD_DIR = UPLOAD_ROOT / "company-documents"
for upload_dir in (UPLOAD_ROOT, GALLERY_UPLOAD_DIR, PDF_UPLOAD_DIR):
    upload_dir.mkdir(parents=True, exist_ok=True)


def make_safe_filename(filename: str | None) -> str:
    if not filename:
        return "upload.bin"
    safe_name = re.sub(r"[^A-Za-z0-9._-]+", "-", Path(filename).name).strip(".-")
    return safe_name or "upload.bin"


def make_public_upload_url(request: Request, relative_path: str) -> str:
    base_url = str(request.base_url).rstrip("/")
    return f"{base_url}{relative_path}"


def save_uploaded_file(file: UploadFile, subdirectory: str, request: Request) -> Dict[str, Any]:
    target_dir = UPLOAD_ROOT / subdirectory
    target_dir.mkdir(parents=True, exist_ok=True)

    safe_name = make_safe_filename(file.filename)
    timestamp = datetime.utcnow().strftime("%Y%m%d%H%M%S%f")
    stored_name = f"{timestamp}-{safe_name}"
    destination = target_dir / stored_name

    with destination.open("wb") as destination_file:
        while chunk := file.file.read(1024 * 1024):
            destination_file.write(chunk)

    relative_path = f"/uploads/{subdirectory}/{stored_name}"
    return {
        "filename": safe_name,
        "stored_name": stored_name,
        "src": make_public_upload_url(request, relative_path),
        "path": str(destination),
    }


def get_admin_email(request: Request) -> str | None:
    authorization = request.headers.get("authorization", "")
    scheme, _, token = authorization.partition(" ")
    if not authorization:
        return None
    if scheme.lower() != "bearer" or not token:
        raise HTTPException(status_code=401, detail="Admin authentication is required.")
    now = time.monotonic()
    with ADMIN_SESSIONS_LOCK:
        session = ADMIN_SESSIONS.get(token)
        if not session or session[1] <= now:
            ADMIN_SESSIONS.pop(token, None)
            raise HTTPException(status_code=401, detail="Admin session expired. Please sign in again.")
        return session[0]


def require_admin(request: Request) -> str:
    admin_email = get_admin_email(request)
    if not admin_email:
        raise HTTPException(status_code=401, detail="Admin authentication is required.")
    return admin_email


def is_public_static_path(path: str) -> bool:
    normalized = PurePosixPath(path.replace("\\", "/"))
    if normalized.is_absolute() or ".." in normalized.parts:
        return False
    public_path = normalized.as_posix()
    if public_path in PUBLIC_ROOT_FILES or public_path in PUBLIC_ASSET_FILES:
        return True
    if len(normalized.parts) == 2 and normalized.parts[0] in {"image", "images"}:
        return normalized.suffix.lower() in PUBLIC_IMAGE_EXTENSIONS
    if len(normalized.parts) == 1:
        return normalized.suffix.lower() in PUBLIC_IMAGE_EXTENSIONS
    return False


class PublicRootStaticFiles(StaticFiles):
    async def get_response(self, path: str, scope: Dict[str, Any]):
        if not is_public_static_path(path):
            raise HTTPException(status_code=404, detail="Not Found")
        return await super().get_response(path, scope)


class PublishedUploadStaticFiles(StaticFiles):
    async def get_response(self, path: str, scope: Dict[str, Any]):
        normalized = PurePosixPath(path.replace("\\", "/"))
        if normalized.is_absolute() or len(normalized.parts) != 2 or ".." in normalized.parts:
            raise HTTPException(status_code=404, detail="Not Found")

        subdirectory, stored_name = normalized.parts
        if subdirectory not in {"gallery", "company-documents"}:
            raise HTTPException(status_code=404, detail="Not Found")

        collection = "galleryItems" if subdirectory == "gallery" else "companyDocuments"
        with store_lock:
            is_published = any(
                str(item.get("stored_name") or "") == stored_name
                for item in store.get(collection, [])
                if isinstance(item, dict)
            )
        if not is_published:
            raise HTTPException(status_code=404, detail="Not Found")
        return await super().get_response(path, scope)


def public_state_snapshot(state: Dict[str, Any]) -> Dict[str, Any]:
    public_state = deepcopy(state)
    for key in PUBLIC_PRIVATE_COLLECTION_KEYS:
        if key in public_state:
            public_state[key] = {}
    public_state["commanderAccounts"] = {}
    public_state["captainAccounts"] = {}

    public_state["galleryItems"] = [
        {
            key: item[key]
            for key in ("id", "src", "title", "description", "category", "uploadedAt")
            if key in item
        }
        for item in public_state.get("galleryItems", [])
        if isinstance(item, dict)
    ]
    public_state["companyDocuments"] = [
        {
            key: item[key]
            for key in ("id", "companyId", "documentName", "src", "uploadedAt")
            if key in item
        }
        for item in public_state.get("companyDocuments", [])
        if isinstance(item, dict)
    ]
    return public_state


def remove_uploaded_file(subdirectory: str, item: Dict[str, Any]) -> None:
    stored_name = str(item.get("stored_name") or "")
    if not stored_name:
        source_path = urlparse(str(item.get("src") or "")).path
        upload_prefix = f"/uploads/{subdirectory}/"
        if source_path.startswith(upload_prefix):
            stored_name = Path(source_path).name
    if not stored_name or Path(stored_name).name != stored_name:
        return
    target = UPLOAD_ROOT / subdirectory / stored_name
    try:
        target.unlink(missing_ok=True)
    except OSError:
        pass


@app.post("/api/gallery/upload")
async def upload_gallery_images(
    request: Request,
    files: List[UploadFile] = File(default=[]),
    titles: List[str] = Form(default=[]),
    descriptions: List[str] = Form(default=[]),
    categories: List[str] = Form(default=[]),
    title: str | None = Form(default=None),
    description: str | None = Form(default=None),
    category: str | None = Form(default=None),
):
    require_admin(request)
    if not files:
        raise HTTPException(status_code=400, detail="No gallery images were provided.")

    if not titles and title:
        titles = [title] * len(files)
    if not titles:
        titles = [file.filename or "Gallery picture" for file in files]

    if not descriptions and description:
        descriptions = [description] * len(files)
    if not descriptions:
        descriptions = ["Royal Shepherd gallery picture" for _ in files]

    if not categories and category:
        categories = [category] * len(files)
    if not categories:
        categories = ["parades" for _ in files]

    if len(titles) < len(files):
        titles.extend([file.filename or "Gallery picture" for file in files[len(titles):]])
    if len(descriptions) < len(files):
        descriptions.extend(["Royal Shepherd gallery picture" for _ in files[len(descriptions):]])
    if len(categories) < len(files):
        categories.extend(["parades" for _ in files[len(categories):]])

    for file in files:
        if not file.content_type or file.content_type.lower() not in {"image/jpeg", "image/jpg", "image/png", "image/webp"}:
            raise HTTPException(status_code=400, detail="Only JPG, PNG, and WebP images are allowed in the gallery.")
    if any((value or "parades").strip() not in GALLERY_CATEGORIES for value in categories[:len(files)]):
        raise HTTPException(status_code=400, detail="A selected gallery category is not supported.")

    saved_items: List[Dict[str, Any]] = []
    for index, file in enumerate(files):
        uploaded = save_uploaded_file(file, "gallery", request)
        item = {
            "id": f"gallery-{datetime.utcnow().strftime('%Y%m%d%H%M%S%f')}-{index}",
            "src": uploaded["src"],
            "title": titles[index].strip() or (file.filename or "Gallery picture"),
            "description": descriptions[index].strip() or "Royal Shepherd gallery picture",
            "category": (categories[index] or "parades").strip() or "parades",
            "filename": uploaded["filename"],
            "stored_name": uploaded["stored_name"],
            "uploadedAt": datetime.utcnow().isoformat(),
        }
        saved_items.append(item)

    with store_lock:
        store.setdefault("galleryItems", [])
        store["galleryItems"].extend(saved_items)
        save_state()

    return {"ok": True, "items": saved_items}


@app.delete("/api/gallery/{gallery_id}")
def delete_gallery_image(gallery_id: str, request: Request):
    require_admin(request)
    with store_lock:
        items = store.get("galleryItems", [])
        removed = [item for item in items if str(item.get("id") or item.get("src")) == gallery_id]
        if not removed:
            raise HTTPException(status_code=404, detail="Gallery picture not found.")
        store["galleryItems"] = [item for item in items if item not in removed]
        for item in removed:
            remove_uploaded_file("gallery", item)
        save_state()
    return {"ok": True, "removedId": gallery_id}


@app.post("/api/company-documents")
async def upload_company_document(
    request: Request,
    file: UploadFile = File(...),
    companyId: str = Form(""),
    documentName: str = Form(""),
    uploadedBy: str = Form(""),
    replaceDocumentId: str = Form(""),
):
    admin_email = require_admin(request)
    if not file.filename:
        raise HTTPException(status_code=400, detail="No PDF filename was provided.")

    if (not file.content_type or "pdf" not in file.content_type.lower()
            or not file.filename.lower().endswith(".pdf")
            or not file.file.read(5).startswith(b"%PDF-")):
        raise HTTPException(status_code=400, detail="Only PDF files are allowed for company documents.")
    file.file.seek(0)

    existing = None
    if replaceDocumentId:
        existing = next((doc for doc in store.get("companyDocuments", []) if str(doc.get("id") or doc.get("src")) == replaceDocumentId), None)
        if existing is None:
            raise HTTPException(status_code=404, detail="Company PDF to replace was not found.")

    uploaded = save_uploaded_file(file, "company-documents", request)
    item = {
        "id": (existing.get("id") if existing else None) or f"doc-{datetime.utcnow().strftime('%Y%m%d%H%M%S%f')}",
        "companyId": companyId.strip(),
        "documentName": documentName.strip() or Path(file.filename).stem,
        "filename": uploaded["filename"],
        "src": uploaded["src"],
        "uploadedAt": datetime.utcnow().isoformat(),
        "uploadedBy": admin_email or uploadedBy.strip(),
        "stored_name": uploaded["stored_name"],
    }

    with store_lock:
        docs = store.setdefault("companyDocuments", [])
        if existing:
            docs[:] = [item if doc.get("id") == replaceDocumentId else doc for doc in docs]
            remove_uploaded_file("company-documents", existing)
        else:
            docs.append(item)
        save_state()

    return {"ok": True, "item": item}


@app.delete("/api/company-documents/{document_id}")
def delete_company_document(document_id: str, request: Request):
    require_admin(request)
    with store_lock:
        docs = store.get("companyDocuments", [])
        remaining = []
        for doc in docs:
            if str(doc.get("id") or doc.get("src")) == document_id:
                remove_uploaded_file("company-documents", doc)
                continue
            remaining.append(doc)
        store["companyDocuments"] = remaining
        save_state()
        return {"ok": True, "removedId": document_id}


# Serve frontend static files from the workspace root (one level above `backend/`).
try:
    app.mount("/uploads", PublishedUploadStaticFiles(directory=str(UPLOAD_ROOT), html=False), name="uploads")
    app.mount("/static", PublicRootStaticFiles(directory=str(ROOT_DIR), html=True), name="static")
except Exception:
    # If StaticFiles can't be mounted (missing aiofiles), continue — API still works.
    pass

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/health")
def health_check():
    return {"status": "ok", "message": "Royal Shepherd backend is running"}


@app.get("/state")
def get_state(request: Request):
    with store_lock:
        if get_admin_email(request):
            return deepcopy(store)
        return public_state_snapshot(store)


@app.post("/state")
def save_full_state(payload: Dict[str, Any], request: Request):
    with store_lock:
        admin_email = get_admin_email(request)
        protected_keys = ("galleryItems", "companyDocuments")
        changed_protected_keys = [key for key in protected_keys if key in payload and payload[key] != store.get(key)]
        if changed_protected_keys:
            require_admin(request)
        writable_payload = dict(payload)
        if not admin_email:
            for key in ("captainAccounts", "commanderAccounts", "commanderVerificationCodes"):
                writable_payload.pop(key, None)
        merged_state = normalize_state_payload(writable_payload, store)
        store.clear()
        store.update(merged_state)
        save_state()
        print("[RS-BACKEND] Members before save", store.get("companies", {}))
        print("[RS-BACKEND] Payload sent to backend", payload)
        print("[RS-BACKEND] Backend state after save", store.get("companies", {}))
        if admin_email:
            return deepcopy(store)
        return public_state_snapshot(store)


# Provide API-prefixed aliases so frontend code can use /api/state without
# requiring the static mounting to change.
app.add_api_route("/api/state", get_state, methods=["GET"])
app.add_api_route("/api/state", save_full_state, methods=["POST"])


@app.get("/companies")
def get_companies():
    return store.get("companies", {})


@app.get("/companies/{company_id}")
def get_company(company_id: str):
    company = store.get("companies", {}).get(company_id)
    if company is None:
        raise HTTPException(status_code=404, detail="Company not found")
    return company


@app.post("/companies")
def save_company(payload: CompanyPayload):
    store.setdefault("companies", {})[payload.companyId] = {
        "name": payload.name,
        "active": payload.active,
        "inactive": payload.inactive,
        "officers": payload.officers,
        "anchor": payload.anchor,
        "junior": payload.junior,
        "intermediate": payload.intermediate,
        "senior": payload.senior,
        "officer": payload.officer,
        "totalMembers": payload.totalMembers,
        "totalNcos": payload.totalNcos,
        "totalOfficers": payload.totalOfficers,
        "totalCommissionedOfficers": payload.totalCommissionedOfficers,
        "members": payload.members,
    }
    save_state()
    return store["companies"][payload.companyId]


@app.post("/companies/bulk")
def save_companies_bulk(payload: List[CompanyPayload]):
    for company in payload:
        store.setdefault("companies", {})[company.companyId] = {
            "name": company.name,
            "active": company.active,
            "inactive": company.inactive,
            "officers": company.officers,
            "anchor": company.anchor,
            "junior": company.junior,
            "intermediate": company.intermediate,
            "senior": company.senior,
            "officer": company.officer,
            "totalMembers": company.totalMembers,
            "totalNcos": company.totalNcos,
            "totalOfficers": company.totalOfficers,
            "totalCommissionedOfficers": company.totalCommissionedOfficers,
            "members": company.members,
        }
    save_state()
    return store.get("companies", {})


@app.post("/auth/captain/login")
def captain_login(payload: Dict[str, Any]):
    email = str(payload.get("email", "")).strip().lower()
    password = str(payload.get("password", "")).strip()
    account = store.get("captainAccounts", {}).get(email)
    if account and secrets.compare_digest(str(account.get("password", "")), password):
        return {"ok": True, "email": email, "companyId": account.get("companyId"), "role": "captain"}
    raise HTTPException(status_code=401, detail="Invalid captain credentials")


@app.post("/auth/commander/login")
def commander_login(payload: Dict[str, Any]):
    email = str(payload.get("email", "")).strip().lower()
    password = str(payload.get("password", "")).strip()
    account = store.get("commanderAccounts", {}).get(email)
    if account and secrets.compare_digest(str(account.get("password", "")), password) and account.get("verified"):
        token = secrets.token_urlsafe(32)
        with ADMIN_SESSIONS_LOCK:
            ADMIN_SESSIONS[token] = (email, time.monotonic() + ADMIN_SESSION_TTL_SECONDS)
        return {"ok": True, "email": email, "role": "commander", "token": token}
    raise HTTPException(status_code=401, detail="Invalid commander credentials")


@app.post("/applications/{application_id}/approve")
def approve_application(application_id: str, request: Request):
    require_admin(request)
    applications = store.setdefault("enlistmentApplications", {})
    application = applications.get(application_id)
    if application is None:
        raise HTTPException(status_code=404, detail="Application not found")

    application["status"] = "Approved"
    application["approvedAt"] = datetime.utcnow().isoformat()

    company_id = application.get("company")
    if company_id and company_id in store.setdefault("companies", {}):
        company = store["companies"][company_id]
        full_name = application.get("fullName", "")
        if not any((member.get("name") == full_name for member in company.setdefault("members", []))):
            assignment = get_section_and_rank(application.get("dob", ""))
            section = assignment["section"]
            rank = assignment.get("rank")
            category = classify_personnel({"name": full_name, "rank": rank, "section": section})
            company.setdefault(section, [])
            company[section].append(full_name)
            company.setdefault("members", []).append({"name": full_name, "section": section, "rank": rank, "category": category, "email": application.get("email"), "phone": application.get("phone")})
            company.setdefault("active", company.get("active", []))
            company.setdefault("inactive", company.get("inactive", []))
            company.setdefault("officers", company.get("officers", []))
            if section == "officer":
                company["officer"].append(full_name)
                company["officers"].append(full_name)
            else:
                if section in {"anchor", "junior", "intermediate", "senior"}:
                    company["active" if section in {"anchor", "junior"} else "inactive"].append(full_name)

        company["totalMembers"] = len(company.get("members", []))
        company["totalNcos"] = sum(1 for member in company.get("members", []) if classify_personnel(member) == "NCO")
        company["totalOfficers"] = sum(1 for member in company.get("members", []) if classify_personnel(member) == "OFFICER")
        company["totalCommissionedOfficers"] = sum(1 for member in company.get("members", []) if classify_personnel(member) == "COMMISSIONED_OFFICER")

    save_state()
    return application


@app.post("/applications/{application_id}/deny")
def deny_application(application_id: str, request: Request):
    require_admin(request)
    applications = store.setdefault("enlistmentApplications", {})
    application = applications.get(application_id)
    if application is None:
        raise HTTPException(status_code=404, detail="Application not found")

    application["status"] = "Denied"
    application["updatedAt"] = datetime.utcnow().isoformat()
    save_state()
    return application


# Catch-all route to serve the frontend's index.html for non-API paths.
@app.get("/{full_path:path}")
def serve_index(full_path: str):
    index_file = ROOT_DIR / "index.html"
    if index_file.exists():
        return FileResponse(str(index_file))
    raise HTTPException(status_code=404, detail="Not Found")
