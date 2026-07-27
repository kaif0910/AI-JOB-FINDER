import { useState } from "react";
import { Upload } from "lucide-react";
import { uploadResume } from "../api/career";

export default function UploadResume() {

    const [loading, setLoading] = useState(false);

    async function handleUpload(
        e: React.ChangeEvent<HTMLInputElement>
    ) {

        const file = e.target.files?.[0];

        if (!file) return;

        setLoading(true);

        try {

            await uploadResume(file);

            alert("Resume uploaded successfully!");

        } finally {

            setLoading(false);

        }

    }

    return (

        <label
            className="
                cursor-pointer

                flex
                items-center
                gap-2

                rounded-xl

                border

                bg-white

                px-4
                py-2

                hover:bg-gray-50

                transition
            "
        >

            <Upload size={18} />

            <span
                className="
                    hidden
                    sm:inline
                    text-sm
                    font-medium
                "
            >
                {
                    loading
                        ? "Uploading..."
                        : "Upload Resume"
                }
            </span>

            <input
                hidden
                type="file"
                onChange={handleUpload}
            />

        </label>

    );

}