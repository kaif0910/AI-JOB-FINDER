from services.rag_service import rag_service
from graph.workflow import workflow
from graph.state import create_initial_state

class CareerCopilot:
    def __init__(self):

        self.workflow = workflow

    def invoke(self, question: str):

        state = create_initial_state(question)

        result = self.workflow.invoke(state)

        return {
            "analysis": result["analysis"],
            "report_path": result["report_path"]
        }



