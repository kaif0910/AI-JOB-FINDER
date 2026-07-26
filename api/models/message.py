from pydantic  import BaseModel
from datetime import datetime
from typing import Optional
from api.schemas import JobItem

class ChatMessage(BaseModel):
    role: str
    content: str
    created_at: datetime = datetime.now()
    jobs: Optional[list[JobItem]] = None
    reportPath: Optional[str] = None
    