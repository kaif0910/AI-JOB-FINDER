from fastapi import FastAPI

from api.routers import router

app = FastAPI(
    title="Career Copilot API"
)

app.include_router(router)  #equivalent to app.use in express

