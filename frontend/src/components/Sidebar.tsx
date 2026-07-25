import type { Conversation } from "../types/conversation";

interface Props{

    conversations:Conversation[];

    activeConversation:string;

    onSelect:(id:string)=>void;

    onNew:()=>void;

}

export default function Sidebar({

    conversations,

    activeConversation,

    onSelect,

    onNew

}:Props){

    return(

        <div className="w-72 h-screen border-r bg-white flex flex-col shrink-0">

            <button

                onClick={onNew}

                className="w-full rounded-lg bg-blue-600 py-2 text-white"

            >

                + New Chat

            </button>

            <div className="mt-5 space-y-2">

                {

                    conversations.map(conversation=>(

                        <div

                            key={conversation.id}

                            onClick={()=>onSelect(conversation.id)}

                            className={`cursor-pointer rounded-lg p-3

                            ${

                                activeConversation===conversation.id

                                ?

                                "bg-blue-100"

                                :

                                "hover:bg-gray-200"

                            }`}

                        >

                            {conversation.title}

                        </div>

                    ))

                }

            </div>

        </div>

    );

}