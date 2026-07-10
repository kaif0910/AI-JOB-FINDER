import os

from dotenv import load_dotenv

from langchain_groq import ChatGroq

from langchain_core.messages import (
    HumanMessage,
    SystemMessage,
    ToolMessage,
)

from prompts.system_prompts import SYSTEM_PROMPT


load_dotenv()


class AgentRuntime:

    def __init__(self, tools):

        self.llm = ChatGroq(
            model="meta-llama/llama-4-scout-17b-16e-instruct",
            api_key=os.getenv("GROQ_API_KEY")
        )

        self.tools = tools

        self.tool_map = {
            tool.name: tool
            for tool in tools
        }

        self.llm_with_tools = self.llm.bind_tools(
            self.tools
        )
        

        self.messages = [
            SystemMessage(
                content=SYSTEM_PROMPT
            )
        ]

    def ask_llm(self):

        return self.llm_with_tools.invoke(
            self.messages
        )

    def execute_tools(self, response):
        self.messages.append(response)
        print(response.tool_calls)
        for tool_call in response.tool_calls:

            tool_name = tool_call["name"]

            arguments = tool_call["args"]

            tool = self.tool_map[tool_name]
            
            

            try:
                result = tool.invoke(arguments)

            except Exception as e :
                result = f"Tool execution failed: {str(e)}"
            
            tool_message = ToolMessage(
                content=str(result),
                tool_call_id=tool_call["id"]
            )
            
            self.messages.append(tool_message)

        final_response = self.ask_llm()


        return final_response

    def chat(self):

        while True:

            user_input = input("You: ")

            if user_input.lower() == "exit":
                break

            self.messages.append(
                HumanMessage(
                    content=user_input
                )
            )

            response = self.ask_llm()
            

            while response.tool_calls:

                response = self.execute_tools(response)

            self.messages.append(response)
            print(f"\nAI:{response.content}\n")