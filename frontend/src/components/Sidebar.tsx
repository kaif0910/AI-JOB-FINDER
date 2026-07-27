import type { Conversation } from "../types/conversation";

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

    const handleSelect = (id: string) => {
        onSelect(id);

        if (window.innerWidth < 768) {
            setMobileOpen(false);
        }
    };

    return (
        <>
            {/* Overlay */}

            <div
                onClick={() => setMobileOpen(false)}
                className={`
                    fixed inset-0 bg-black/40 z-30 md:hidden transition-opacity
                    ${
                        mobileOpen
                            ? "opacity-100 visible"
                            : "opacity-0 invisible"
                    }
                `}
            />

            <aside
                className={`
                    fixed md:static
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

                    ${
                        mobileOpen
                            ? "translate-x-0"
                            : "-translate-x-full"
                    }

                    md:translate-x-0
                `}
            >
                <div className="p-3 border-b">

                    <button
                        onClick={onNew}
                        className="w-full rounded-lg bg-blue-600 py-2 text-white font-medium hover:bg-blue-700"
                    >
                        + New Chat
                    </button>

                </div>

                <div className="flex-1 overflow-y-auto p-2 space-y-2">

                    {conversations.map((conversation) => (

                        <div
                            key={conversation.id}
                            onClick={() =>
                                handleSelect(conversation.id)
                            }
                            className={`
                                cursor-pointer
                                rounded-lg
                                p-3
                                transition
                                flex
                                justify-between
                                items-center

                                ${
                                    activeConversation === conversation.id
                                        ? "bg-blue-100"
                                        : "hover:bg-gray-100"
                                }
                            `}
                        >
                            <p className="truncate font-medium">
                                {conversation.title}
                            </p>

                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onDelete(conversation.id);
                                }}
                                className="text-red-500 hover:text-red-700"
                            >
                                ✕
                            </button>
                        </div>

                    ))}

                </div>
            </aside>
        </>
    );
}