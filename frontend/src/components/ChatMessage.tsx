import ReactMarkdown from "react-markdown";
import JobCard from "./JobCard";
import type { Job } from "../types/api"

interface Props{

    role:"user"|"assistant";

    content:string;

    jobs?:Job[];

    reportPath?:string;

}

export default function ChatMessage({

    role,

    content,

    jobs,

    reportPath

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

                {
                    jobs?.map(
                        (job)=>(
                            <JobCard
                                key= {job.url}
                                title={job.title}
                                company={job.company}
                                location={job.location}
                                url= {job.url}

                            />
                        )
                    )
                }


                {
                    reportPath && (
                        <div className="mt-5">
                            <a 
                            href={`http://127.0.0.1:8000/reports/download/${reportPath}`}

                            target="_blank"

                            rel="noopener noreferrer"

                            className="inline-block rounded-lg bg-green-600 px-5 py-3 text-white hover:bg-green-700 transition"
                            >
                                📄 Download Career Report 
                            </a>
                        </div>
                    )
                }

            </div>

        </div>

    );

}