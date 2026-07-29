from fastapi import APIRouter
from fastapi import Query

from services.conversation_service import conversation_service

router = APIRouter(
    prefix="/conversations",
    tags=["conversations"]
)

@router.get("")
def list_conversations(session_id: str = Query(...)):
    return conversation_service.list_conversations(session_id=session_id)

@router.post("")
def create_conversation(session_id: str = Query(...)):
    return conversation_service.create_conversation(session_id=session_id)

@router.get("/{conversation_id}")
def get_conversation(
    conversation_id: str,
    session_id: str = Query(...)
):
    return conversation_service.get_conversation(
        conversation_id,
        session_id
    )

@router.delete("/{conversation_id}")
def delete_conversation(
    conversation_id: str,
    session_id: str = Query(...)
):
    conversation_service.delete_conversation(
        conversation_id,
        session_id
    )

    return {
        "message": "Conversation Deleted"
    }


@router.patch("/{conversation_id}/title")
def update_title(
    conversation_id: str,
    session_id: str = Query(...),
    title: str = Query(...)
):
    conversation_service.update_title(
        conversation_id,
        session_id,
        title
    )

    return {
        "message": " Title Updated"
    }