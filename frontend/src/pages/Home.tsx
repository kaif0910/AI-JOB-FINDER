import { useState } from "react";

import { analyzeResume } from "../api/career";

import type { AnalysisResponse } from "../types/career";

import Navbar from "../components/Navbar";

import ChatBox from "../components/ChatBox";
import ChatInput from "../components/ChatInput";

export default function Home() {

    const [question, setQuestion] = useState("");

    const [response, setResponse] =
        useState<AnalysisResponse | null>(null);

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");

    async function handleSubmit() {

        if (!question.trim()) return;

        try {

            setLoading(true);

            setError("");

            const result = await analyzeResume(question);

            setResponse(result);

        } catch (err) {

            console.error(err);

            setError("Something went wrong.");

        } finally {

            setLoading(false);

        }
    }

    return (

        <div className="min-h-screen bg-gray-100">

            <Navbar />

            <ChatBox
                response={response}
                loading={loading}
                error={error}
            />

            <ChatInput
                question={question}
                setQuestion={setQuestion}
                onSend={handleSubmit}
            />

        </div>

    );

}