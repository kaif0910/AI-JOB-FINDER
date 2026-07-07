from langchain_core.tools import tool

@tool
def read_resume(file_path: str) -> str:
    """Read a resume PDF and return its text."""
    return """Name: Kaif
    Skills: python fastAPI sql postgresql docker git redis projects: Xoxia Movie Booking application """
