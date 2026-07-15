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

        # Remove markdown code fences
        response = re.sub(
            r"```(?:json)?",
            "",
            response,
            flags=re.IGNORECASE,
        )

        response = response.strip()

        # Find first JSON object
        match = re.search(
            r"\{[\s\S]*\}",
            response
        )

        if match is None:
            raise ValueError(
                f"No JSON found.\n\nLLM Output:\n{response}"
            )

        json_text = match.group(0)

        data = json.loads(json_text)

        return schema.model_validate(data)


parser_service = ParserService()