import { useState } from "react";
import { Menu } from "lucide-react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import UploadResume from "../components/UploadResume";
import ChatWindow from "../components/ChatWindow";
import ChatInput from "../components/ChatInput";

import { useCareerCopilot } from "../hooks/useCareerCopilot";

export default function Home() {

    const [mobileOpen, setMobileOpen] = useState(false);

    const {
        messages,
        loading,
        conversations,
        activeConversation,
        sendMessage,
        newConversation,
        openConversation,
        removeConversation,
    } = useCareerCopilot();

    return (
        <div className="flex h-screen bg-gray-50 overflow-hidden">

            <Sidebar
                conversations={conversations}
                activeConversation={activeConversation}
                onSelect={openConversation}
                onNew={newConversation}
                onDelete={removeConversation}
                mobileOpen={mobileOpen}
                setMobileOpen={setMobileOpen}
            />

            <div className="flex flex-1 flex-col min-w-0">

                {/* Mobile Header */}

                <div className="md:hidden flex items-center gap-4 border-b bg-white px-4 py-3">

                    <button
                        onClick={() =>
                            setMobileOpen(true)
                        }
                    >
                        <Menu size={26} />
                    </button>

                    <h1 className="font-bold text-lg">
                        Career Copilot
                    </h1>

                </div>

                {/* Desktop Navbar */}

                <div className="hidden md:block">
                    <Navbar />
                </div>

                <div className="flex justify-center py-4 shrink-0 px-4">
                    <UploadResume />
                </div>

                <div className="flex-1 min-h-0">
                    <ChatWindow
                        messages={messages}
                        loading={loading}
                    />
                </div>

                <div className="shrink-0 px-2 pb-2">
                    <ChatInput
                        loading={loading}
                        onSend={sendMessage}
                    />
                </div>

            </div>

        </div>
    );
}