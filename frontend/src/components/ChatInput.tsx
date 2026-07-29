import { useRef, useState } from "react";
import { SendHorizonal } from "lucide-react";

interface Props {
    loading: boolean;
    onSend: (message: string) => void;
}

export default function ChatInput({
    loading,
    onSend,
}: Props) {

    const [message, setMessage] = useState("");

    const textareaRef =
        useRef<HTMLTextAreaElement>(null);

    function resize() {

        if (!textareaRef.current) return;

        textareaRef.current.style.height = "0px";

        textareaRef.current.style.height =
            Math.min(
                textareaRef.current.scrollHeight,
                180
            ) + "px";
    }

    function handleSend() {

        if (!message.trim()) return;

        onSend(message);

        setMessage("");

        requestAnimationFrame(resize);

    }

    return (

        <div
            className="
                sticky
                bottom-0

                border-t

                bg-white/90

                backdrop-blur-md

                p-4
                pb-[max(env(safe-area-inset-bottom), 1rem)]
            "
        >

            <div
                className="
                    mx-auto
                    flex
                    max-w-5xl
                    items-end
                    gap-3
                "
            >

                <textarea

                    ref={textareaRef}

                    rows={1}

                    value={message}

                    onChange={(e) => {

                        setMessage(e.target.value);

                        resize();

                    }}

                    onKeyDown={(e) => {

                        if (
                            e.key === "Enter" &&
                            !e.shiftKey
                        ) {

                            e.preventDefault();

                            handleSend();

                        }

                    }}

                    placeholder="Ask anything about your career..."

                    className="
                        max-h-44
                        min-h-[52px]

                        flex-1

                        resize-none

                        rounded-2xl

                        border

                        border-gray-300

                        px-5

                        py-3

                        outline-none

                        focus:border-blue-500

                        focus:ring-4

                        focus:ring-blue-100
                    "

                />

                <button

                    onClick={handleSend}

                    disabled={loading}

                    className="
                        flex

                        h-12
                        w-12

                        items-center

                        justify-center

                        rounded-2xl

                        bg-blue-600

                        text-white

                        transition

                        hover:bg-blue-700

                        disabled:cursor-not-allowed

                        disabled:opacity-50
                    "

                >

                    <SendHorizonal size={18} />

                </button>

            </div>

        </div>

    );

}