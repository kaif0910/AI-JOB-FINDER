import os

from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph,
    Spacer
)

from reportlab.lib.styles import getSampleStyleSheet
from uuid import uuid4


class ReportService:

    def generate_report(
        self,
        report_content: str,
        filename: str = f"{uuid4()}.pdf"
    ) -> dict:

        os.makedirs("reports", exist_ok=True)

        file_path = os.path.join(
            "reports",
            filename
        )

        styles = getSampleStyleSheet()

        document = SimpleDocTemplate(file_path)

        elements = []

        for line in report_content.split("\n"):

            line = line.strip()

            if not line:

                elements.append(
                    Spacer(1, 12)
                )

                continue

            if line.isupper():

                elements.append(

                    Paragraph(

                        f"<b><font size='18'>{line}</font></b>",

                        styles["Heading1"]

                    )

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

            "file_path": file_path

        }


report_service = ReportService()