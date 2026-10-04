import importlib
import os
import tempfile
from pathlib import Path

from fastapi.testclient import TestClient

# Use an isolated temporary data store for tests so the app's production state is not modified.
temp_dir = tempfile.TemporaryDirectory()
os.environ["RS_DATA_FILE"] = str(Path(temp_dir.name) / "data_store.json")
os.environ["RS_UPLOAD_DIR"] = str(Path(temp_dir.name) / "uploads")


def new_client():
    import backend.main as main

    main = importlib.reload(main)
    main.store.clear()
    main.store.update(main.build_default_state())
    main.store["commanderAccounts"] = {
        "admin@example.com": {"email": "admin@example.com", "password": "test-admin-password", "verified": True}
    }
    main.save_state()
    return TestClient(main.app)


def admin_headers(client):
    response = client.post("/auth/commander/login", json={"email": "admin@example.com", "password": "test-admin-password"})
    assert response.status_code == 200
    return {"Authorization": f"Bearer {response.json()['token']}"}


def test_public_state_does_not_expose_private_request_records():
    client = new_client()
    import backend.main as main

    private_record = {
        "email": "private@example.com",
        "phone": "555-0100",
        "message": "Private submission message",
    }
    for key in main.REQUEST_COLLECTION_KEYS:
        main.store[key] = {"request-1": private_record}
    main.store["enlistmentApplications"] = {
        "application-1": {
            "fullName": "Private Applicant",
            "email": "applicant@example.com",
            "phone": "555-0101",
        }
    }

    for response in (client.get("/state"), client.get("/api/state")):
        assert response.status_code == 200
        public_state = response.json()
        for key in main.REQUEST_COLLECTION_KEYS:
            assert public_state[key] == {}
        assert public_state["enlistmentApplications"] == {}
        assert "private@example.com" not in str(public_state)
        assert "Private submission message" not in str(public_state)
        assert "Private Applicant" not in str(public_state)

    main.store["commanderAccounts"] = {
        "admin@example.com": {"password": "admin-test-password", "verified": True}
    }
    login = client.post(
        "/auth/commander/login",
        json={"email": "admin@example.com", "password": "admin-test-password"},
    )
    assert login.status_code == 200
    admin_state = client.get(
        "/state",
        headers={"Authorization": f"Bearer {login.json()['token']}"},
    ).json()
    assert admin_state["enlistmentApplications"]["application-1"]["fullName"] == "Private Applicant"

    save_response = client.post("/state", json={"founderStory": "Public story"})
    assert save_response.status_code == 200
    assert save_response.json()["enlistmentApplications"] == {}
    assert "Private Applicant" not in save_response.text


def test_static_allowlist_blocks_internal_files_and_keeps_public_assets():
    client = new_client()

    for path in ("/static/index.css", "/static/app.js", "/static/image/pa%20sk%20abiara.jpeg"):
        assert client.get(path).status_code == 200
    for path in (
        "/static/backend/data_store.json",
        "/static/backend_state.json",
        "/static/after_post.json",
        "/static/backend/main.py",
        "/static/backend/tests/test_main.py",
    ):
        assert client.get(path).status_code == 404


def test_get_company_by_id_returns_company():
    client = new_client()
    response = client.get("/companies/1")

    assert response.status_code == 200
    assert response.json()["name"] == "Oke Odo - 12th Akiling Regional Coy"


def test_default_companies_do_not_include_stale_company_10_duplicate():
    import backend.main as main

    main = importlib.reload(main)
    assert "10" not in main.build_default_companies()


def test_approve_application_assigns_member_to_company_and_section():
    client = new_client()
    client.post(
        "/state",
        json={
            "companies": {
                "1": {
                    "name": "Oke Odo - 12th Akiling Regional Coy",
                    "anchor": [],
                    "junior": [],
                    "intermediate": [],
                    "senior": [],
                    "officer": [],
                    "active": [],
                    "inactive": [],
                    "officers": [],
                    "members": [],
                    "totalMembers": 0,
                    "totalNcos": 0,
                    "totalOfficers": 0,
                }
            },
            "captainAccounts": {},
            "commanderAccounts": {"commander@royalshepherd.com": {"password": "royalshepherd2026", "verified": True, "email": "commander@royalshepherd.com"}},
            "captainRequests": {},
            "enlistmentApplications": {
                "app_test": {
                    "id": "app_test",
                    "fullName": "John Doe",
                    "email": "john@example.com",
                    "dob": "2016-05-14",
                    "phone": "1234567890",
                    "gender": "Male",
                    "company": "1",
                    "reason": "To serve",
                    "status": "Pending",
                }
            },
            "divisionMembers": {"active": []},
            "commandStructure": {"officers": []},
            "founderStory": "",
            "excoProfiles": {},
            "examScores": {},
            "activeExamYear": "2026",
            "galleryItems": [],
        },
        headers=admin_headers(client),
    )

    response = client.post("/applications/app_test/approve", headers=admin_headers(client))

    assert response.status_code == 200
    company = client.get("/companies/1").json()
    assert company["totalMembers"] == 1
    assert company["totalNcos"] == 0
    assert company["totalOfficers"] == 0
    assert company["totalCommissionedOfficers"] == 0
    assert company["members"][0]["rank"] is None
    assert company["members"][0]["category"] == "MEMBER"


def test_personnel_classification_uses_rank_or_designation_not_senior_section():
    import backend.main as main

    main = importlib.reload(main)
    assert main.classify_personnel({"name": "Senior Member", "section": "senior"}) == "MEMBER"
    assert main.classify_personnel({"name": "Member", "rank": "NCO", "section": "senior"}) == "NCO"
    assert main.classify_personnel({"name": "Warrant Officer Adebisi"}) == "NCO"
    assert main.classify_personnel({"name": "Provost Owolabi Abigael"}) == "NCO"
    assert main.classify_personnel({"name": "Officer Goodluck Adebiyi"}) == "OFFICER"
    assert main.classify_personnel({"name": "Captain Samuel Ilori", "category": "MEMBER"}) == "COMMISSIONED_OFFICER"
    assert main.classify_personnel({"name": "Rankless PDF officer", "section": "officer"}) == "OFFICER"
    assert main.classify_personnel({"name": "Senior member", "section": "senior", "category": "MEMBER"}) == "MEMBER"
    assert main.classify_personnel({"name": "Captain Samuel Ilori"}) == "COMMISSIONED_OFFICER"
    assert main.classify_personnel({"name": "Member", "rank": "Commissioned Officer"}) == "COMMISSIONED_OFFICER"


def test_post_state_merges_pending_requests_instead_of_overwriting_them():
    client = new_client()
    first_response = client.post(
        "/state",
        json={
            "companyDashboardRequests": {
                "first@example.com": {
                    "email": "first@example.com",
                    "companyId": "1",
                    "submittedAt": "2026-08-04T00:00:00Z",
                }
            }
        },
    )
    assert first_response.status_code == 200

    second_response = client.post(
        "/state",
        json={
            "companyDashboardRequests": {
                "second@example.com": {
                    "email": "second@example.com",
                    "companyId": "2",
                    "submittedAt": "2026-08-04T00:01:00Z",
                }
            }
        },
    )
    assert second_response.status_code == 200

    state = client.get("/state", headers=admin_headers(client)).json()
    requests = state.get("companyDashboardRequests") or state.get("captainRequests") or {}
    assert set(requests.keys()) == {"first@example.com", "second@example.com"}


def test_post_state_preserves_existing_members_when_partial_company_payload_arrives():
    client = new_client()
    first_response = client.post(
        "/state",
        json={
            "companies": {
                "1": {
                    "name": "Company 1",
                    "anchor": ["Ada"],
                    "junior": [],
                    "intermediate": [],
                    "senior": [],
                    "officer": [],
                    "active": ["Ada"],
                    "inactive": [],
                    "officers": [],
                    "members": [{"name": "Ada", "section": "anchor"}],
                    "totalMembers": 1,
                    "totalNcos": 0,
                    "totalOfficers": 0,
                }
            }
        },
    )
    assert first_response.status_code == 200

    second_response = client.post(
        "/state",
        json={
            "companies": {
                "1": {
                    "name": "Company 1",
                    "anchor": [],
                    "junior": [],
                    "intermediate": [],
                    "senior": [],
                    "officer": [],
                    "active": [],
                    "inactive": [],
                    "officers": [],
                }
            }
        },
    )
    assert second_response.status_code == 200

    state = client.get("/state").json()
    company = state["companies"]["1"]
    assert company["anchor"] == ["Ada"]
    assert company["active"] == ["Ada"]
    assert company["members"][0]["name"] == "Ada"


def test_post_state_preserves_gallery_items_across_partial_updates():
    client = new_client()
    headers = admin_headers(client)

    first_response = client.post(
        "/state",
        json={
            "galleryItems": [
                {"src": "uploaded-image.png", "title": "Uploaded", "description": "Shared gallery image", "category": "parades"}
            ]
        },
        headers=headers,
    )
    assert first_response.status_code == 200

    second_response = client.post(
        "/state",
        json={
            "companies": {
                "1": {
                    "name": "Company 1",
                    "anchor": [],
                    "junior": [],
                    "intermediate": [],
                    "senior": [],
                    "officer": [],
                    "active": [],
                    "inactive": [],
                    "officers": [],
                    "members": [],
                    "totalMembers": 0,
                    "totalNcos": 0,
                    "totalOfficers": 0,
                }
            }
        },
    )
    assert second_response.status_code == 200

    state = client.get("/state").json()
    assert state["galleryItems"] == [
        {"src": "uploaded-image.png", "title": "Uploaded", "description": "Shared gallery image", "category": "parades"}
    ]


def test_full_state_save_can_intentionally_clear_a_collection():
    client = new_client()
    item = {"src": "saved.png", "title": "Saved", "description": "Saved", "category": "parades"}
    headers = admin_headers(client)
    assert client.post("/state", json={"galleryItems": [item]}, headers=headers).status_code == 200
    assert client.post("/state", json={"_fullState": True, "galleryItems": []}, headers=headers).status_code == 200
    assert client.get("/state").json()["galleryItems"] == []


def test_post_state_preserves_news_items_across_partial_updates():
    client = new_client()
    news_item = {
        "id": "news-1",
        "title": "Shared update",
        "date": "2026-09-08",
        "description": "Visible to every visitor",
        "image": "image/parade.png",
    }

    assert client.post("/state", json={"newsItems": [news_item]}).status_code == 200
    assert client.get("/state").json()["newsItems"] == [news_item]
    assert client.post("/state", json={"founderStory": "Updated"}).status_code == 200
    assert client.get("/state").json()["newsItems"] == [news_item]


def test_member_division_id_snapshot_persists_across_partial_state_updates():
    client = new_client()
    member_ids = [
        {
            "id": "AI.D/03/070/009",
            "name": "Example Member",
            "companyRecordId": "4",
            "companySerial": "03",
            "generalSerial": 70,
            "memberSerial": 9,
        }
    ]

    assert client.post("/state", json={"memberDivisionIds": member_ids}).status_code == 200
    assert client.post("/state", json={"founderStory": "Updated"}).status_code == 200
    assert client.get("/state").json()["memberDivisionIds"] == member_ids


def test_gallery_items_survive_refresh_and_later_partial_state_save():
    client = new_client()
    gallery_item = {
        "src": "WhatsApp Image 2026-07-12 at 7.52.56 AM.jpeg",
        "title": "Shared moment",
        "description": "Visible to every visitor",
        "category": "training",
    }

    headers = admin_headers(client)
    assert client.post("/state", json={"galleryItems": [gallery_item]}, headers=headers).status_code == 200
    assert client.get("/state").json()["galleryItems"] == [gallery_item]
    assert client.post("/state", json={"founderStory": "Updated"}).status_code == 200
    assert client.get("/state").json()["galleryItems"] == [gallery_item]


def test_gallery_upload_persists_uploaded_images_in_backend_state():
    client = new_client()
    headers = admin_headers(client)
    response = client.post(
        "/api/gallery/upload",
        files=[
            ("files", ("sample.png", b"\x89PNG\r\n\x1a\n", "image/png")),
            ("files", ("band.png", b"\x89PNG\r\n\x1a\n", "image/png")),
        ],
        data={"titles": ["Sample", "Band"], "descriptions": ["Parade", "Band"], "categories": ["parades", "band"]},
        headers=headers,
    )

    assert response.status_code == 200
    payload = response.json()
    assert payload["items"]
    assert [item["category"] for item in payload["items"]] == ["parades", "band"]
    assert payload["items"][0]["src"].startswith("http") or payload["items"][0]["src"].startswith("/")
    saved_items = client.get("/state").json()["galleryItems"]
    assert [item["category"] for item in saved_items] == ["parades", "band"]
    assert client.get(payload["items"][0]["src"]).status_code == 200


def test_media_mutations_require_admin_and_public_state_hides_private_records():
    client = new_client()
    import backend.main as main

    main.store["captainAccounts"] = {
        "captain@example.com": {"email": "captain@example.com", "password": "test-captain-password", "companyId": "1", "verified": True}
    }
    main.store["captainRequests"] = {
        "pending@example.com": {"email": "pending@example.com", "password": "pending-secret", "companyId": "1"}
    }
    main.store["enlistmentApplications"] = {
        "application-1": {
            "fullName": "Private Applicant",
            "email": "applicant@example.com",
            "phone": "555-0100",
            "reason": "Private request",
            "status": "Pending",
        }
    }
    main.store["companyDashboardRequests"] = {
        "company@example.com": {"email": "company@example.com", "message": "Private company request"}
    }
    for key in main.REQUEST_COLLECTION_KEYS:
        main.store.setdefault(key, {"private@example.com": {"email": "private@example.com"}})
    main.store["commanderVerificationCodes"] = {"admin@example.com": "123456"}
    main.store["galleryItems"] = [
        {
            "id": "gallery-1",
            "src": "/uploads/gallery/published.png",
            "title": "Published image",
            "category": "parades",
            "filename": "published.png",
            "stored_name": "published.png",
            "uploadedBy": "admin@example.com",
        }
    ]
    main.store["companyDocuments"] = [
        {
            "id": "document-1",
            "companyId": "1",
            "documentName": "Published handbook",
            "src": "/uploads/company-documents/handbook.pdf",
            "filename": "handbook.pdf",
            "stored_name": "handbook.pdf",
            "uploadedBy": "admin@example.com",
        }
    ]
    main.save_state()
    image_upload = client.post(
        "/api/gallery/upload",
        files=[("files", ("sample.png", b"\x89PNG\r\n\x1a\n", "image/png"))],
    )
    pdf_upload = client.post(
        "/api/company-documents",
        files=[("file", ("handbook.pdf", b"%PDF-1.4", "application/pdf"))],
    )

    assert image_upload.status_code == 401
    assert pdf_upload.status_code == 401
    assert client.post("/state", json={"galleryItems": [{"src": "injected.png", "category": "parades"}]}).status_code == 401
    public_accounts = client.get("/state").json()["commanderAccounts"]
    assert public_accounts == {}
    public_state = client.get("/state").json()
    assert public_state["captainAccounts"] == {}
    for key in main.REQUEST_COLLECTION_KEYS:
        assert public_state[key] == {}
    assert public_state["enlistmentApplications"] == {}
    assert public_state["commanderVerificationCodes"] == {}
    assert "password" not in str(public_state)
    assert "Private Applicant" not in str(public_state)
    assert "applicant@example.com" not in str(public_state)
    assert "Private request" not in str(public_state)
    assert "uploadedBy" not in public_state["galleryItems"][0]
    assert "stored_name" not in public_state["galleryItems"][0]
    assert "filename" not in public_state["galleryItems"][0]
    assert "uploadedBy" not in public_state["companyDocuments"][0]
    assert "stored_name" not in public_state["companyDocuments"][0]
    assert "filename" not in public_state["companyDocuments"][0]
    save_response = client.post("/state", json={"founderStory": "Public update"}).json()
    assert save_response["captainRequests"] == {}
    assert save_response["enlistmentApplications"] == {}
    assert "Private Applicant" not in str(save_response)
    captain_login = client.post("/auth/captain/login", json={"email": "captain@example.com", "password": "test-captain-password"})
    assert captain_login.status_code == 200
    assert captain_login.json()["companyId"] == "1"

    private_state = client.get("/state", headers=admin_headers(client)).json()
    assert private_state["captainAccounts"]["captain@example.com"]["password"] == "test-captain-password"
    assert private_state["captainRequests"]["pending@example.com"]["password"] == "pending-secret"
    assert private_state["enlistmentApplications"]["application-1"]["fullName"] == "Private Applicant"
    assert private_state["companyDashboardRequests"]["company@example.com"]["message"] == "Private company request"
    assert private_state["commanderVerificationCodes"]["admin@example.com"] == "123456"


def test_public_static_files_are_allowlisted_and_uploads_require_published_metadata():
    client = new_client()

    assert client.get("/static/index.css").status_code == 200
    assert client.get("/static/app.js").status_code == 200
    assert client.get("/static/image/pa%20sk%20abiara.jpeg").status_code == 200
    assert client.get("/static/backend/data_store.json").status_code == 404
    assert client.get("/static/backend_state.json").status_code == 404
    assert client.get("/static/after_post.json").status_code == 404
    assert client.get("/static/response_bacl.json").status_code == 404
    assert client.get("/static/backend/tests/test_main.py").status_code == 404
    assert client.get("/static/.gitignore").status_code == 404
    assert client.get("/static/backend\\data_store.json").status_code == 404
    assert client.get("/static/backend\\private.png").status_code == 404
    assert client.get("/uploads/gallery/unpublished.png").status_code == 404
    assert client.get("/uploads/company-documents/unpublished.pdf").status_code == 404


def test_application_approval_and_denial_require_admin():
    client = new_client()
    import backend.main as main

    main.store["enlistmentApplications"] = {
        "application-1": {"fullName": "Private Applicant", "company": "1", "status": "Pending"}
    }
    main.save_state()

    assert client.post("/applications/application-1/approve").status_code == 401
    assert client.post("/applications/application-1/deny").status_code == 401
    assert client.post("/applications/application-1/deny", headers=admin_headers(client)).status_code == 200


def test_gallery_delete_removes_record_and_public_file():
    client = new_client()
    headers = admin_headers(client)
    upload = client.post(
        "/api/gallery/upload",
        files=[("files", ("sample.png", b"\x89PNG\r\n\x1a\n", "image/png"))],
        headers=headers,
    ).json()["items"][0]

    assert client.delete(f"/api/gallery/{upload['id']}").status_code == 401
    assert client.delete(f"/api/gallery/{upload['id']}", headers=headers).status_code == 200
    assert client.get(upload["src"]).status_code == 404
    assert client.get("/state").json()["galleryItems"] == []


def test_company_document_upload_persists_pdf_and_metadata():
    client = new_client()
    response = client.post(
        "/api/company-documents",
        files=[("file", ("company-handbook.pdf", b"%PDF-1.4\n1 0 obj\n<<>>\nendobj\ntrailer\n<<>>\n%%EOF", "application/pdf"))],
        data={"companyId": "1", "documentName": "8th Awori Lagos Company Handbook", "uploadedBy": "commander@royalshepherd.com"},
        headers=admin_headers(client),
    )

    assert response.status_code == 200
    payload = response.json()
    assert payload["item"]["companyId"] == "1"
    assert payload["item"]["documentName"] == "8th Awori Lagos Company Handbook"
    assert payload["item"]["src"].startswith("http") or payload["item"]["src"].startswith("/")
    assert client.get("/state").json()["companyDocuments"][-1]["documentName"] == "8th Awori Lagos Company Handbook"


def test_company_document_replacement_keeps_one_published_pdf():
    client = new_client()
    headers = admin_headers(client)
    first = client.post(
        "/api/company-documents",
        files=[("file", ("old.pdf", b"%PDF-1.4\nold", "application/pdf"))],
        data={"companyId": "1", "documentName": "Company Handbook"},
        headers=headers,
    ).json()["item"]
    replacement = client.post(
        "/api/company-documents",
        files=[("file", ("new.pdf", b"%PDF-1.4\nnew", "application/pdf"))],
        data={"companyId": "1", "documentName": "Updated Handbook", "replaceDocumentId": first["id"]},
        headers=headers,
    )

    assert replacement.status_code == 200
    current = client.get("/state").json()["companyDocuments"]
    assert len(current) == 1
    assert current[0]["documentName"] == "Updated Handbook"
    assert current[0]["id"] == first["id"]
    assert client.get(first["src"]).status_code == 404
    assert client.get(replacement.json()["item"]["src"]).status_code == 200


def test_published_media_survives_fresh_backend_instance():
    client = new_client()
    headers = admin_headers(client)
    gallery = client.post(
        "/api/gallery/upload",
        files=[("files", ("fresh.png", b"\x89PNG\r\n\x1a\n", "image/png"))],
        data={"category": "band", "title": "Fresh session photo"},
        headers=headers,
    ).json()["items"][0]
    document = client.post(
        "/api/company-documents",
        files=[("file", ("fresh.pdf", b"%PDF-1.4\ncontent", "application/pdf"))],
        data={"companyId": "1", "documentName": "Fresh session handbook"},
        headers=headers,
    ).json()["item"]

    import backend.main as main

    main = importlib.reload(main)
    fresh_visitor = TestClient(main.app)
    public_state = fresh_visitor.get("/state").json()

    assert public_state["galleryItems"][0]["category"] == "band"
    assert public_state["galleryItems"][0]["title"] == "Fresh session photo"
    assert public_state["companyDocuments"][0]["documentName"] == "Fresh session handbook"
    assert fresh_visitor.get(gallery["src"]).status_code == 200
    assert fresh_visitor.get(document["src"]).status_code == 200
