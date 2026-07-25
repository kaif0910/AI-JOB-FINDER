import {

    useState

} from "react";

interface Props {

    loading: boolean;

    onSend: (message: string) => void;

}

export default function ChatInput({

    loading,

    onSend

}: Props) {

    const [

        message,

        setMessage

    ] = useState("");

    function handleSubmit() {

        if (

            !message.trim()

        )

            return;

        onSend(message);

        setMessage("");

    }

    return (

        <div

            className="

                shrink-0

                border-t

                bg-white

                p-5

            "

        >

            <div className="flex gap-4">

                <input

                    value={message}

                    onChange={

                        e =>

                            setMessage(

                                e.target.value

                            )

                    }

                    onKeyDown={

                        e =>

                            e.key === "Enter" &&

                            handleSubmit()

                    }

                    className="

                        flex-1

                        rounded-lg

                        border

                        px-4

                        py-3

                        outline-none

                    "

                    placeholder="Ask anything..."

                />

                <button

                    onClick={handleSubmit}

                    disabled={loading}

                    className="

                        rounded-lg

                        bg-blue-600

                        px-6

                        text-white

                    "

                >

                    Send

                </button>

            </div>

        </div>

    );

}