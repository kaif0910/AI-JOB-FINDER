from contextlib import asynccontextmanager

from fastapi import FastAPI

from api.routers.career import router as career_router
from api.routers.reports import router as report_router

from services.rag_service import rag_service

from api.exceptions import generic_exception_handler




@asynccontextmanager
async def lifespan(app: FastAPI):

    print("Loading Resume...")

    rag_service.load_resume("data/resume.pdf")

    print("Resume Loaded.")

    yield

    print("Application shutting down...")


app = FastAPI(
    title="Career Copilot",
    lifespan=lifespan
)
@app.get("/")
def health():
    return {
        "message": "healthy"
    }
app.include_router(career_router)
app.include_router(report_router)

app.add_exception_handler(
    Exception,
    generic_exception_handler
)

