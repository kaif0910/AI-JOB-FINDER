import os
from dotenv import load_dotenv
from langchain_groq import ChatGroq
from langchain_core.messages import(
    HumanMessage,
    SystemMessage
)

from langchain_core.tools import tool
from langchain_core.messages import ToolMessage

load_dotenv()

llm = ChatGroq(
    model="llama-3.3-70b-versatile",
    api_key=os.getenv("GROQ_API_KEY")
)

tool_map = {
    
}

llm_with_tools = llm.bind_tools([])

messages = [
    SystemMessage(
        content="you are a backend resume analyzer"
    )
]

while True:
    user_input = input("you:")

    if user_input.lower() == "exit":
        break

    messages.append(
        HumanMessage(
            content= user_input
        )
    )

    response = llm_with_tools.invoke(messages)
    if not response.tool_calls:
        print(response.content)
        messages.append(response)
        continue
    tool_call = response.tool_calls[0]
    tool_name = tool_call["name"]
    arguments = tool_call["args"]
    tool = tool_map[tool_name]
    result = tool.invoke(arguments)
    tool_message = ToolMessage(
        content= str(result),
        tool_call_id = tool_call["id"]
    )
    messages.append(response)
    messages.append(tool_message)
    final_response = llm_with_tools.invoke(messages)
    print(final_response.content)
    messages.append(final_response)