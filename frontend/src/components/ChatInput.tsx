import { useState } from "react";

interface Props{

    onSend:(message:string)=>void;

    loading:boolean;

}

export default function ChatInput({

    onSend,

    loading

}:Props){

    const [message,setMessage]=useState("");

    function handleSubmit(){

        if(!message.trim()) return;

        onSend(message);

        setMessage("");

    }

    return(

        <div className="border-t bg-white p-5">

            <div className="flex gap-4">

                <input

                    value={message}

                    onChange={e=>setMessage(e.target.value)}

                    onKeyDown={e=>{

                        if(e.key==="Enter"){

                            handleSubmit();

                        }

                    }}

                    placeholder="Ask anything..."

                    className="flex-1 rounded-lg border px-4 py-3 outline-none"

                />

                <button

                    onClick={handleSubmit}

                    disabled={loading}

                    className="rounded-lg bg-blue-600 px-6 text-white"

                >

                    Send

                </button>

            </div>

        </div>

    );

}