from pydantic import BaseModel
from datetime import datetime
from uuid import uuid4


class Conversation(BaseModel):
    id: str
    title: str
    created_at: datetime
    updated_at: datetime
    messages: list[dict]

def create_conversation():
    now = datetime.now()

    return Conversation(
        id = str(uuid4()),
        title="New Chat",
        created_at=now,
        updated_at=now,
        messages=[]
    )