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