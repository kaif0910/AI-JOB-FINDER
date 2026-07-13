import api from "./client";

import {
    AnalysisResponse
} from "../types/career";

export async function analyzeResume(
    question: string
): Promise<AnalysisResponse> {

    const response = await api.post(
        "/career/analyze",
        {
            question,
        }
    );

    return response.data;
}