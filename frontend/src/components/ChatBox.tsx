import type { AnalysisResponse } from "../types/career";
import ReactMarkdown from "react-markdown";
interface Props {

    response: AnalysisResponse | null;

    loading: boolean;

    error: string;
}

export default function ChatBox({

    response,

    loading,

    error

}: Props) {

    return (

        <div className="max-w-5xl mx-auto p-6 pb-32">

            <h1 className="text-4xl font-bold mb-10">

                Career Copilot

            </h1>

            {loading && (

                <div className="text-center py-10">

                    <div className="animate-pulse">

                        🤖 Analyzing Resume...

                    </div>

                </div>

            )}

            {error && (

                <p className="text-red-500">

                    {error}

                </p>

            )}

            {response && (

                <div>

                    <h2 className="text-2xl font-semibold mb-4">

                        Analysis

                    </h2>

                    <div className="bg-white rounded-xl shadow p-6">
                        <ReactMarkdown>
                            {response.analysis}
                        </ReactMarkdown>
                    </div>

                </div>

            )}

        </div>

    );

}