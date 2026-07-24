import json 
from pathlib import Path
from datetime import datetime
from api.models.conversation import (
    Conversation,
    create_conversation
)

from api.models.message import ChatMessage

class ConversationService:

    def __init__(self):
        self.file = Path("data/conversations.json")

        if not self.file.exists():
            self.file.parent.mkdir(exist_ok=True)
            self.file.write_text("[]")

    def load(self):

        with open(self.file, "r") as f:
            return json.load(f)

    def save(self, conversations):
        with open(self.file, "w") as f:
            json.dump(
                conversations,
                f,
                indent=4
            )

    def list_conversations(self):
        return self.load()

    def create_conversation(self, conversation_id: str):

        conversations =  self.load()

        Conversation = create_conversation()

        conversations.append(
            Conversation.model_dump(
                mode="json"
            )
        )

        self.save(conversations)

        return Conversation

    def get_conversation(
            self,
            conversation_id: str
    ):
        conversations = self.load()

        for conversation in conversations:
            if conversation["id"] == conversation_id:
                return conversation 
        return None

    def save_messages(
            self,
            conversation_id: str ,
            messages: list[ChatMessage]
    ):
        conversations = self.load()

        for conversation in conversations :
            if conversation["id"] == conversation_id:

                conversation["messages"] = [
                    message.model_dump(
                        model= "json"
                    )

                    for message in messages
                ]

                conversation["updated_at"] = (
                    datetime.now().isoformat()
                )

                break
        self.save(conversations)



    def update_title(self, conversation_id: str , title: str):
        conversations = self.load()
        for conversation in conversations:
            if conversation["id"] == conversation_id:
                conversation["title"] = title

                conversation["updated_at"] = (
                    datetime.now().isoformat()
                )

                break
        self.save(conversations)

    def delete_conversation(self, conversation_id: str):

        conversations = self.load()

        conversations = [
            conversation
            for conversation in conversations 
            if conversation["id"] != conversation_id
        ]
        self.save(conversations)

    def append_message(
            self,
            conversation_id: str,
            content: str
    ):
        conversations = self.load()
        conversations.append(
            content: str
        )


Conversation_service = ConversationService()