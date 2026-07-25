import { useEffect,useState } from "react";

import {

    createConversation,

    getConversations,

    getConversation

} from "../api/career";

import type { Conversation } from "../types/conversation";

export function useConversation(){

    const [

        conversations,

        setConversations

    ]=useState<Conversation[]>([]);

    const [

        activeConversation,

        setActiveConversation

    ]=useState("");

    async function loadConversations(){

        const data=await getConversations();

        setConversations(data);

    }

    async function newConversation(){

        const conversation=

            await createConversation();

        await loadConversations();

        setActiveConversation(

            conversation.id

        );

    }

    async function openConversation(conversation_id: string) {

        const conversation= 
            await getConversation(conversation_id);
        setActiveConversation(conversation_id);
        
        return conversation.messages
    }

    useEffect(()=>{

        loadConversations();

    },[]);

    return{

        conversations,

        activeConversation,

        setActiveConversation,

        newConversation,

        loadConversations

    };

}