interface Props{

    title:string;

    url:string;

}

export default function JobCard({

    title,

    url

}:Props){

    return(

        <div className="rounded-lg border bg-white p-5 shadow">

            <h2 className="font-semibold">

                {title}

            </h2>

            <a

                href={url}

                target="_blank"

                className="text-blue-600"

            >

                View Job

            </a>

        </div>

    );

}