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
            session_id: getSessionId(),                              //conversation_id and session_id both are sent by the broweser to the backend , and also stored by the browser in the session storage, so that the backend can identify the user and the conversation
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

    formData.append(

        "session_id",
        getSessionId()

    );

    return api.post(

        "/resume/upload",

        formData

    );

}


export async function getConversations() {

    const response = await api.get(
        "/conversations",
        {
            params: {
                session_id: getSessionId()
            }
        }
    );

    return response.data;

}

export async function getConversation(
    id: string
){

    const response = await api.get(
        `/conversations/${id}`,
        {
            params: {
                session_id: getSessionId()
            }
        }
    );

    return response.data;

}

export async function createConversation(){

    const response = await api.post(
        "/conversations",
        null,
        {
            params: {
                session_id: getSessionId()
            }
        }   
    );

    return response.data;

}

export async function deleteConversation(
    id:string
){

    await api.delete(
        `/conversations/${id}`,
        {
            params: {
                session_id: getSessionId()
            }
        }   
    );

}


export async function renameConversation(

    id:string,

    title:string

){

    return api.patch(

        `/conversations/${id}/title`,

        {

            title

        },
        {
            params: {
                session_id: getSessionId()
            }
        }

    );

}