export interface ChatRequest {
    question: string;
}

export interface ChatResponse {
    analysis: string;
    report_path: string | null;
}

export interface Job {
    title: string;
    url: string;
}