from pydantic_settings import BaseSettings

class Settings(BaseSettings):

    GROQ_API_KEY: str

    TAVILY_API_KEY: str

    RESUME_PATH: str = "data/resume.pdf"

    CHROMA_DB: str = "./chroma_db"

    class Config:
        env_file = ".env"


settings = Settings()

