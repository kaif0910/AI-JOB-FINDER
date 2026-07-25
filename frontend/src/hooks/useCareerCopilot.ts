import {

    useEffect,

    useState

} from "react";

import { v4 as uuid } from "uuid";

import {

    chat,

    createConversation,

    getConversation,

    getConversations

} from "../api/career";

import type { Message } from "../types/chat";

import type { Conversation } from "../types/conversation";

export function useCareerCopilot() {

    const [

        conversations,

        setConversations

    ] = useState<Conversation[]>([]);

    const [

        activeConversation,

        setActiveConversation

    ] = useState("");

    const [

        messages,

        setMessages

    ] = useState<Message[]>([]);

    const [

        loading,

        setLoading

    ] = useState(false);

    async function refreshConversations() {

        const data = await getConversations();

        setConversations(data);

    }

    async function newConversation() {

        const conversation = await createConversation();

        await refreshConversations();

        setActiveConversation(

            conversation.id

        );

        setMessages([]);

    }

    async function openConversation(

        id: string

    ) {

        const conversation = await getConversation(id);

        setActiveConversation(id);

        setMessages(

            conversation.messages || []

        );

    }

    async function sendMessage(

        question: string

    ) {

        if (

            !question.trim()

        )

            return;

        if (

            !activeConversation

        ) {

            await newConversation();

            return sendMessage(

                question

            );

        }

        const user: Message = {

            id: uuid(),

            role: "user",

            content: question

        };

        setMessages(

            prev => [

                ...prev,

                user

            ]

        );

        setLoading(true);

        try {

            const result = await chat(

                question,

                activeConversation

            );

            const assistant: Message = {

                id: uuid(),

                role: "assistant",

                content: result.response,

                jobs: result.jobs,

                reportPath: result.report_path

            };

            setMessages(

                prev => [

                    ...prev,

                    assistant

                ]

            );

            await refreshConversations();

        }

        catch {

            setMessages(

                prev => [

                    ...prev,

                    {

                        id: uuid(),

                        role: "assistant",

                        content:

                            "❌ Something went wrong."

                    }

                ]

            );

        }

        finally {

            setLoading(false);

        }

    }

    useEffect(() => {

        refreshConversations();

    }, []);

    return {

        messages,

        loading,

        conversations,

        activeConversation,

        sendMessage,

        newConversation,

        openConversation,

        refreshConversations

    };

}