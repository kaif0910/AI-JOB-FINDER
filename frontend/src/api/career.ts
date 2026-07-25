import api from "./client";
import { getSessionId } from "../utils/session";

// import type {
//     ChatResponse,
// } from "../types/career";

// export async function analyzeResume(
//     question: string
// ): Promise<ChatResponse> {

//     const response = await api.post(
//         "/career/analyze",
//         {
//             question,
//         }
//     );

//     return response.data;
// }



export async function chat(
    question:string,
    conversationId: string
){

    const response=await api.post(

        "/chat",

        {
            question,
            session_id: getSessionId(),
            conversation_id: conversationId 
        }

    );

    return response.data;

}


export async function uploadResume(

    file:File

){

    const formData=new FormData();

    formData.append(

        "file",

        file

    );

    return api.post(

        "/resume/upload",

        formData

    );

}


export async function getConversations() {

    const response = await api.get(
        "/conversations"
    );

    return response.data;

}

export async function getConversation(
    conversation_id: string
){

    const response = await api.get(
        `/conversations/${conversation_id}`
    );

    return response.data;

}

export async function createConversation(){

    const response = await api.post(
        "/conversations"
    );

    return response.data;

}

export async function deleteConversation(
    conversation_id:string
){

    await api.delete(
        `/conversations/${conversation_id}`
    );

}