from pprint import pprint

from services.job_service import job_service

jobs = job_service.search_job_requirements(
    role = "Pyhton backend engineer"
)


pprint(jobs)