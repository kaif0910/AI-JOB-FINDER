import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import UploadResume from "../components/UploadResume";
import ChatWindow from "../components/ChatWindow";
import ChatInput from "../components/ChatInput";

// import { useChat } from "../hooks/useChat";
// import { useConversation } from "../hooks/useConversation";

import { useCareerCopilot } from "../hooks/useCareerCopilot";

export default function Home() {

    // const {
    //     messages,
    //     loading,
    //     sendMessage
    // } = useChat();

    // const {
    //     conversations,
    //     activeConversation,
    //     setActiveConversation,
    //     newConversation
    // } = useConversation();

    const {
        messages,
        loading,
        conversations,
        activeConversation,
        sendMessage,
        newConversation,
        openConversation,
        removeConversation
    }=useCareerCopilot();

    return (

        <div className="flex h-screen overflow-hidden bg-gray-50">

            {/* Sidebar */}

            <Sidebar
                conversations={conversations}
                activeConversation={activeConversation}
                onSelect={openConversation}
                onNew={newConversation}
                onDelete={removeConversation}
            />

            {/* Right Side */}

            <div className="flex flex-1 flex-col h-screen overflow-hidden">

                <Navbar />

                <div className="flex justify-center py-5 shrink-0">

                    <UploadResume />

                </div>

                <div className="flex-1 min-h-0">

                    <ChatWindow
                        messages={messages}
                        loading={loading}
                    />

                </div>

                <div className="shrink-0">
                    <ChatInput
                        loading={loading}
                        onSend={sendMessage}
                />

                </div>

            </div>

        </div>

    );

}