# AfriGlow Careers

The website for **AfriGlow Careers**, a South African career services startup offering professional CV writing, LinkedIn profile optimisation and cover letters, plus a live job board that pulls current South African vacancies.

## Features

- **Services and packages:** CV writing tailored to the South African job market, LinkedIn makeovers, cover letters and a complete career package
- **Cart and checkout:** add services to a cart and fill in an order form (front end only for now; orders aren't processed yet)
- **Quote requests:** a form for clients to describe their goals and request a custom quote
- **Live job board:** a Python API fetches current South African job listings by job type, with pagination
- **Career Kickstart Toolkit:** practical tips shown alongside the job listings
- Responsive single-page app with client-side routing

## Architecture

```
client/    React + Vite + Tailwind single-page app (pages, cart context, router)
backend/   FastAPI service: /api/jobs proxies a job search API, keeping the API key off the browser
server/    Express + MongoDB server (scaffold, in progress)
```

The job search API key lives only on the FastAPI server, so it's never exposed to visitors' browsers.

## Tech stack

| Layer | Tools |
|---|---|
| Frontend | React, React Router, Vite, Tailwind CSS |
| Jobs API | Python, FastAPI, RapidAPI job search |
| Server (in progress) | Node.js, Express, MongoDB (Mongoose) |

## Run it locally

```bash
git clone https://github.com/Bahle05/AfriGlow-Web.git
cd AfriGlow-Web

# Frontend
cd client && npm install && npm run dev            # http://localhost:5173

# Jobs API (new terminal)
cd backend && pip install fastapi uvicorn python-dotenv
echo JSEARCH_API_KEY=your_key > .env
uvicorn main:app --reload --port 8000

# Site API (new terminal)
cd server && npm install
cp .env.example .env                               # set MONGO_URI
node server.js
```

## What I'd improve next

- Connect checkout and quote forms to the Express server so orders are stored and staff are notified
- Add online payments (for example PayFast or Yoco)
- Cache job results to stay within the job API's rate limits
- Deploy the frontend and APIs publicly

## Author

**Bahle Ludidi**, BSc Computer Science (Information Systems), University of the Western Cape
[LinkedIn](https://www.linkedin.com/in/bahle-ludidi-727657352) · [GitHub](https://github.com/Bahle05)
