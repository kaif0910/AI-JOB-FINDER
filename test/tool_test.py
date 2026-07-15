from tools.jobs import search_job_requirements

result = search_job_requirements.invoke(
    {
        "role": "Python backend engineer"
    }
)

from pprint import pprint

print(result)