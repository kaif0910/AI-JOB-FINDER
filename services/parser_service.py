import json 

from pydantic import BaseModel

class ParserService:

    @staticmethod
    def parse_json(
        response: str,
        schema: type[BaseModel]
    ):
        data = json.loads(response)

        return schema.model_validate(data)

parser_service = ParserService()