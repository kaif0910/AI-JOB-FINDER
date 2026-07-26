from fastapi import APIRouter
from fastapi import UploadFile
from fastapi import File

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

    rag_service.load_resume(path)

    return {
        "message": "Resume Uploaded"
    }