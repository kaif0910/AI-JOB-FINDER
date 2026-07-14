from typing import TypedDict, NotRequired   # langgraph doesn't create an object , it passes around the dictionary. type safety and not a new data structure 

class AgentState(TypedDict): 
    question: str

    resume_context: NotRequired[str]

    job_requirements: NotRequired[list]

    response: NotRequired[str]

    intent: str


def create_initial_state(
        question: str,
) -> AgentState:

    return {
        "question": question,
        "resume_context": "",
        "job_requirements": [],
        "intent": "",
        "response": ""
    }