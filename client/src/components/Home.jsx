
import { useEffect, useRef } from "react"
import SideBar from "./SideBar"
import AuthStore from "../Store/AuthStrore"
import MessageStore from "../Store/MessageStore"
import { formateTime } from "../middlewares/TimeFormater"
import SocketStore from "../Store/Socket.io.Store"



const Home = () => {

    const { user } = AuthStore()
    const { sendMessage, message, messages, setMessage, reciverUserData } = MessageStore()
    const { onlineUsers } = SocketStore()




    const scrollContainerRef = useRef(null);

    useEffect(() => {

        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
        }
    }, [messages])

    return (
        <div >
            <div className=" flex backdrop-blur-xl min-h-screen h-[599px]">
                <SideBar />

                {
                    reciverUserData ? <div className=" w-full relative">

                        <div>
                            <div className=" flex justify-between items-center px-4 py-2 border-b border-b-slate-300">
                                <div className=" flex items-center space-x-4">
                                    <img className=" h-12 w-12 rounded-full object-cover bg-white" src={reciverUserData?.profilePic} alt={reciverUserData?.username} />
                                    <div>
                                        <div className=" font-semibold">{reciverUserData?.username}</div>
                                        <div className=" font-light">{onlineUsers.includes(reciverUserData._id) ? 'Online' :'Ofline'}</div>
                                    </div>
                                </div>
                                <div className=" hover:bg-slate-200 hover:bg-opacity-20 cursor-pointer rounded-full p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path><path fill="currentColor" d="M12 17a2 2 0 1 1 0 4a2 2 0 0 1 0-4m0-7a2 2 0 1 1 0 4a2 2 0 0 1 0-4m0-7a2 2 0 1 1 0 4a2 2 0 0 1 0-4"></path></g></svg>
                                </div>
                            </div>
                        </div>

                        {/* message */}
                        <div>
                            <div ref={scrollContainerRef} className=" overflow-auto h-[477px] px-4" id="chat-container" style={{ scrollbarWidth: "none" }}>

                                {messages.length != 0 ? messages.map((everyMessage) => (

                                    <div key={everyMessage._id} className={`flex ${everyMessage.senderId == user._id ? "justify-end" : "justify-start"} my-2`}>
                                        <div className={`max-w-xs space-y-1 px-2 py-2 rounded-tr-2xl rounded-bl-2xl rounded-t-2xl ${everyMessage.senderId == user._id ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"}`}>
                                            <div className=" text-sm capitalize">  <span> {everyMessage.message}</span></div>
                                            <div className={` text-xs font-light ${everyMessage.senderId == user._id ? "text-end" : " text-start"}`}> <span>{formateTime(everyMessage.createdAt)}</span></div>
                                        </div>
                                    </div>
                                ))
                                    :
                                    <div className=" text-xl font-semibold text-center w-full pt-[250px]">
                                        Send a message
                                    </div>
                                }
                            </div>

                        </div>

                        <div className=" flex px-4 space-x-3 absolute w-full bottom-4">
                            <input value={message} onChange={(e) => setMessage(e.target.value)} className=" p-2 rounded-xl w-full outline-none bg-slate-100 bg-opacity-50 text-slate-800 placeholder:text-slate-800" type="text" placeholder=" Message" />
                            <svg onClick={() => { sendMessage(message); setMessage('') }} className=" p-1 rounded-full bg-emerald-400 hover:bg-emerald-500 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m14 10l-3 3m9.288-9.969a.535.535 0 0 1 .68.681l-5.924 16.93a.535.535 0 0 1-.994.04l-3.219-7.242a.54.54 0 0 0-.271-.271l-7.242-3.22a.535.535 0 0 1 .04-.993z"></path></svg>
                        </div>

                    </div>
                        :
                        <div className=" text-xl font-semibold text-center w-full pt-[300px]">
                            Select Some One To Message
                        </div>
                }
            </div>
        </div>
    )
}

export default Home