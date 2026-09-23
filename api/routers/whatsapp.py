from fastapi import APIRouter, Request, Query, HTTPException
from fastapi.responses import PlainTextResponse
import os

router = APIRouter(tags=["Whatsapp"])


# @router.get("/webhook/whatsapp")
# async def verify_webhook(
#     hub_mode: str = Query(None, alias='hub.mode'),
#     hub_challenge: str = Query(None, alias='hub.challenge'),
#     hub_verify_token: str = Query(None, alias='hub.verify_token')
# ):
#     verify_token = os.getenv("VERIFY_TOKEN") or os.getenv("WHATSAPP_VERIFY_TOKEN")

#     if hub_mode == "subscribe" and hub_verify_token and hub_verify_token == verify_token:
#         return PlainTextResponse(content=hub_challenge)
#     raise HTTPException(status_code=403, detail="Verification failed")


@router.get("/webhook/whatsapp")
async def verify_webhook(
    hub_mode: str = Query(None, alias="hub.mode"),
    hub_challenge: str = Query(None, alias="hub.challenge"),
    hub_verify_token: str = Query(None, alias="hub.verify_token")
):
    verify_token = os.getenv("VERIFY_TOKEN")

    print("========== WEBHOOK DEBUG ==========")
    print("hub_mode =", repr(hub_mode))
    print("hub_challenge =", repr(hub_challenge))
    print("received token =", bool(hub_verify_token))
    print("server token =", bool(verify_token))
    print(
        "token match =",
        hub_verify_token == verify_token
    )
    print("====================================")

    if hub_mode == "subscribe" and hub_verify_token == verify_token:
        print("✅ WEBHOOK VERIFIED")
        return PlainTextResponse(content=hub_challenge)

    print("❌ WEBHOOK VERIFICATION FAILED")

    return {
        "error": "verification failed",
        "hub_mode_received": hub_mode,
        "challenge_received": bool(hub_challenge),
        "token_received": bool(hub_verify_token),
        "server_token_exists": bool(verify_token),
        "token_matches": hub_verify_token == verify_token
    }


@router.post("/webhook/whatsapp")
async def whatsapp_webhook(request: Request):
    print("========== WEBHOOK DEBUG ==========")
    body = await request.json()
    print("Whatsapp webhook:", body)
    return {"status": "ok"}

