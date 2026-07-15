from typing import TypedDict, NotRequired   # langgraph doesn't create an object , it passes around the dictionary. type safety and not a new data structure 
from graph.models import JobQuery
class AgentState(TypedDict): 
    question: str

    resume_context: NotRequired[str]

    job_requirements: NotRequired[list]

    response: NotRequired[str]

    intent: str

    job_query: JobQuery | None


def create_initial_state(
        question: str,
) -> AgentState:

    return {
        "question": question,
        "resume_context": "",
        "job_requirements": [],
        "intent": "",
        "response": "",
        "job_query": None
    }