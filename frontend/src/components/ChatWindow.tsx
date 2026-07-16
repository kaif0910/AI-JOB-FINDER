import {

    useEffect,

    useRef

} from "react";

import type { Message } from "../types/chat";

import ChatMessage from "./ChatMessage";

interface Props{

    messages:Message[];

    loading:boolean;

}

export default function ChatWindow({

    messages,

    loading

}:Props){

    const bottomRef=useRef<HTMLDivElement>(null);

    useEffect(()=>{

        bottomRef.current?.scrollIntoView({

            behavior:"smooth"

        });

    },[messages,loading]);

    if(messages.length===0){

        return(

            <div className="flex flex-1 items-center justify-center">

                <div className="text-center">

                    <h1 className="text-5xl font-bold">

                        Career Copilot

                    </h1>

                    <p className="mt-4 text-gray-500">

                        Ask me anything about your resume,
                        jobs or career.

                    </p>

                </div>

            </div>

        );

    }

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

                        jobs={message.jobs}

                        reportPath={message.reportPath}

                    />

                ))

            }

            {

                loading &&

                <div className="text-gray-500 animate-pulse">

                    Career Copilot is thinking...

                </div>

            }

            <div ref={bottomRef}/>

        </div>

    );

}