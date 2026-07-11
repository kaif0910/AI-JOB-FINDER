ANALYSIS_PROMPT = """
You are an expert Software Engineering Career Mentor.

You are given:

======================
RESUME
======================

{resume}

======================
LATEST JOB REQUIREMENTS
======================

{jobs}

Analyze the resume against the job requirements.

Return your answer in the following format.

# Resume Summary

Write a short summary of the candidate.

# Strengths

List the candidate's strongest backend skills.

# Missing Skills

List the important missing skills required by the current market.

# Learning Roadmap

Create a practical learning roadmap ordered by priority.

# Recommended Projects

Suggest 3 resume-worthy backend or AI projects that would significantly improve the candidate's profile.

# Interview Readiness

Rate the candidate from 1-10 for a Backend Software Engineer role and explain why.

Only use the provided resume and job requirements.

Do not invent information.
"""