import Conversations from "./Conversations"
import LogOutButton from "./LogOutButton"
import SerchInput from "./SerchInput"


const SideBar = () => {
    return (
        <div className=" border-r border-slate-500 p-4 flex flex-col">
            <SerchInput />
            <div className=" divider px-3"></div>
            <Conversations />
            <LogOutButton />
        </div>
    )
}

export default SideBar