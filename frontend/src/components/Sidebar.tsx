import type { Conversation } from "../types/conversation";

interface Props {
    conversations: Conversation[];
    activeId: string;
    onSelect: (id: string) => void;
    onNew: () => void;
}

export default function Sidebar({
    conversations,
    activeId,
    onSelect,
    onNew
}: Props) {
    return (
        <div className="w-72 border-r bg-gray-100 h-screen p-4">

            <button
                onClick={onNew}
                className="w-full rounded-lg bg-blue-600 text-white py-2 mb-4"
            >
                + New Chat
            </button>

            <div className="space-y-2">

                {conversations.map((conversation) => (

                    <div
                        key={conversation.id}
                        onClick={() => onSelect(conversation.id)}
                        className={`cursor-pointer rounded-lg p-3 ${
                            activeId === conversation.id
                                ? "bg-blue-100"
                                : "hover:bg-gray-200"
                        }`}
                    >
                        {conversation.title}
                    </div>

                ))}

            </div>

        </div>
    );
}