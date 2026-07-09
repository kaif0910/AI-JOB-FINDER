from langchain_core.tools import tool
from services.rag_service import rag_service

@tool
def search_resume(question: str) -> str:
    """Search the indexed resume for information relevant to the user's question."""
    # return "Movie Ticket Booking, XOXIA"
    return rag_service.search(question)