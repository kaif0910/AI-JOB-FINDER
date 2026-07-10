from services.report_service import report_service

content = """
AI CAREER REPORT 
Resume Summary 
Excellent backend foundation.
Missing Skills
Docker
AWS
Kubernetes
Roadmap
Week 1
Learn Docker
Week 2
Deploy FastAPI
Week 3
Redis
Week 4
AWS
"""
response = report_service.generate_report(
    content
)

print(response)