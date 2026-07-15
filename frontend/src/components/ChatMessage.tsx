import ReactMarkdown from "react-markdown";
import JobCard from "./JobCard";
import type { Job } from "../types/api"

interface Props{

    role:"user"|"assistant";

    content:string;

    jobs?:Job[];

}

export default function ChatMessage({

    role,

    content,

    jobs

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

            </div>

        </div>

    );

}