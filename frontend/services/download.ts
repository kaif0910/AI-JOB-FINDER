export function downloadReport(

    path:string

){

    window.open(

        `http://127.0.0.1:8000/${path}`,

        "_blank"

    );

}