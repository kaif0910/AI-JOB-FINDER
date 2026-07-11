from fastapi import APIRouter

from api.schemas import (
    ChatRequest,
    ChatResponse
)


from agent import CareerCopilot

router = APIRouter()

agent = CareerCopilot()

@router.post(
    "/chat",
    response_model = ChatResponse
)
def chat(request: ChatRequest):

    result = agent.invoke(
        request.question
    )

    return ChatResponse(
        analysis = result["analysis"],
        report_path = result["report_path"]
    )