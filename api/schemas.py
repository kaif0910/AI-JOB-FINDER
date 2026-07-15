from pydantic import BaseModel
from typing import List


class ChatRequest(BaseModel):
    question: str

class JobItem(BaseModel):
    title: str
    company: str | None= None
    location: str | None = None
    url: str
class ChatResponse(BaseModel):

    response: str

    jobs: list[JobItem] = []

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