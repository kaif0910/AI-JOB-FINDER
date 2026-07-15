interface Props{

    report?:string;

}

export default function AnalysisCard({

    report

}:Props){

    if(!report){

        return null;

    }

    return(

        <div className="rounded-lg border bg-white p-5 shadow">

            <button

                className="rounded-lg bg-green-600 px-5 py-3 text-white"

            >

                Download Report

            </button>

        </div>

    );

}