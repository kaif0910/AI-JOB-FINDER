from langchain_groq import ChatGroq

from prompts.title_prompts import TITLE_PROMPT

llm = ChatGroq(
    model="llama-3.3-70b-versatile"
)


class TitleService:

    def generate_title(self, message: str):

        prompt = TITLE_PROMPT.format(
            message=message
        )

        response = llm.invoke(prompt)

        return response.content.strip()


title_service = TitleService()