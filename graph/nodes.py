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

-------------------

Jobs

{state["job_requirements"]}

Compare them.

Generate

1. Missing Skills

2. Learning Roadmap

3. Recommended Projects

"""

    response = llm.invoke(prompt)

    state["analysis"] = response.content

    return state



def report_node(state: AgentState):

    save_report = report_service.generate_report(
        state["analysis"]
    )

    state["report_path"] = save_report["file_path"]

    return state
