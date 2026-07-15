from fastapi import APIRouter
from fastapi import UploadFile
from fastapi import File

import shutil
import os

from services.rag_service import rag_service

router = APIRouter(
    prefix="/resume",
    tags=["Resume"]
)

@router.post("/upload")
async def upload_resume(
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