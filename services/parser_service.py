import json 
import re
from pydantic import BaseModel

class ParserService:

    @staticmethod
    def parse_json(
        response: str,
        schema: type[BaseModel]
    ):
        response = response.strip()

        response = re.sub(
            r"^```(?:json)?",
            "",
            response,
            flags=re.IGNORECASE
        )

        response = re.sub(
            r"```$",
            "",
            response
        )

        response = response.strip()

        data = json.loads(response)

        return schema.model_validate(data)

parser_service = ParserService()