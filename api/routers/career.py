from fastapi import APIRouter, Depends

from api.schemas import *

from api.dependencies import get_agent

from agent import CareerCopilot

router = APIRouter(
    prefix="/career",
    tags=["Career"]
)


@router.post(
    "/analyze",
    response_model=ChatResponse
)
async def analyze(

    request: ChatRequest,

    agent: CareerCopilot = Depends(get_agent)

):

    result = agent.chat(
        request.question
    )

    return ChatResponse(**result)