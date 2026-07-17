from pydantic  import BaseModel
from datetime import datetime

class ChatMessage(BaseModel):
    role: str
    content: str
    created_at: datetime = datetime.now()
    