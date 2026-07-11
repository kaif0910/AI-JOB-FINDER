from services.rag_service import rag_service
from graph.workflow import workflow
from graph.state import create_initial_state

class CareerCopilot:
    def __init__(self):
        rag_service.load_resume("data/resume.pdf")

        self.workflow = workflow

    def invoke(self, question: str):

        state = create_initial_state(question)

        return self.workflow.invoke(state)


