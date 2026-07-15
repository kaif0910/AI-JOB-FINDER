# from fastapi import APIRouter, Depends

# from api.schemas import *

# from api.dependencies import get_agent

# from agent import CareerCopilot

# router = APIRouter(
#     prefix="/career",
#     tags=["Career"]
# )


# @router.post(
#     "/analyze",
#     response_model=ChatResponse
# )
# async def analyze(

#     request: ChatRequest,

#     agent: CareerCopilot = Depends(get_agent)

# ):

#     result = agent.analyze(
#         request.question
#     )

#     return ChatResponse(
#         analysis= result["analysis"],
#         report_path= result["report_path"]
#     )


# @router.post(
#     "/jobs",
#     response_model=JobSearchResponse
# )
# async def search_jobs(
#     request : jobRequest,
#     agent : CareerCopilot = Depends(get_agent)
# ):
#     jobs = agent.search_jobs(
#         role= request.role,
#         location=request.location,
#         experience=request.experience
#     )

#     return JobSearchResponse(
#         jobs=[
#             JobResponse(**job)
#             for job in jobs
#         ]
#     )
    