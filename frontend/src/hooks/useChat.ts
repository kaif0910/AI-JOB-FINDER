import {useState} from "react";

import {chat} from "../api/career";

import {Message} from "../types/chat";

import {v4 as uuid} from "uuid";

export function useChat(){

    const [messages,setMessages]=useState<Message[]>([]);

    const [loading,setLoading]=useState(false);

    async function sendMessage(question:string){

        if(!question.trim()) return;

        const userMessage:Message={

            id:uuid(),

            role:"user",

            content:question

        };

        setMessages(prev=>[

            ...prev,

            userMessage

        ]);

        setLoading(true);

        try{

            const response=await chat(question);

            const aiMessage:Message={

                id:uuid(),

                role:"assistant",

                content:response.response

            };

            setMessages(prev=>[

                ...prev,

                aiMessage

            ]);

        }

        finally{

            setLoading(false);

        }

    }

    return{

        messages,

        loading,

        sendMessage

    };

}