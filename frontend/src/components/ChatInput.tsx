import { Send } from "lucide-react";

interface Props {

    question: string;

    setQuestion: React.Dispatch<
        React.SetStateAction<string>
    >;

    onSend: () => void;

    loading: boolean;
}

export default function ChatInput({

    question,

    setQuestion,

    onSend,

    loading,

}: Props) {

    return (

        <div className="border-t bg-white p-5">

            <div className="flex gap-3">

                <input

                    className="flex-1 rounded-xl border border-gray-300 px-5 py-4"

                    placeholder="Ask anything..."

                    value={question}

                    onChange={(e)=>

                        setQuestion(
                            e.target.value
                        )

                    }

                    onKeyDown={(e)=>{

                        if(e.key==="Enter"){

                            onSend();

                        }

                    }}

                />

                <button

                    disabled={loading}

                    onClick={onSend}

                    className="bg-blue-600 text-white rounded-xl px-6"

                >

                    <Send/>

                </button>

            </div>

        </div>

    );

}