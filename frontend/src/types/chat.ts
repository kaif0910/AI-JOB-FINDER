import type { Job } from "./api"

export interface Message{

    id:string;

    role:"user"|"assistant";

    content:string;

    jobs?:Job[];

}