from graph.state import AgentState
import os
from dotenv import load_dotenv
from graph.models import IntentClassification

load_dotenv()

from services.rag_service import rag_service
from services.job_service import job_service
from services.report_service import report_service
from prompts.analysis_prompt import ANALYSIS_PROMPT
from graph.models import JobQuery
from prompts.job_prompt import JOB_EXTRACTION_PROMPT
import json

from langchain_groq import ChatGroq

llm = ChatGroq(
    model="meta-llama/llama-4-scout-17b-16e-instruct",
    api_key=os.getenv("GROQ_API_KEY")
)

# intent_llm = llm.with_structured_output(
#     IntentClassification
# )

def extract_job_query(question: str) -> JobQuery:

    prompt = JOB_EXTRACTION_PROMPT + f"\n\nQuestion:\n{question}"

    response = llm.invoke(prompt)

    return parser_service.parse_json(
        response.content,
        JobQuery
    )

def resume_node(state: AgentState):
    context = rag_service.search(
        state["question"]
    )

    state["resume_context"] = context
    return state


def jobs_node(state: AgentState):

    job_query = extract_job_query(
        state["question"]
    )

    state["job_query"] = job_query

    jobs = job_service.search_job_requirements(
        role=job_query.role,
        location=job_query.location,
        experience=job_query.experience
    )

    state["job_requirements"] = jobs

    return state

def response_node(state: AgentState):

    prompt = ANALYSIS_PROMPT.format(
        question = state["question"],
        resume_context = state["resume_context"],
        job_requirements=state["job_requirements"]
    )

    response = llm.invoke(prompt)

    state["response"] = response.content

    # result = report_service.generate_report(
    #     response.content
    # )

    if state["intent"] in ["compare", "report"]:
        result = report_service.generate_report(
            response.content
        )

        state["report_path"] = result["file_path"]

    else:
        state["report_path"] = None

    return state



# def report_node(state):

#     prompt = REPORT_PROMPT.format(
#         analysis= state["analysis"]
#     )

#     report = llm.invoke(prompt)

#     state["report_content"] = report.content

#     result = report_service.generate_report(

#         report.content

#     )

    # state["report_path"] = result["file_path"]

    # return state

from graph.models import IntentClassification

from services.parser_service import parser_service

from prompts.intent_prompt import INTENT_PROMPT

def intent_node(state: AgentState):
    prompt = (
        INTENT_PROMPT 
        + f"\n\nQuestion:\n{state["question"]}"
    )
    response = llm.invoke(prompt)

    # print("=" * 50)
    # print("RAW LLM RESPONSE:")
    # print(repr(response.content))
    # print("=" * 50)

    result = parser_service.parse_json(
        response.content,
        IntentClassification
    )

    state["intent"] = result.intent
    print("Intent:", result.intent)

    return state



    

    
