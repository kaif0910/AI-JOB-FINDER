import {useState} from "react";

import {uploadResume} from "../api/career";

export default function UploadResume(){

    const [loading,setLoading]=useState(false);

    async function handleUpload(

        e:React.ChangeEvent<HTMLInputElement>

    ){

        const file=e.target.files?.[0];

        if(!file) return;

        setLoading(true);

        await uploadResume(file);

        setLoading(false);

        alert("Resume uploaded!");

    }

    return(

        <label
            className="cursor-pointer rounded-lg border border-dashed p-6 text-center shrink-0 bg-white hover:bg-gray-50 transition"
        >

            <input

                type="file"

                hidden

                onChange={handleUpload}

            />

            {

                loading

                ?"Uploading..."

                :"Uploaded Resume (Click to change)"

            }

        </label>

    );

}