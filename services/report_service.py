class ReportService:

    def save(self, report: str) -> str:

        with open(
            "career_report.txt",
            "w",
            encoding="utf-8"
        ) as file:

            file.write(report)

        return "Report saved successfully."