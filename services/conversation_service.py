import json 
from pathlib import Path

DATA_FILE = Path("data/conversations.json")

class ConversationService:

    def load(self):
        if not DATA_FILE.exists():
            DATA_FILE.write_text("[]")

        with open(DATA_FILE, "r") as f:
            return json.load(f)

    def save(self, conversations):
        with open(DATA_FILE, "w") as f:
            json.dump(
                conversations,
                f,
                indent=4
            )

Conversation_service = ConversationService()