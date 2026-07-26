import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

import {
    chat,
    createConversation,
    getConversation,
    getConversations,
    deleteConversation,
} from "../api/career";

import api from "../api/client";

import type { Message } from "../types/chat";
import type { Conversation } from "../types/conversation";

export function useCareerCopilot() {
    const [conversations, setConversations] = useState<Conversation[]>([]);
    const [activeConversation, setActiveConversation] = useState("");
    const [messages, setMessages] = useState<Message[]>([]);
    const [loading, setLoading] = useState(false);

    async function refreshConversations() {
        try {
            const data = await getConversations();
            setConversations(data);
        } catch (error) {
            console.error("Failed to load conversations:", error);
        }
    }

    async function newConversation(): Promise<string> {
        const conversation = await createConversation();

        setConversations((prev) => [...prev, conversation]);
        setActiveConversation(conversation.id);
        setMessages([]);

        return conversation.id;
    }

    async function openConversation(id: string) {
        try {
            const conversation = await getConversation(id);

            setActiveConversation(id);
            // setMessages(conversation.messages || []);
            setMessages(
                (conversation.messages ?? []).map((message: any) => ({
                    ...message,
                    jobs: message.jobs ?? [],
                    reportPath: message.reportPath ?? message.report_path
                }))
            );
        } catch (error) {
            console.error("Failed to open conversation:", error);
        }
    }

    async function renameConversation(
        id: string,
        title: string
    ) {
        try {
            await api.patch(`/conversations/${id}/title`, {
                title,
            });

            await refreshConversations();
        } catch (error) {
            console.error("Failed to rename conversation:", error);
        }
    }

    async function removeConversation(id: string) {
        try {
            await deleteConversation(id);

            // await refreshConversations();

            // if (activeConversation === id) {
            //     setActiveConversation("");
            //     setMessages([]);
            // }

            const updated = conversations.filter(
                conversation => conversation.id !== id
            );
            setConversations(updated);

            if( activeConversation === id ) {
                setActiveConversation("");
                setMessages([]);
            }
        } catch (error) {
            console.error("Failed to delete conversation:", error);
        }
    }

    async function sendMessage(question: string) {
        if (!question.trim()) return;

        if (loading) return;

        setLoading(true);

        try {
            let conversationId = activeConversation;

            if (conversationId === "") {
                conversationId = await newConversation();
            }

            const user: Message = {
                id: uuid(),
                role: "user",
                content: question,
            };

            setMessages((prev) => [...prev, user]);

            const result = await chat(
                question,
                conversationId
            );

            const assistant: Message = {
                id: uuid(),
                role: "assistant",
                content: result.response,
                jobs: result.jobs,
                reportPath: result.report_path,
            };

            setMessages((prev) => [...prev, assistant]);

            await refreshConversations();
        } catch (error) {
            console.error(error)
            setMessages((prev) => [
                ...prev,
                {
                    id: uuid(),
                    role: "assistant",
                    content: "❌ Something went wrong.",
                },
            ]);
        } finally {
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
        refreshConversations,
        renameConversation,
        removeConversation,
    };
}