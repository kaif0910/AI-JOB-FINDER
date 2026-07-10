from langchain.tools import tool 
from services.report_service import report_service
@tool
def generate_report(report_content: str):
    """Generate a PDF report."""
    return report_service.generate_report(
        report_content
    )