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

@router.get("/{conversation_id}")
def get_conversation(
    conversation_id: str
):
    return Conversation_service.get_conversation(
        conversation_id
    )

@router.delete("/{conversation_id}")
def delete_conversation(
    conversation_id
):
    return {
        "message": "Conversation Deleted"
    }


@router.patch("/{conversation_id}/title")
def update_title(
    conversation_id,
    title
):
    Conversation_service.update_title(
        conversation_id,
        title
    )

    return {
        "message": " Title Updated"
    }