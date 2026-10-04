# Render Deployment Guide

This project is configured for deployment on Render using `render.yaml`.

## Frontend
- The frontend is served as a static site built from the project root.
- Render service name: `royal-shepherd`
- The build command creates an allowlisted `dist/` directory containing public pages and media, excluding backend state and uploads.
- Render publishes `dist/`.

## Backend
- The backend is a FastAPI app in `backend/main.py`.
- Render service name: `royal-shepherd-bacl`
- Python root: `backend`
- Install command: `pip install -r requirements/requirements.txt`
- Start command: `uvicorn main:app --host 0.0.0.0 --port $PORT`
- Render health check endpoint: `/` (the API health endpoint is `/api/health` in the current backend source)
- The backend mounts a 1 GB persistent disk at `/var/data`; `data_store.json` and uploaded gallery/PDF files are stored there.
- Set `RS_ADMIN_EMAIL` and `RS_ADMIN_PASSWORD` as private Render environment values for the authorized admin account. Admin self-registration is disabled.

## How to deploy on Render
1. Sign in to Render at https://render.com.
2. Create a new "Web Service" and connect your GitHub repo.
3. Ensure Render detects `render.yaml` and uses it to deploy both services from the `main` branch.
4. Use the service settings defined in `render.yaml` if Render asks for confirmation.
5. Deploy the app.

## Notes
- The frontend and backend are deployed from the same repository using `render.yaml`.
- `render.yaml` is configured to deploy both services from the `main` branch.
- The backend is available as a separate HTTP service.
- If `https://royal-shepherd-bacl.onrender.com/` does not return HTTP 200, Render is using the wrong repository, branch, root directory, or service instance. Verify the backend service settings and deploy the latest `main` commit.
- If you change `render.yaml`, push the update to GitHub and re-deploy on Render.
- `_config.yml` also excludes backend state, uploads, data dumps, and root PDFs from a branch-root GitHub Pages build; the public constitution is explicitly included.
- The backend copies bundled `backend/data_store.json` and `uploads/` into a newly mounted disk if those sources are present. Data that exists only on an already-running ephemeral Render filesystem is not included in a fresh disk; export and migrate that live state/files before switching the service to the persistent volume.
