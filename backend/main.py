from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import http.client
import json
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
API_KEY = os.getenv("JSEARCH_API_KEY")

if not API_KEY:
    raise ValueError("JSEARCH_API_KEY environment variable not set. Check .env file.")


def parse_json(raw: str) -> dict:
    """Safely parse an API response with json.loads. Evaluating external data as code would let it run anything."""
    try:
        data = json.loads(raw)
        return data if isinstance(data, dict) else {"data": data}
    except json.JSONDecodeError:
        return {"error": "Invalid JSON response"}

@app.get("/api/jobs")
async def get_jobs(job_type: str = "Engineer", offset: int = 0):
    """
    Fetch job listings from LinkedIn Job Search API.
    - job_type: Job type to search (e.g., Engineer, Nurse, Teacher)
    - offset: Offset for pagination (default: 0)
    """
    conn = http.client.HTTPSConnection("linkedin-job-search-api.p.rapidapi.com")
    headers = {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': "linkedin-job-search-api.p.rapidapi.com"
    }
    query = f"{job_type} jobs"
    # Fetch South African jobs
    sa_params = f"/active-jb-1h?query={query}&location=South Africa&offset={offset}"
    conn.request("GET", sa_params, headers=headers)
    sa_res = conn.getresponse()
    sa_data = sa_res.read().decode("utf-8")
    sa_json = parse_json(sa_data)
    sa_jobs = sa_json.get("data", []) if not sa_json.get("error") else []

    # Fetch remote jobs
    remote_params = f"/active-jb-1h?query={query}&remote=true&offset={offset}"
    conn.request("GET", remote_params, headers=headers)
    remote_res = conn.getresponse()
    remote_data = remote_res.read().decode("utf-8")
    remote_json = parse_json(remote_data)
    remote_jobs = remote_json.get("data", []) if not remote_json.get("error") else []

    conn.close()
    if sa_json.get("error") or remote_json.get("error"):
        return {"error": f"API error: {sa_json.get('error') or remote_json.get('error')}"}
    return {"jobs": sa_jobs + remote_jobs}

@app.get("/api/salary")
async def get_salary(job_title: str = "Engineer", location: str = "South Africa", location_type: str = "COUNTRY", years_of_experience: str = "ALL", fields: str = ""):
    """
    Fetch salary estimation (placeholder, as LinkedIn API may not provide this).
    - job_title: Job title for salary estimation
    - location: Free-text location
    - location_type: Type of location
    - years_of_experience: Experience level range
    - fields: Comma-separated list of fields to include
    """
    return {"salary": {"median_salary": None, "message": "Salary data not available from this API"}}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="localhost", port=8000, reload=True)