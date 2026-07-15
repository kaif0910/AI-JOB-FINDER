import { useState } from "react";

import { chat } from "../api/career";

import { v4 as uuid } from "uuid";

import type { Message } from "../types/chat";

export function useChat(){

    const [messages,setMessages]=useState<Message[]>([]);

    const [loading,setLoading]=useState(false);

    async function sendMessage(question:string){

        if(!question.trim()) return;

        const user:Message={

            id:uuid(),

            role:"user",

            content:question

        };

        setMessages(prev=>[

            ...prev,

            user

        ]);

        setLoading(true);

        try{

            const result=await chat(question);

            const ai:Message={

                id:uuid(),

                role:"assistant",

                content:result.data

            };

            setMessages(prev=>[

                ...prev,

                ai

            ]);

        }

        catch{

            const error:Message={

                id:uuid(),

                role:"assistant",

                content:"❌ Something went wrong."

            };

            setMessages(prev=>[

                ...prev,

                error

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