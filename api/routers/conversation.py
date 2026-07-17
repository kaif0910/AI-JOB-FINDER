from fastapi import APIRouter

from services.conversation_service import Conversation_service

router = APIRouter(
    prefix="/conversations",
    tags=["conversations"]
)

@router.get("")
def list_conversations():
    return Conversation_service.list_conversations()

@router.post("")
def create_conversation():
    return Conversation_service.create_conversation()


