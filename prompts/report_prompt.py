REPORT_PROMPT = """
You are a professional technical report writer.

Convert the following career analysis into a polished report.

======================
ANALYSIS
======================

{analysis}

Requirements:

- Use professional language.
- Organize the report using headings.
- Make the report easy to read.
- Keep it concise.
- Use bullet points whenever appropriate.
- End the report with an encouraging conclusion.

The report should look like something a career consultant would deliver to a client.

Do not add any information that is not present in the analysis.
"""