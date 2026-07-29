import type { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export default function Layout({
    children,
}: Props) {
    return (

        <div
            className="
                h-dvh
                overflow-hidden
                bg-slate-100
                text-gray-900
            "
        >

            {children}

        </div>

    );
}