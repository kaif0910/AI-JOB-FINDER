export function downloadReport(

    file_path:string

){

    window.open(

        `http://127.0.0.1:8000/${file_path}`,

        "_blank"

    );

}