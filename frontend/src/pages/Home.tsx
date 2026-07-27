import { useState } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import UploadResume from "../components/UploadResume";
import ChatWindow from "../components/ChatWindow";
import ChatInput from "../components/ChatInput";

import { useCareerCopilot } from "../hooks/useCareerCopilot";

export default function Home() {

    const [sidebarOpen, setSidebarOpen] = useState(false);

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

        <div className="flex h-screen overflow-hidden bg-slate-100">

            <Sidebar
                conversations={conversations}
                activeConversation={activeConversation}
                onSelect={(id) => {
                    openConversation(id);
                    setSidebarOpen(false);
                }}
                onNew={() => {
                    newConversation();
                    setSidebarOpen(false);
                }}
                onDelete={removeConversation}
                mobileOpen={sidebarOpen}
                setMobileOpen={setSidebarOpen}
            />

            <div className="flex min-w-0 flex-1 flex-col overflow-hidden">

                <Navbar
                    onMenuClick={() =>
                        setSidebarOpen(true)
                    }
                >

                    <UploadResume />

                </Navbar>

                <main
                    className="
                        flex
                        flex-1
                        flex-col
                        overflow-hidden
                    "
                >

                    <div className="flex-1 overflow-hidden">

                        <ChatWindow
                            messages={messages}
                            loading={loading}
                        />

                    </div>

                    <ChatInput
                        loading={loading}
                        onSend={sendMessage}
                    />

                </main>

            </div>

        </div>

    );
}