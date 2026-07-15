import { Message } from "../types/chat";

import ChatMessage from "./ChatMessage";

interface Props{

    messages:Message[];

    loading:boolean;

}

export default function ChatWindow({

    messages,

    loading

}:Props){

    return(

        <div
            className="flex-1 overflow-y-auto
            px-10 py-8 space-y-6"
        >

            {

                messages.map(message=>(

                    <ChatMessage

                        key={message.id}

                        role={message.role}

                        content={message.content}

                    />

                ))

            }

            {

                loading &&

                <div className="text-gray-500">

                    Thinking...

                </div>

            }

        </div>

    );

}