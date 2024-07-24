import { useEffect, useRef } from "react";
import usegetMessages from "../../hooks/usegetMessages"
import MessageSkeleton from "../../scalitens/MessageSkeliten";
import Message from "./Message"
import useListenMessages from "../../hooks/useListenMessages";


function Messages() {
    const { loading, messages } = usegetMessages()
    useListenMessages()
    const lastMessageRef = useRef()

    useEffect(() => {
        setTimeout(() => {
            lastMessageRef.current?.scrollIntoView({ behavier: 'smooth' })
        })
    }, [messages])

    return (
        <div className=" px-4 flex-1 overflow-auto ">
            {!loading && messages.length > 0 && messages.map((message) => (

                <div key={message._id} ref={lastMessageRef}>
                    <Message message={message} />
                </div>

            ))}
            {loading && <MessageSkeleton />}
            {!loading && messages.length === 0 && (<p className=" text-center text-xs text-black opacity-70 font-semibold bg-zinc-300 bg-opacity-50 mt-1 underline rounded-full p-1">Send a message to start the conversation</p>)}

        </div>
    )
}

export default Messages;