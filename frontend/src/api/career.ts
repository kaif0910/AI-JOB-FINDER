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
    question:string
){

    const response=await api.post(

        "/chat",

        {
            question,
            session_id: getSessionId()
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