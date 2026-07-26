import type { Conversation } from "../types/conversation";

interface Props {

    conversations: Conversation[];

    activeConversation: string;

    onNew: () => void;

    onSelect: (id: string) => void;

    onDelete:(id:string) => void;

}

export default function Sidebar({

    conversations,

    activeConversation,

    onNew,

    onSelect,

    onDelete

}: Props) {

    return (

        <div
            className="
                w-72
                h-screen
                shrink-0
                bg-white
                border-r
                flex
                flex-col
            "
        >

            <div className="p-4 border-b">

                <button

                    onClick={onNew}

                    className="
                        w-full
                        rounded-lg
                        bg-blue-600
                        py-2
                        text-white
                        font-medium
                        hover:bg-blue-700
                    "

                >

                    + New Chat

                </button>

            </div>

            <div
                className="
                    flex-1
                    overflow-y-auto
                    p-2
                    space-y-2
                "
            >

                {

                    conversations.map(conversation => (

                        <div

                            key={conversation.id}

                            onClick={() =>

                                onSelect(conversation.id)

                            }

                            className={`

                                cursor-pointer

                                rounded-lg

                                p-3

                                transition

                                ${

                                    activeConversation === conversation.id

                                        ?

                                        "bg-blue-100"

                                        :

                                        "hover:bg-gray-100"

                                }

                            `}

                        >

                            <p

                                className="font-medium truncate"

                            >

                                {conversation.title}

                            </p>

                            <button
                                onClick={(e) => {
                                    e.stopPropagation(); 
                                    onDelete(conversation.id)
                                } }

                                className="text-red-500 hover:text-red-700"
                            >
                                    ✕
                            </button>
                        </div>

                    ))

                }

            </div>

        </div>

    );

}