import type {
    ChatResponse,
} from "../types/career";

import ReactMarkdown from "react-markdown";

interface Props{

    response:ChatResponse | null;

    loading:boolean;

}

export default function ChatBox({

    response,

    loading

}:Props){

    return(

        <div className="flex-1 overflow-y-auto p-8 bg-slate-50">

            {loading && (

                <h2>

                    🤖 Thinking...

                </h2>

            )}

            {!loading && !response &&(

                <div className="text-center mt-24">

                    <h2 className="text-5xl font-bold">

                        Career Copilot

                    </h2>

                    <p className="mt-4 text-gray-500">

                        Ask anything about your resume.

                    </p>

                </div>

            )}

            {response &&(

                <div className="bg-white rounded-xl shadow p-6">

                    <ReactMarkdown>

                        {response.analysis}

                    </ReactMarkdown>

                </div>

            )}

        </div>

    );

}