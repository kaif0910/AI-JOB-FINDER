from graph.state import AgentState
import os
from dotenv import load_dotenv

load_dotenv()

from services.rag_service import rag_service
from services.job_service import job_service
from services.report_service import report_service

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

    prompt = f"""

Resume

{state["resume_context"]}

Jobs

{state["job_requirements"]}

Compare them.

Return

1. Strengths

2. Missing Skills

3. Roadmap

4. Recommended Projects

"""

    response = llm.invoke(prompt)

    state["analysis"] = response.content

    return state



def report_node(state):

    prompt = f"""
Convert the following analysis into
a professional career report.

{state["analysis"]}
"""

    report = llm.invoke(prompt)

    state["report_content"] = report.content

    result = report_service.generate_pdf(

        report.content

    )

    state["report_path"] = result["file_path"]

    return state
