// export interface ChatRequest {
//     question: string;
// }

// export interface ChatResponse {
//     analysis: string;
//     report_path: string | null;
// }

// export interface Job {
//     title: string;
//     url: string;
// }


import api from "../api/client";

import type { ChatResponse } from "../types/api";

export async function chat(

    question:string

):Promise<ChatResponse>{

    const response = await api.post(

        "/chat",

        {

            question

        }

    );

    return response.data;

}