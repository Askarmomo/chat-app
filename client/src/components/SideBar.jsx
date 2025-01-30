import AuthStore from "../Store/AuthStrore"
import MessageStore from "../Store/MessageStore"
import SocketStore from "../Store/Socket.io.Store"


const SideBar = () => {

    const { allUser, user, logout } = AuthStore()
    const { setReciverId, getReciverUserData } = MessageStore()
    const { onlineUsers } = SocketStore()


    const logoutFunc = async () => {
        await logout()
    }

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

                <div onClick={logoutFunc} className=" hover:bg-red-400 hover:bg-opacity-20 cursor-pointer rounded-full p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M9 20.75H6a2.64 2.64 0 0 1-2.75-2.53V5.78A2.64 2.64 0 0 1 6 3.25h3a.75.75 0 0 1 0 1.5H6a1.16 1.16 0 0 0-1.25 1v12.47a1.16 1.16 0 0 0 1.25 1h3a.75.75 0 0 1 0 1.5Zm7-4a.74.74 0 0 1-.53-.22a.75.75 0 0 1 0-1.06L18.94 12l-3.47-3.47a.75.75 0 1 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.74.74 0 0 1-.53.22"></path><path fill="currentColor" d="M20 12.75H9a.75.75 0 0 1 0-1.5h11a.75.75 0 0 1 0 1.5"></path></svg>
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