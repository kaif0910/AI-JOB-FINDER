from services.rag_service import rag_service
from graph.workflow import workflow
from graph.state import create_initial_state
from services.job_service import job_service
from services.title_service import title_service
from services.conversation_service import conversation_service

# class CareerCopilot:
#     def __init__(self):

#         self.workflow = workflow

#     def analyze(self, question: str, collection_name = "resume"):

#         state = create_initial_state(question)

#         result = self.workflow.invoke(state)

#         return {
#             "analysis": result["analysis"],
#             "report_path": result["report_path"]
#         }

#     def search_jobs(
#         self,
#         role: str,
#         location: str,
#         experience: str
#     ):
#         return job_service.search_job_requirements(
#             role=role,
#             location=location,
#             experience=experience
#         )



#single chat endpoint 

class CareerCopilot:

    def __init__(self):
        self.workflow = workflow

    def chat(self, message: str, session_id: str):

        conversation = conversation_service.get_conversation(
            session_id
        )

        if conversation is None:
            conversation = conversation_service.create_conversation(
                id=session_id
            )

        

        state = create_initial_state(message)
          
        result = self.workflow.invoke(
            state,
            config={
                "configurable":{
                    "thread_id": session_id
                }
            }
            )

        conversation_service.append_message(
            session_id,
            "user",
            message
        )

        conversation_service.append_message(
            session_id,
            "assistant",
            result["response"]
        )

        return {
            "response": result["response"],
            "jobs": result.get(
                "job_requirements",
                []
            ),
            "report_path": result.get(
                "report_path"
            )
        }




