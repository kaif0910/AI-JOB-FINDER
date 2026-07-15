from graph.workflow import workflow
from graph.state import create_initial_state


from services.rag_service import rag_service

rag_service.load_resume('data/resume.pdf')

questions = [
    "What are my projects?",
    "Give me backend jobs in India",
    "Compare my resume with backend jobs",
    "Hello"
]

for question in questions:

    print("=" * 60)
    print("QUESTION:", question)

    state = create_initial_state(question)

    result = workflow.invoke(state)

    print("\nIntent:")
    print(result["intent"])

    print("\nResponse:")
    print(result["response"][:500])

    print("\n")