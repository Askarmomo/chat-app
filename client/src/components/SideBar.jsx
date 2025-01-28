import AuthStore from "../Store/AuthStrore"
import MessageStore from "../Store/MessageStore"
import SocketStore from "../Store/Socket.io.Store"


const SideBar = () => {

    const { allUser, user } = AuthStore()
    const { setReciverId, getReciverUserData, messages } = MessageStore()
    const { onlineUsers } = SocketStore()

    const lastMessage = messages.pop()
    console.log(lastMessage);


    return (
        <div className=" basis-[400px] border-r border-r-slate-300 overflow-auto" style={{ scrollbarWidth: "none" }}>

            <div className=" flex items-center justify-between py-2 px-2 border-b border-b-slate-300">
                <div className=" flex items-center space-x-3">
                    <img className=" h-11 w-11 rounded-full object-cover bg-white" src={user.profilePic} alt={user.username} />
                    <div>
                        <div>
                            <span className=" font-semibold">{user.username}</span>
                        </div>
                        <div>
                            <span className=" font-light text-sm">Work</span>
                        </div>
                    </div>
                </div>

                <div className=" hover:bg-slate-200 hover:bg-opacity-20 cursor-pointer rounded-full p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path><path fill="currentColor" d="M12 17a2 2 0 1 1 0 4a2 2 0 0 1 0-4m0-7a2 2 0 1 1 0 4a2 2 0 0 1 0-4m0-7a2 2 0 1 1 0 4a2 2 0 0 1 0-4"></path></g></svg>
                </div>
            </div>

            <div >
                {
                    allUser.map((everyUser) => (
                        <div onClick={() => { setReciverId(everyUser._id); getReciverUserData() }} key={everyUser.username} className={" flex items-center active:bg-slate-400 space-x-2 px-2 py-3 w-full border-b hover:bg-slate-50 hover:bg-opacity-10 cursor-pointer border-b-slate-400"}>
                            <div className=" w-fit relative">
                                <img className=" rounded-full bg-white w-14 h-11 object-cover object-center" src={user.profilePic} alt={user.username} />
                                <div className={` absolute bottom-1 right-1 p-1 rounded-full ${onlineUsers.includes(everyUser._id) ? "bg-teal-500" : "bg-slate-500"} h-[5px] w-[5px]`}></div>
                            </div>
                            <div className=" flex items-center justify-between w-full">
                                <div>
                                    <div>{everyUser.username}</div>
                                </div>
                                <div className=" font-light">
                                    25/01/16
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div >
    )
}

export default SideBar