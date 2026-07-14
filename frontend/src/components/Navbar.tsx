import { BriefcaseBusiness } from "lucide-react";

export default function Navbar() {
    return (
        <header className="bg-white shadow">

            <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

                <div className="flex items-center gap-3">

                    <BriefcaseBusiness
                        size={34}
                        className="text-blue-600"
                    />

                    <div>

                        <h1 className="text-2xl font-bold">

                            Career Copilot

                        </h1>

                        <p className="text-sm text-gray-500">

                            AI Backend Career Mentor

                        </p>

                    </div>

                </div>

            </div>

        </header>
    );
}