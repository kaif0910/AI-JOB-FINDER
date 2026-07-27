import { Menu, Sparkles } from "lucide-react";

interface Props {
    onMenuClick: () => void;
    children?: React.ReactNode;
}

export default function Navbar({
    onMenuClick,
    children,
}: Props) {
    return (
        <header
            className="
                sticky
                top-0
                z-20
                h-16
                border-b
                border-gray-200
                bg-white/90
                backdrop-blur-md
                px-4
                md:px-8
            "
        >
            <div className="flex h-full items-center justify-between">

                {/* Left */}

                <div className="flex items-center gap-3">

                    <button
                        onClick={onMenuClick}
                        className="
                            md:hidden
                            rounded-lg
                            p-2
                            hover:bg-gray-100
                        "
                    >
                        <Menu size={22} />
                    </button>

                    <div
                        className="
                            h-10
                            w-10
                            rounded-xl
                            bg-blue-600
                            flex
                            items-center
                            justify-center
                            text-white
                            shadow-md
                        "
                    >
                        <Sparkles size={20} />
                    </div>

                    <div>

                        <h1 className="font-bold text-lg md:text-xl">

                            Career Copilot

                        </h1>

                        <p className="hidden sm:block text-xs text-gray-500">

                            AI Career Assistant

                        </p>

                    </div>

                </div>

                {/* Right */}

                <div className="flex items-center gap-3">

                    {children}

                </div>

            </div>
        </header>
    );
}