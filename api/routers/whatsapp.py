from fastapi import APIRouter, Request, Query, HTTPException
from fastapi.responses import PlainTextResponse
import os

router = APIRouter(tags=["Whatsapp"])


@router.get("/webhook/whatsapp")
async def verify_webhook(
    hub_mode: str = Query(None, alias='hub.mode'),
    hub_challenge: str = Query(None, alias='hub.challenge'),
    hub_verify_token: str = Query(None, alias='hub.verify_token')
):
    verify_token = os.getenv("VERIFY_TOKEN") or os.getenv("WHATSAPP_VERIFY_TOKEN")

    if hub_mode == "subscribe" and hub_verify_token and hub_verify_token == verify_token:
        return PlainTextResponse(content=hub_challenge)
    raise HTTPException(status_code=403, detail="Verification failed")


@router.post("/webhook/whatsapp")
async def whatsapp_webhook(request: Request):
    body = await request.json()
    print("Whatsapp webhook:", body)
    return {"status": "ok"}

