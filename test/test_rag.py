from services.rag_service import rag_service

rag_service.load_resume("data/resume.pdf")

print(
    rag_service.search(
        "what are my projects"
    )
)