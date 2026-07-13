from pydantic import BaseModel
from typing import List


class ChatRequest(BaseModel):
    question: str


class ChatResponse(BaseModel):

    analysis: str

    report_path: str | None = None


class jobRequest(BaseModel):
    role: str
    location: str ="india"
    experience: str="fresher"

class JobResponse(BaseModel):
    title: str
    url: str


class JobSearchResponse(BaseModel):
    jobs: list[JobResponse]