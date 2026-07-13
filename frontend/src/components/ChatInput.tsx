interface Props {

    question: string;

    setQuestion: React.Dispatch<
        React.SetStateAction<string>
    >;

    onSend: () => void;
}

export default function ChatInput({

    question,

    setQuestion,

    onSend

}: Props) {

    return (

        <div className="fixed bottom-0 w-full p-4 bg-white border-t">

            <div className="flex gap-3">

                <input

                    className="flex-1 border rounded-lg p-3"

                    placeholder="Ask anything..."

                    value={question}

                    onChange={(e) =>
                        setQuestion(e.target.value)
                    }

                    onKeyDown={(e) => {

                        if (e.key === "Enter") {

                            onSend();

                        }

                    }}

                />

                <button

                    className="bg-blue-600 text-white px-6 rounded-lg"

                    onClick={onSend}

                >

                    Send

                </button>

            </div>

        </div>

    );

}