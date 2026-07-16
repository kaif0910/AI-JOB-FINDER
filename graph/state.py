from typing import TypedDict, NotRequired , Annotated  # langgraph doesn't create an object , it passes around the dictionary. type safety and not a new data structure 
from graph.models import JobQuery

from langchain_core.messages import BaseMessage
from langchain_core.messages import HumanMessage
from langgraph.graph.message import add_messages
class AgentState(TypedDict): 
    question: str

    resume_context: NotRequired[str]

    job_requirements: NotRequired[list]

    response: NotRequired[str]

    intent: str

    job_query: JobQuery | None

    report_path: str | None

    messages: Annotated[list[BaseMessage], add_messages]


def create_initial_state(
        question: str,
) -> AgentState:

    return {
        "question": question,
        "resume_context": "",
        "job_requirements": [],
        "intent": "",
        "response": "",
        "job_query": None,
        "report_path": None,
        "messages": [
            HumanMessage(
                content=question
            )
        ]
    }