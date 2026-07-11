from typing import TypedDict    # langgraph doesn't create an object , it passes around the dictionary. type safety and not a new data structure 

class AgentState(TypedDict): 
    question: str

    resume_context: str

    job_requirements: list

    analysis: str

    report_path: str


def create_initial_state(
        question: str,
) -> AgentState:

    return {
        "question": question,
        "resume_context": "",
        "job_requirements": [],
        "analysis": "",
        "report_path": ""
    }