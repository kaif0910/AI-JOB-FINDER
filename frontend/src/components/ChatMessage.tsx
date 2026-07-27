import ReactMarkdown from "react-markdown";
import { Bot, User, Download } from "lucide-react";

import JobCard from "./JobCard";

import type { Job } from "../types/api";

interface Props {
    role: "user" | "assistant";
    content: string;
    jobs?: Job[];
    reportPath?: string;
}

export default function ChatMessage({
    role,
    content,
    jobs,
    reportPath,
}: Props) {

    const isUser = role === "user";

    const API =
        import.meta.env.VITE_API_URL;

    return (

        <div
            className={`
                flex
                gap-4

                ${isUser ? "justify-end" : "justify-start"}
            `}
        >

            {!isUser && (

                <div
                    className="
                        h-10
                        w-10

                        shrink-0

                        rounded-xl

                        bg-blue-600

                        flex
                        items-center
                        justify-center

                        text-white
                    "
                >
                    <Bot size={20} />
                </div>

            )}

            <div
                className={`
                    max-w-[85%]
                    md:max-w-3xl

                    rounded-2xl

                    px-5
                    py-4

                    shadow-sm

                    leading-7

                    ${
                        isUser
                            ? "bg-blue-600 text-white"
                            : "bg-white border border-gray-200"
                    }
                `}
            >

                <div
                    className="
                        prose
                        prose-sm
                        max-w-none
                    "
                >

                    <ReactMarkdown>

                        {content}

                    </ReactMarkdown>

                </div>

                {jobs?.length ? (

                    <div className="mt-6 space-y-4">

                        {jobs.map(job => (

                            <JobCard
                                key={job.url}
                                title={job.title}
                                company={job.company}
                                location={job.location}
                                url={job.url}
                            />

                        ))}

                    </div>

                ) : null}

                {reportPath && (

                    <div className="mt-6">

                        <a
                            href={`${API}/reports/download/${reportPath}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                inline-flex
                                items-center
                                gap-2

                                rounded-xl

                                bg-green-600

                                px-5
                                py-3

                                text-white

                                hover:bg-green-700

                                transition
                            "
                        >

                            <Download size={18} />

                            Download Career Report

                        </a>

                    </div>

                )}

            </div>

            {isUser && (

                <div
                    className="
                        h-10
                        w-10

                        shrink-0

                        rounded-xl

                        bg-gray-900

                        flex
                        items-center
                        justify-center

                        text-white
                    "
                >
                    <User size={20} />
                </div>

            )}

        </div>

    );

}