import { useState } from "react";

import Navbar from "../components/Navbar";
import ChatBox from "../components/ChatBox";
import ChatInput from "../components/ChatInput";

import { analyzeResume } from "../api/career";

import type {
    ChatResponse,
} from "../types/career";

export default function Home(){

    const [question,setQuestion]=useState("");

    const [loading,setLoading]=useState(false);

    const [response,setResponse]=
        useState<ChatResponse|null>(null);

    async function handleSubmit(){

        if(!question.trim()) return;

        try{

            setLoading(true);

            const result=
                await analyzeResume(question);

            setResponse(result);

            setQuestion("");

        }

        catch(error){

            console.log(error);

        }

        finally{

            setLoading(false);

        }

    }

    return(

        <>

            <Navbar/>

            <main className="max-w-6xl mx-auto px-6 py-8">

                <div className="bg-white rounded-2xl shadow-lg h-[80vh] flex flex-col overflow-hidden">

                    <ChatBox

                        response={response}

                        loading={loading}

                    />

                    <ChatInput

                        question={question}

                        setQuestion={setQuestion}

                        onSend={handleSubmit}

                        loading={loading}

                    />

                </div>

            </main>

        </>

    );

}