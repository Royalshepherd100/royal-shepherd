from datetime import datetime
import json
import os
from copy import deepcopy
from threading import RLock
from pathlib import Path
from typing import Any, Dict, List

from fastapi import FastAPI, HTTPException
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
    members: List[Dict[str, Any]] = []


class CompanyBulkPayload(BaseModel):
    companies: List[CompanyPayload]


DEFAULT_DATA_FILE = Path(__file__).resolve().parent / "data_store.json"
DATA_FILE = Path(os.environ.get("RS_DATA_FILE", DEFAULT_DATA_FILE))
REQUEST_COLLECTION_KEYS = (
    "captainRequests",
    "companyDashboardRequests",
    "dashboardRequests",
    "companyRequests",
    "pendingRequests",
    "pendingCompanyRequests",
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
        "1": {"name": "Oke Odo - 12th Akiling Regional Coy", "anchor": [], "junior": [], "intermediate": [], "senior": [], "officer": [], "active": [], "inactive": [], "officers": [], "members": [], "totalMembers": 0, "totalNcos": 0, "totalOfficers": 0},
        "2": {"name": "Ikorodu - 15th Akiling Regional Coy", "anchor": [], "junior": [], "intermediate": [], "senior": [], "officer": [], "active": [], "inactive": [], "officers": [], "members": [], "totalMembers": 0, "totalNcos": 0, "totalOfficers": 0},
        "3": {"name": "Iyesi - 17th Akiling Regional Coy", "anchor": [], "junior": [], "intermediate": [], "senior": [], "officer": [], "active": [], "inactive": [], "officers": [], "members": [], "totalMembers": 0, "totalNcos": 0, "totalOfficers": 0},
        "4": {"name": "Sango - 28th Akiling Regional Coy", "anchor": [], "junior": [], "intermediate": [], "senior": [], "officer": [], "active": [], "inactive": [], "officers": [], "members": [], "totalMembers": 0, "totalNcos": 0, "totalOfficers": 0},
        "5": {"name": "Command - 31st Akiling Regional Coy", "anchor": [], "junior": [], "intermediate": [], "senior": [], "officer": [], "active": [], "inactive": [], "officers": [], "members": [], "totalMembers": 0, "totalNcos": 0, "totalOfficers": 0},
        "6": {"name": "Ipaja - 38th Akiling Regional Coy", "anchor": [], "junior": [], "intermediate": [], "senior": [], "officer": [], "active": [], "inactive": [], "officers": [], "members": [], "totalMembers": 0, "totalNcos": 0, "totalOfficers": 0},
        "7": {"name": "Ijaba - 44th Akiling Regional Coy", "anchor": [], "junior": [], "intermediate": [], "senior": [], "officer": [], "active": [], "inactive": [], "officers": [], "members": [], "totalMembers": 0, "totalNcos": 0, "totalOfficers": 0},
        "8": {"name": "Ijoko - 48th Akiling Regional Coy", "anchor": [], "junior": [], "intermediate": [], "senior": [], "officer": [], "active": [], "inactive": [], "officers": [], "members": [], "totalMembers": 0, "totalNcos": 0, "totalOfficers": 0},
        "9": {"name": "Ikeja - 49th Akiling Regional Coy", "anchor": [], "junior": [], "intermediate": [], "senior": [], "officer": [], "active": [], "inactive": [], "officers": [], "members": [], "totalMembers": 0, "totalNcos": 0, "totalOfficers": 0},
    }


def build_default_state() -> Dict[str, Any]:
    return {
        "companies": build_default_companies(),
        "captainAccounts": {},
        "commanderAccounts": {"commander@royalshepherd.com": {"password": "royalshepherd2026", "verified": True, "email": "commander@royalshepherd.com"}},
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
    }


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
    DATA_FILE.write_text(json.dumps(store, indent=2, ensure_ascii=False), encoding="utf-8")


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
        return {"section": "anchor", "rank": "NCO"}
    if age <= 12:
        return {"section": "junior", "rank": "NCO"}
    if age <= 16:
        return {"section": "intermediate", "rank": "NCO"}
    if age <= 24:
        return {"section": "senior", "rank": "NCO"}
    return {"section": "officer", "rank": "Commissioned Officer"}


store = load_state()
store_lock = RLock()

app = FastAPI(title="Royal Shepherd Backend", version="1.0.0")

# Serve frontend static files from the workspace root (one level above `backend/`).
ROOT_DIR = Path(__file__).resolve().parent.parent
try:
    # Mount static files under /static to avoid intercepting API routes.
    app.mount("/static", StaticFiles(directory=str(ROOT_DIR), html=True), name="static")
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
def get_state():
    with store_lock:
        return deepcopy(store)


@app.post("/state")
def save_full_state(payload: Dict[str, Any]):
    with store_lock:
        merged_state = normalize_state_payload(payload, store)
        store.clear()
        store.update(merged_state)
        save_state()
        print("[RS-BACKEND] Members before save", store.get("companies", {}))
        print("[RS-BACKEND] Payload sent to backend", payload)
        print("[RS-BACKEND] Backend state after save", store.get("companies", {}))
        return deepcopy(store)


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
            "members": company.members,
        }
    save_state()
    return store.get("companies", {})


@app.post("/auth/captain/login")
def captain_login(payload: Dict[str, Any]):
    email = str(payload.get("email", "")).strip().lower()
    password = str(payload.get("password", "")).strip()
    account = store.get("captainAccounts", {}).get(email)
    if account and account.get("password") == password:
        return {"ok": True, "email": email, "companyId": account.get("companyId"), "role": "captain"}
    raise HTTPException(status_code=401, detail="Invalid captain credentials")


@app.post("/auth/commander/login")
def commander_login(payload: Dict[str, Any]):
    email = str(payload.get("email", "")).strip().lower()
    password = str(payload.get("password", "")).strip()
    account = store.get("commanderAccounts", {}).get(email)
    if account and account.get("password") == password and account.get("verified"):
        return {"ok": True, "email": email, "role": "commander"}
    raise HTTPException(status_code=401, detail="Invalid commander credentials")


@app.post("/applications/{application_id}/approve")
def approve_application(application_id: str):
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
            rank = assignment["rank"]
            company.setdefault(section, [])
            company[section].append(full_name)
            company.setdefault("members", []).append({"name": full_name, "section": section, "rank": rank, "email": application.get("email"), "phone": application.get("phone")})
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
        company["totalNcos"] = sum(1 for member in company.get("members", []) if member.get("rank") == "NCO")
        company["totalOfficers"] = sum(1 for member in company.get("members", []) if member.get("rank") == "Commissioned Officer")

    save_state()
    return application


@app.post("/applications/{application_id}/deny")
def deny_application(application_id: str):
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
