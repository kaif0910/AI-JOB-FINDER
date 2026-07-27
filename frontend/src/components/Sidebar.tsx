import type { Conversation } from "../types/conversation";
import {
    MessageSquarePlus,
    Trash2,
    X,
} from "lucide-react";

interface Props {
    conversations: Conversation[];
    activeConversation: string;

    onNew: () => void;
    onSelect: (id: string) => void;
    onDelete: (id: string) => void;

    mobileOpen: boolean;
    setMobileOpen: (open: boolean) => void;
}

export default function Sidebar({
    conversations,
    activeConversation,
    onNew,
    onSelect,
    onDelete,
    mobileOpen,
    setMobileOpen,
}: Props) {

    function handleSelect(id: string) {
        onSelect(id);

        if (window.innerWidth < 768) {
            setMobileOpen(false);
        }
    }

    return (
        <>
            {/* Overlay */}

            <div
                onClick={() => setMobileOpen(false)}
                className={`
                    fixed
                    inset-0
                    bg-black/40
                    backdrop-blur-sm
                    z-30
                    transition-opacity
                    md:hidden

                    ${
                        mobileOpen
                            ? "opacity-100 visible"
                            : "opacity-0 invisible"
                    }
                `}
            />

            {/* Sidebar */}

            <aside
                className={`
                    fixed
                    md:static

                    left-0
                    top-0

                    z-40

                    h-screen
                    w-72

                    bg-white

                    border-r

                    flex
                    flex-col

                    transition-transform
                    duration-300

                    shadow-xl
                    md:shadow-none

                    ${
                        mobileOpen
                            ? "translate-x-0"
                            : "-translate-x-full"
                    }

                    md:translate-x-0
                `}
            >
                {/* Header */}

                <div
                    className="
                        flex
                        items-center
                        justify-between
                        p-4
                        border-b
                    "
                >
                    <h2 className="font-semibold text-gray-800">
                        Conversations
                    </h2>

                    <button
                        onClick={() => setMobileOpen(false)}
                        className="
                            md:hidden
                            rounded-lg
                            p-2
                            hover:bg-gray-100
                        "
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* New Chat */}

                <div className="p-4">

                    <button
                        onClick={onNew}
                        className="
                            w-full

                            flex
                            items-center
                            justify-center
                            gap-2

                            rounded-xl

                            bg-blue-600

                            py-3

                            text-white

                            font-medium

                            hover:bg-blue-700

                            transition
                        "
                    >
                        <MessageSquarePlus size={18} />

                        New Chat

                    </button>

                </div>

                {/* Chats */}

                <div
                    className="
                        flex-1
                        overflow-y-auto
                        px-3
                        pb-5
                        space-y-2
                    "
                >
                    {conversations.length === 0 && (

                        <div
                            className="
                                mt-20
                                text-center
                                text-sm
                                text-gray-400
                            "
                        >
                            No conversations yet
                        </div>

                    )}

                    {conversations.map((conversation) => (

                        <div
                            key={conversation.id}
                            onClick={() =>
                                handleSelect(conversation.id)
                            }
                            className={`
                                group

                                cursor-pointer

                                rounded-xl

                                border

                                p-3

                                transition-all

                                ${
                                    activeConversation === conversation.id
                                        ? "bg-blue-50 border-blue-500"
                                        : "border-transparent hover:bg-gray-50"
                                }
                            `}
                        >
                            <div className="flex items-center justify-between">

                                <div className="min-w-0">

                                    <p
                                        className="
                                            truncate
                                            font-medium
                                        "
                                    >
                                        {conversation.title}
                                    </p>

                                </div>

                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        onDelete(conversation.id);
                                    }}
                                    className="
                                        opacity-0
                                        group-hover:opacity-100

                                        transition

                                        text-gray-400
                                        hover:text-red-600
                                    "
                                >
                                    <Trash2 size={16} />
                                </button>

                            </div>

                        </div>

                    ))}

                </div>

                {/* Footer */}

                <div
                    className="
                        border-t
                        p-4
                        text-center
                        text-xs
                        text-gray-400
                    "
                >
                    Career Copilot v1.0
                </div>

            </aside>
        </>
    );
}