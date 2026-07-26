from contextlib import asynccontextmanager

from fastapi import FastAPI

from api.routers.career import router as career_router
from api.routers.reports import router as report_router
from api.routers.chat import router as chat_router
from api.routers.resume import router as resume_router
from api.routers.conversation import router as conversation_router
from services.rag_service import rag_service

from api.exceptions import generic_exception_handler

from fastapi.middleware.cors import CORSMiddleware

from slowapi.errors import RateLimitExceeded
from slowapi.middleware import SlowAPIMiddleware
from slowapi import _rate_limit_exceeded_handler

from utils.limiter import limiter




@asynccontextmanager
async def lifespan(app: FastAPI):

    # print("Loading Resume...")

    # rag_service.load_resume("data/resume.pdf")

    # print("Resume Loaded.")
    print("Application starting up...")

    yield

    print("Application shutting down...")


app = FastAPI(
    title="Career Copilot",
    lifespan=lifespan
)

app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)

app.add_middleware(
    SlowAPIMiddleware
)


app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        # "http://localhost:5173",
        # "ai-job-finder-6eyd6ja56-kaif0910s-projects.vercel.app",
        "*"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def health():
    return {
        "message": "healthy"
    }
app.include_router(career_router)
app.include_router(report_router)
app.include_router(chat_router)
app.include_router(resume_router)
app.include_router(conversation_router)



print("Registered Routes")
for route in app.routes:
    print(route.path)

app.add_exception_handler(
    Exception,
    generic_exception_handler
)

