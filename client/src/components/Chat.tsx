

const Chat = () => {
    return (
        <div className=" w-full relative">

            <div>
                <div className=" flex justify-between items-center px-4 py-2 border-b border-b-slate-300">
                    <div className=" flex items-center space-x-4">
                        <img className=" h-12 w-12 rounded-full object-cover" src="https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" alt="Jhon" />
                        <div>
                            <div className=" font-semibold">Mohammed Askar</div>
                            <div className=" font-light">Online</div>
                        </div>
                    </div>
                    <div className=" hover:bg-slate-200 hover:bg-opacity-20 cursor-pointer rounded-full p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path><path fill="currentColor" d="M12 17a2 2 0 1 1 0 4a2 2 0 0 1 0-4m0-7a2 2 0 1 1 0 4a2 2 0 0 1 0-4m0-7a2 2 0 1 1 0 4a2 2 0 0 1 0-4"></path></g></svg>
                    </div>
                </div>
            </div>

            <div>
                <div ref={scrollContainerRef} className=" overflow-auto scroll-smooth h-[477px] px-4" id="chat-container" style={{ scrollbarWidth: "none" }}>

                    <div className={`flex ${isUser ? "justify-end" : "justify-start"} my-2`}>
                        <div className={`max-w-xs space-y-1 px-2 py-2 rounded-tr-2xl rounded-bl-2xl rounded-t-2xl ${isUser ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"}`}>
                            <div className=" text-sm capitalize">  <span> {message}</span></div>
                            <div className={` text-xs font-light ${isUser ? "text-end" : " text-start"}`}> <span>25/01/20 12:30 pm</span></div>
                        </div>
                    </div>
                    <div className={`flex ${!isUser ? "justify-end" : "justify-start"} my-2`}>
                        <div className={`max-w-xs space-y-1 px-2 py-2 rounded-tr-2xl rounded-bl-2xl rounded-t-2xl ${!isUser ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"}`}>
                            <div className=" text-sm capitalize">  <span> {message}</span></div>
                            <div className={` text-xs font-light ${!isUser ? "text-end" : " text-start"}`}> <span>25/01/20 12:30 pm</span></div>
                        </div>
                    </div>
                    <div className={`flex ${isUser ? "justify-end" : "justify-start"} my-2`}>
                        <div className={`max-w-xs space-y-1 px-2 py-2 rounded-tr-2xl rounded-bl-2xl rounded-t-2xl ${isUser ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"}`}>
                            <div className=" text-sm capitalize">  <span> {message}</span></div>
                            <div className={` text-xs font-light ${isUser ? "text-end" : " text-start"}`}> <span>25/01/20 12:30 pm</span></div>
                        </div>
                    </div>
                    <div className={`flex ${!isUser ? "justify-end" : "justify-start"} my-2`}>
                        <div className={`max-w-xs space-y-1 px-2 py-2 rounded-tr-2xl rounded-bl-2xl rounded-t-2xl ${!isUser ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"}`}>
                            <div className=" text-sm capitalize">  <span> {message}</span></div>
                            <div className={` text-xs font-light ${!isUser ? "text-end" : " text-start"}`}> <span>25/01/20 12:30 pm</span></div>
                        </div>
                    </div>
                    <div className={`flex ${isUser ? "justify-end" : "justify-start"} my-2`}>
                        <div className={`max-w-xs space-y-1 px-2 py-2 rounded-tr-2xl rounded-bl-2xl rounded-t-2xl ${isUser ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"}`}>
                            <div className=" text-sm capitalize">  <span> {message}</span></div>
                            <div className={` text-xs font-light ${isUser ? "text-end" : " text-start"}`}> <span>25/01/20 12:30 pm</span></div>
                        </div>
                    </div>
                    <div className={`flex ${isUser ? "justify-end" : "justify-start"} my-2`}>
                        <div className={`max-w-xs space-y-1 px-2 py-2 rounded-tr-2xl rounded-bl-2xl rounded-t-2xl ${isUser ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"}`}>
                            <div className=" text-sm capitalize">  <span> {message}</span></div>
                            <div className={` text-xs font-light ${isUser ? "text-end" : " text-start"}`}> <span>25/01/20 12:30 pm</span></div>
                        </div>
                    </div>
                    <div className={`flex ${!isUser ? "justify-end" : "justify-start"} my-2`}>
                        <div className={`max-w-xs space-y-1 px-2 py-2 rounded-tr-2xl rounded-bl-2xl rounded-t-2xl ${!isUser ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"}`}>
                            <div className=" text-sm capitalize">  <span> {message}</span></div>
                            <div className={` text-xs font-light ${!isUser ? "text-end" : " text-start"}`}> <span>25/01/20 12:30 pm</span></div>
                        </div>
                    </div>
                    <div className={`flex ${isUser ? "justify-end" : "justify-start"} my-2`}>
                        <div className={`max-w-xs space-y-1 px-2 py-2 rounded-tr-2xl rounded-bl-2xl rounded-t-2xl ${isUser ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"}`}>
                            <div className=" text-sm capitalize">  <span> {message}</span></div>
                            <div className={` text-xs font-light ${isUser ? "text-end" : " text-start"}`}> <span>25/01/20 12:30 pm</span></div>
                        </div>
                    </div>
                    <div className={`flex ${!isUser ? "justify-end" : "justify-start"} my-2`}>
                        <div className={`max-w-xs space-y-1 px-2 py-2 rounded-tr-2xl rounded-bl-2xl rounded-t-2xl ${!isUser ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"}`}>
                            <div className=" text-sm capitalize">  <span> {message}</span></div>
                            <div className={` text-xs font-light ${!isUser ? "text-end" : " text-start"}`}> <span>25/01/20 12:30 pm</span></div>
                        </div>
                    </div>

                </div>
                {!hiden &&
                    <span onClick={scrollToTop} className=" bg-slate-100 rotate-180 cursor-pointer hover:bg-opacity-50 rounded-full p-2 text-black absolute bottom-20 right-10 ">
                        <svg className="
            animate-pulse" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="m11 8.8l-2.9 2.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.6-4.6q.3-.3.7-.3t.7.3l4.6 4.6q.275.275.275.7t-.275.7t-.7.275t-.7-.275L13 8.8V17q0 .425-.288.713T12 18t-.712-.288T11 17z"></path></svg>
                    </span>
                }
            </div>
            <div className=" flex px-4 space-x-3 absolute w-full bottom-4">
                <input className=" p-2 rounded-xl w-full outline-none bg-slate-100 bg-opacity-50 text-slate-800 placeholder:text-slate-800" type="text" placeholder=" Message" />
                <svg className=" p-1 rounded-full bg-emerald-400 hover:bg-emerald-500 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m14 10l-3 3m9.288-9.969a.535.535 0 0 1 .68.681l-5.924 16.93a.535.535 0 0 1-.994.04l-3.219-7.242a.54.54 0 0 0-.271-.271l-7.242-3.22a.535.535 0 0 1 .04-.993z"></path></svg>
            </div>

        </div>
    )
}

export default Chat