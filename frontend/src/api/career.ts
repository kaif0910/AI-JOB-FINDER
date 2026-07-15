import api from "./client";

import type {
    ChatResponse,
} from "../types/career";

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


import api from "./client";

export async function chat(
    question:string
){

    const response=await api.post(

        "/chat",

        {
            question
        }

    );

    return response.data;

}