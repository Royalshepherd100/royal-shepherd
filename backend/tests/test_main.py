import importlib
import os
import tempfile
from pathlib import Path

from fastapi.testclient import TestClient

# Use an isolated temporary data store for tests so the app's production state is not modified.
temp_dir = tempfile.TemporaryDirectory()
os.environ["RS_DATA_FILE"] = str(Path(temp_dir.name) / "data_store.json")


def new_client():
    import backend.main as main

    main = importlib.reload(main)
    return TestClient(main.app)


def test_get_company_by_id_returns_company():
    client = new_client()
    response = client.get("/companies/1")

    assert response.status_code == 200
    assert response.json()["name"] == "Oke Odo - 12th Akiling Regional Coy"


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
    )

    response = client.post("/applications/app_test/approve")

    assert response.status_code == 200
    company = client.get("/companies/1").json()
    assert company["totalMembers"] == 1
    assert company["totalNcos"] == 1
    assert company["totalOfficers"] == 0
    assert company["members"][0]["section"] == "junior"
    assert company["members"][0]["rank"] == "NCO"


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

    state = client.get("/state").json()
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

    first_response = client.post(
        "/state",
        json={
            "galleryItems": [
                {"src": "uploaded-image.png", "title": "Uploaded", "description": "Shared gallery image", "category": "parades"}
            ]
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
