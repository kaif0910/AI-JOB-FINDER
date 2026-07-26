print("chat router imported")
from fastapi import APIRouter

from api.dependencies import get_agent

from agent import CareerCopilot

from fastapi import Depends

from api.schemas import ChatRequest, ChatResponse

from fastapi import Request
from utils.limiter import limiter

router = APIRouter(
    tags=["Chat"]
)

@router.post("/chat")
@limiter.limit("20/minute")
async def chat(
    request: ChatRequest,
    agent: CareerCopilot = Depends(get_agent)
):

    result = agent.chat(
        request.question,
        request.session_id,
        request.conversation_id
    )

    return ChatResponse(
        response = result["response"],
        jobs=result["jobs"],
        report_path=result["report_path"],
        conversation_title= result["conversation_title"]
    )