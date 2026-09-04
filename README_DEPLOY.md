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
3. Ensure Render detects `render.yaml` and uses it to deploy both services.
4. If prompted, use branch `gh-pages`.
5. Deploy the app.

## Notes
- The frontend and backend are deployed from the same repository using `render.yaml`.
- `render.yaml` is configured to deploy both services from the `gh-pages` branch.
- The backend is available as a separate HTTP service.
-- If `https://royal-shepherd-bacl.onrender.com/state` returns 404, the backend service is not deployed or the service URL is wrong. Verify the correct backend URL in Render and update the page meta tag if needed.
- If you change `render.yaml`, push the update to GitHub and re-deploy on Render.
