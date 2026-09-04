# Render Deployment Guide

This project is configured for deployment on Render using `render.yaml`.

## Frontend
- The frontend is served as a static site from the project root.
- Render service name: `royal-shepherd`
- Static site root: `/`
- No build command is required.

## Backend
- The backend is a FastAPI app in `backend/main.py`.
- Render service name: `royal-shepherd-bacl`
- Python root: `backend`
- Install command: `pip install -r requirements/requirements.txt`
- Start command: `uvicorn main:app --host 0.0.0.0 --port $PORT`
- Render health check endpoint: `/api/health`

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
- If `https://royal-shepherd-bacl.onrender.com/api/health` returns 404, Render is using the wrong repository, branch, root directory, or service instance. Verify the backend service settings and deploy the latest `main` commit.
- If you change `render.yaml`, push the update to GitHub and re-deploy on Render.
