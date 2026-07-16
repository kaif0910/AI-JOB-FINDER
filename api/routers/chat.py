print("chat router imported")
from fastapi import APIRouter

from api.dependencies import get_agent

from agent import CareerCopilot

from fastapi import Depends

from api.schemas import ChatRequest, ChatResponse

router = APIRouter(
    tags=["Chat"]
)

@router.post("/chat")
async def chat(
    request: ChatRequest,
    agent: CareerCopilot = Depends(get_agent)
):

    result = agent.chat(
        request.question,
        request.session_id
    )

    return ChatResponse(
        response = result["response"],
        jobs=result["jobs"],
        report_path=result["report_path"]
    )