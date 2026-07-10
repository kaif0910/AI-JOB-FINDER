from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph,
    Spacer
)

from reportlab.lib.styles import getSampleStyleSheet


class ReportService:

    def generate_report(self, report_content: str, filename: str = "career_report.pdf") -> dict:
        styles = getSampleStyleSheet()
        document = SimpleDocTemplate(filename)
        elements = []

        for line in report_content.split("\n"):
            if line.strip() == "":
                elements.append(
                    Spacer(1,12)
                )

            else:
                elements.append(
                    Paragraph(
                        line,
                        styles["BodyText"]
                    )
                )
        document.build(elements)
        return {
            "status": "success",
            "file_path": filename
        }

report_service = ReportService()