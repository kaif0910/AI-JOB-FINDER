from typing import Literal
from pydantic import BaseModel

class IntentClassification(BaseModel): 
    intent: Literal[
        "resume",
        "jobs",
        "compare",
        "general"
    ]

class JobQuery(BaseModel):
    role: str
    location: str
    experience: str


class JobItem(BaseModel):
    title: str
    company: str | None = None
    location: str | None = None
    url: str