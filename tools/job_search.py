from langchain_core.tools import tool 

@tool
def job_search(role: str) -> str:
    """Search current backend job requirements."""
    return """Backend Developer Requirements  Required Skills Python FastAPI Docker Kubernetes Redis Postgresql AWS CI/CD REST APIs Git """