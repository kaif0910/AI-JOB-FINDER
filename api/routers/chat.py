print("chat router imported")
from fastapi import APIRouter

from api.dependencies import get_agent

from agent import CareerCopilot

from fastapi import Depends

from api.schemas import ChatRequest

router = APIRouter(
    tags=["Chat"]
)

@router.post("/chat")
async def chat(
    request: ChatRequest,
    agent: CareerCopilot = Depends(get_agent)
):

    return agent.chat(
        request.question
    )