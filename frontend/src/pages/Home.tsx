import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import UploadResume from "../components/UploadResume";
import ChatWindow from "../components/ChatWindow";
import ChatInput from "../components/ChatInput";

import { useChat } from "../hooks/useChat";
import { useConversation } from "../hooks/useConversation";

export default function Home() {

    const {
        messages,
        loading,
        sendMessage
    } = useChat();

    const {
        conversations,
        activeConversation,
        setActiveConversation,
        newConversation
    } = useConversation();

    return (

        <div className="flex h-screen bg-gray-50">

            {/* Sidebar */}

            <Sidebar
                conversations={conversations}
                activeConversation={activeConversation}
                onSelect={setActiveConversation}
                onNew={newConversation}
            />

            {/* Right Side */}

            <div className="flex flex-1 flex-col">

                <Navbar />

                <div className="flex justify-center py-5">

                    <UploadResume />

                </div>

                <div className="flex-1 overflow-hidden">

                    <ChatWindow
                        messages={messages}
                        loading={loading}
                    />

                </div>

                <ChatInput
                    loading={loading}
                    onSend={(message) =>
                        sendMessage(
                            message,
                            activeConversation
                        )
                    }
                />

            </div>

        </div>

    );

}