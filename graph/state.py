from typing import TypedDict    # langgraph doesn't create an object , it passes around the dictionary. type safety and not a new data structure 

class AgentState(TypedDict): 
    question: str

    resume_context: str

    job_requirements: str

    analysis: str

    report_path: str
