import { useEffect, useRef } from "react";
import { Sparkles } from "lucide-react";
import ChatMessage from "./ChatMessage";
import type { Message } from "../types/chat";

interface Props {
    messages: Message[];
    loading: boolean;
}

export default function ChatWindow({
    messages,
    loading,
}: Props) {

    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({
            behavior: "smooth",
        });
    }, [messages, loading]);

    if (messages.length === 0) {
        return (
            <div className="flex h-full items-center justify-center px-6">

                <div className="max-w-xl text-center">

                    <div
                        className="
                            mx-auto
                            mb-6
                            flex
                            h-20
                            w-20
                            items-center
                            justify-center
                            rounded-3xl
                            bg-blue-600
                            text-white
                            shadow-lg
                        "
                    >
                        <Sparkles size={36} />
                    </div>

                    <h1
                        className="
                            text-3xl
                            md:text-5xl
                            font-bold
                            text-gray-900
                        "
                    >
                        Career Copilot
                    </h1>

                    <p
                        className="
                            mt-4
                            text-gray-500
                            leading-relaxed
                        "
                    >
                        Upload your resume and ask questions,
                        generate reports, or discover jobs
                        tailored to your skills.
                    </p>

                </div>

            </div>
        );
    }

    return (

        <div
            className="
                h-full
                overflow-y-auto
                px-4
                md:px-8
                py-8
                overscroll-contain
            "
        >

            <div
                className="
                    mx-auto
                    max-w-5xl
                    space-y-8
                    pb-10
                "
            >

                {messages.map((message) => (

                    <ChatMessage
                        key={message.id}
                        role={message.role}
                        content={message.content}
                        jobs={message.jobs}
                        reportPath={message.reportPath}
                    />

                ))}

                {loading && (

                    <div className="flex">

                        <div
                            className="
                                rounded-2xl
                                bg-white
                                px-5
                                py-4
                                shadow-sm
                                border
                            "
                        >

                            <div className="flex gap-2">

                                <span className="h-2 w-2 animate-bounce rounded-full bg-blue-500"></span>

                                <span
                                    className="
                                        h-2
                                        w-2
                                        animate-bounce
                                        rounded-full
                                        bg-blue-500
                                        [animation-delay:.15s]
                                    "
                                ></span>

                                <span
                                    className="
                                        h-2
                                        w-2
                                        animate-bounce
                                        rounded-full
                                        bg-blue-500
                                        [animation-delay:.3s]
                                    "
                                ></span>

                            </div>

                        </div>

                    </div>

                )}

                <div ref={bottomRef} />

            </div>

        </div>

    );
}