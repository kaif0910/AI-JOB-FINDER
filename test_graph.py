from graph.workflow import workflow
from services.rag_service import rag_service

rag_service.load_resume("data/resume.pdf")

state = {
    "question": "Compare my resume with the latest backend engineer requirements",

    "resume_context": "",

    "job_requirements": [],

    "analysis": "",

    "report_path": ""
}

result = workflow.invoke(state)

print(result)