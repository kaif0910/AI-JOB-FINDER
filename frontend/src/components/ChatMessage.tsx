import ReactMarkdown from "react-markdown";

interface Props{

    role:"user"|"assistant";

    content:string;

}

export default function ChatMessage({

    role,

    content

}:Props){

    const isUser=role==="user";

    return(

        <div
            className={`flex ${
                isUser
                ?"justify-end"
                :"justify-start"
            }`}
        >

            <div
                className={`max-w-3xl rounded-xl px-5 py-4 shadow leading-7

                ${
                    isUser

                    ?"bg-blue-600 text-white"

                    :"bg-white border"
                }`}
            >

                <ReactMarkdown>

                    {content}

                </ReactMarkdown>

            </div>

        </div>

    );

}