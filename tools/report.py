from langchain_core.tools import tool

@tool 
def save_report(report: str) -> str:
    """save the generated report to a file"""

    with open("carrer_report.txt","w", encoding="utf-8") as file:
        file.write(report)

    return "Report Saved Successfully."