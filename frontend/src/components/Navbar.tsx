export default function Navbar(){

    return(

        <nav
            className="h-16 border-b bg-white
            flex items-center justify-between
            px-8"
        >

            <div>

                <h1 className="text-xl font-bold">

                    Career Copilot

                </h1>

                <p className="text-xs text-gray-500">

                    LangGraph • FastAPI • React

                </p>

            </div>

        </nav>

    );

}