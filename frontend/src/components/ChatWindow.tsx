import {

    useEffect,

    useRef

} from "react";

import ChatMessage from "./ChatMessage";

import type { Message } from "../types/chat";

interface Props {

    messages: Message[];

    loading: boolean;

}

export default function ChatWindow({

    messages,

    loading

}: Props) {

    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

        bottomRef.current?.scrollIntoView({

            behavior: "smooth"

        });

    }, [

        messages,

        loading

    ]);

    if (

        messages.length === 0

    ) {

        return (

            <div className="flex-1 flex items-center justify-center">

                <div className="text-center">

                    <h1 className="text-5xl font-bold">

                        Career Copilot

                    </h1>

                    <p className="mt-3 text-gray-500">

                        Ask anything about your resume or career.

                    </p>

                </div>

            </div>

        );

    }

    return (

        <div

            className="

                flex-1

                min-h-0

                overflow-y-auto

                px-10

                py-8

            "

        >

            {

                messages.map(message => (

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

                <div className="mt-5 text-gray-500">

                    Thinking...

                </div>

            }

            <div ref={bottomRef} />

        </div>

    );

}