from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routers import company, job
from database import Base, engine

app = FastAPI(title="Job Portal API", version="1.0.0")

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Create tables
Base.metadata.create_all(bind=engine)

# Include routers
app.include_router(company.router)
app.include_router(job.router)

@app.get("/")
def read_root():
    return {"message": "Welcome to Job Portal API", "endpoints": {"companies": "/company", "jobs": "/job"}}

@app.get("/about")
def read_about():
    return {"about": "This is a Job Portal API built with FastAPI and PostgreSQL"}

@app.get("/contact")
def read_contact():
    return {"contact": "Email: contact@jobportal.com", "phone": "+1-800-JOB-PORTAL"}
