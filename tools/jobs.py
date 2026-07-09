from langchain_core.tools import tool

from services.job_service import job_service



@tool
def search_job_requirements(
    role: str,
    location: str = "India",
    experience: str = "Fresher"
):
    """Search current backend job requirements"""

    return job_service.search_job_requirements(
        role,
        location,
        experience
    )