from graph.state import AgentState
import os
from dotenv import load_dotenv
from langchain_core.messages import HumanMessage

load_dotenv()

from services.rag_service import rag_service
from services.job_service import job_service
from services.report_service import report_service
from prompts.analysis_prompt import ANALYSIS_PROMPT
from prompts.report_prompt import REPORT_PROMPT

from langchain_groq import ChatGroq

llm = ChatGroq(
    model="meta-llama/llama-4-scout-17b-16e-instruct",
    api_key=os.getenv("GROQ_API_KEY")
)

def resume_node(state: AgentState):
    context = rag_service.search(
        state["question"]
    )

    state["resume_context"] = context

    return state


def jobs_node(state: AgentState):

    jobs = job_service.search_job_requirements(
        role="backend engineer"
    )

    state["job_requirements"] = jobs

    return state

def analysis_node(state: AgentState):

    prompt = ANALYSIS_PROMPT.format(
        resume = state["resume_context"],
        jobs=state["job_requirements"]
    )

    response = llm.invoke(prompt)

    state["analysis"] = response.content

    return state



def report_node(state):

    prompt = REPORT_PROMPT.format(
        analysis= state["analysis"]
    )

    report = llm.invoke(prompt)

    state["report_content"] = report.content

    result = report_service.generate_report(

        report.content

    )

    state["report_path"] = result["file_path"]

    return state


def intent_node(state: AgentState):
    prompt = """You are an intent classifier.

Possible intents:

resume

jobs

analysis

general

Return ONLY one word."""
    response = llm.invoke(state)

    state["intent"] = response.content

    return state
    

    
