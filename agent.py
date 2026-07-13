from services.rag_service import rag_service
from graph.workflow import workflow
from graph.state import create_initial_state
from services.job_service import job_service

class CareerCopilot:
    def __init__(self):

        self.workflow = workflow

    def analyze(self, question: str):

        state = create_initial_state(question)

        result = self.workflow.invoke(state)

        return {
            "analysis": result["analysis"],
            "report_path": result["report_path"]
        }

    def search_jobs(
        self,
        role: str,
        location: str,
        experience: str
    ):
        return job_service.search_job_requirements(
            role=role,
            location=location,
            experience=experience
        )




