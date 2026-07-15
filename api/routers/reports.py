# from fastapi import APIRouter
# from fastapi.responses import FileResponse
# import os
# from fastapi import HTTPException

# router = APIRouter(
#     prefix="/reports",
#     tags=["reports"]
# )


# @router.get("/download/{filename}")
# async def download_report(filename: str):
#     file_path = os.path.join("reports", filename)
#     print(file_path)
#     if not os.path.exists(file_path):
#         raise HTTPException(
#             status_code=404,
#             detail="Report Not Found"
#         )

#     return FileResponse(
#         path=file_path,
#         filename=filename,
#         media_type="application/pdf"
#     )