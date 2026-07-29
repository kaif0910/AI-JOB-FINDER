from pydantic import BaseModel
from datetime import datetime
from uuid import uuid4 
from api.models.message import ChatMessage


class Conversation(BaseModel):
    id: str
    session_id: str
    title: str
    created_at: datetime
    updated_at: datetime
    messages: list[ChatMessage]

def create_conversation(session_id: str):
    now = datetime.now()

    return Conversation(
        id = str(uuid4()),
        session_id = session_id,
        title="New Chat",
        created_at=now,
        updated_at=now,
        messages=[]
    )


class RenameConversationTitle(BaseModel):
    title: str