"""from services.rag_service import rag_service
from agent.runtime import AgentRuntime
from tools.resume import search_resume
from tools.jobs import search_job_requirements

from agent.runtime import AgentRuntime

from tools.resume import search_resume
# from tools.jobs import search_jobs
# from tools.report import save_report

rag_service.load_resume("data/resume.pdf")

runtime = AgentRuntime(
    tools=[
        search_resume,
        search_job_requirements
    ]
)
print(search_resume)
runtime.chat()
these are the manual runtime setup without using langgraph """



from agent import CareerCopilot

agent = CareerCopilot()

while True:
    question = input("You: ")

    if question.lower() == "exit":
        break

    result = agent.invoke(question)

    print("\nAI:\n")
    print(["analysis"])

    if result["report_path"]:
        print(f"\nPDF: {result['report_path']}")

        