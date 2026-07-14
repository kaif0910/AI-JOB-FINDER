import Navbar from "../components/Navbar";

export default function Home() {

    return (

        <>

            <Navbar />

            <main className="max-w-6xl mx-auto py-10 px-6">

                <div className="bg-white rounded-xl shadow p-8">

                    <h2 className="text-6xl font-bold text-red-500">

                        Welcome 👋

                    </h2>

                    <p className="text-gray-600 mt-3">

                        Ask anything about your resume and backend career.

                    </p>

                </div>

            </main>

        </>

    );

}