export interface Job{
    title: string;
    url: string;
}

export interface AnalysisResponse { 
    analysis: string;
    report_url: string;
    jobs?: Job[];
}