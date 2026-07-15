import os
from dotenv import load_dotenv
from tavily import TavilyClient

load_dotenv()

class JobService:

    def __init__(self):
        self.client = TavilyClient(
            api_key= os.getenv("TAVILY_API_KEY")
        )

    def search_job_requirements(self, role: str, location: str = "India", experience: str = "Fresher") -> list[dict]:
        """Search for recent job description."""

        query = f"""
        {role}
        {location}
        {experience}

        job description
        required skills
        responsibilities
        preferred skills"""

        response = self.client.search(
            query=query,
            search_depth="advanced",
            max_results=5
        )

        jobs = []

        for result in response["results"]:

            jobs.append(
                {
                    "title": result["title"],
                    "company": None,
                    "location": None,
                    "url": result["url"],
                    "content": result["content"]
                }
            )

        return jobs


job_service = JobService()   # not a class but an instance of the class abstraction



