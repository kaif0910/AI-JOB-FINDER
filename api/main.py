from contextlib import asynccontextmanager

from fastapi import FastAPI

from api.routers.career import router

from services.rag_service import rag_service


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

app.include_router(router)