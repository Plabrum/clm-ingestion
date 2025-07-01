from litestar import Litestar, post
from litestar.config.cors import CORSConfig
from litestar.response import Response


@post("/api/classify")
async def classify_email(data: dict) -> Response:
    subject = data.get("subject", "")
    sender = data.get("sender", "")
    body = data.get("body", "")
    is_contract = any(
        k in (subject + body).lower() for k in ["contract", "nda", "agreement"]
    )
    return Response(
        {"is_contract": is_contract, "confidence": 0.95 if is_contract else 0.1}
    )


app = Litestar(
    route_handlers=[classify_email],
    cors_config=CORSConfig(allow_origins=["*"]),  # Enable CORS for all origins
)
