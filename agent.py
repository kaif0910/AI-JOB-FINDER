from api.models.message import ChatMessage
from services.rag_service import rag_service
from graph.workflow import workflow
from graph.state import create_initial_state
from services.job_service import job_service
from services.title_service import title_service
from services.conversation_service import conversation_service
from uuid import uuid4
from datetime import datetime

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

    def chat(self, message: str, session_id: str, conversation_id: str):

        conversation = conversation_service.get_conversation(
            conversation_id,
            session_id
        )

        if conversation is None:
            conversation = conversation_service.create_conversation(
                session_id
            )
            conversation_id = conversation.id

        

        state = create_initial_state(message, session_id)
          
        result = self.workflow.invoke(
            state,
            config={
                "configurable":{
                    "thread_id": session_id
                }
            }
            )

        conversation_service.append_message(
            conversation_id,
            ChatMessage(
                id=str(uuid4()),
                role="user",
                content=message,
                created_at=datetime.now().isoformat()
            )
        )

        conversation_service.append_message(
            conversation_id,
            ChatMessage(
                id=str(uuid4()),
                role="assistant",
                content=result["response"],
                jobs=result.get("job_requirements", []),
                reportPath=result.get("report_path"),
                created_at=datetime.now().isoformat()
            )
)

        if conversation["title"] == "New Chat":
            title = title_service.generate_title(
                message
            )

            conversation_service.update_title(
                conversation_id,
                session_id,
                title
            )

        return {
            "response": result["response"],
            "jobs": result.get(
                "job_requirements",
                []
            ),
            "report_path": result.get(
                "report_path"
            ),
            "conversation_title": conversation["title"] 
        }




