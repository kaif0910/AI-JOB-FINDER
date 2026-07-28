from fastapi import APIRouter
from fastapi import UploadFile
from fastapi import File
from fastapi import Form
import shutil
import os

from services.rag_service import rag_service
from fastapi import Request
from utils.limiter import limiter
router = APIRouter(
    prefix="/resume",
    tags=["Resume"]
)

@router.post("/upload")
@limiter.limit("5/minute")
async def upload_resume(
    request: Request,
    session_id: str = Form(...),
    file: UploadFile = File(...)
):
    os.makedirs(
        "uploads",

        exist_ok=True
    )

    path = os.path.join(
        "uploads",
        file.filename
    )

    with open(path, "wb") as buffer:
        shutil.copyfileobj(
            file.file,
            buffer
        )

    rag_service.load_resume(session_id, path)

    return {
        "message": "Resume Uploaded"
    }


# every upload belongs to one browser session, so we can use the session_id to identify the user and their resume.