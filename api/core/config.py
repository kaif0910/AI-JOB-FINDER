from pydantic_settings import BaseSettings


class Settings(BaseSettings):

    GROQ_API_KEY: str

    TAVILY_API_KEY: str

    RESUME_PATH: str = "data/resume.pdf"

    CHROMA_PATH: str = "./chroma_db"

    REPORT_PATH: str = "./reports"

    class Config:

        env_file = ".env"


settings = Settings()