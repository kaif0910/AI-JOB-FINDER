interface Props{

    title:string;

    company?:string;

    location?:string;

    url:string;

}

export default function JobCard({

    title,

    company,

    location,

    url

}:Props){

    return(

        <div className="mt-4 rounded-lg border bg-gray-50 p-4">

            <h3 className="font-semibold text-lg">

                {title}

            </h3>

            {

                company &&

                <p>

                    Company: {company}

                </p>

            }

            {

                location &&

                <p>

                    Location: {location}

                </p>

            }

            <a

                href={url}

                target="_blank"

                rel="noopener noreferrer"

                className="mt-2 inline-block rounded bg-blue-600 px-4 py-2 text-white"

            >

                Apply Now

            </a>

        </div>

    );

}