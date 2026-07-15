export interface Job{
    title: string;
    company?: string;
    location?: string;
    url: string

}



export interface ChatResponse{

    response:string;

    jobs: Job[];

    report_path?:string;

}