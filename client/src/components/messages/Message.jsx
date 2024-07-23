

import { useAuthContext } from '../../context/AuthContext'
import { exctractTime } from '../../utils/time';
import useConversation from '../../Zustand/useCoversation';


function Message({ message }) {
    const formatedTime = exctractTime(message.createdAt)
    const { authUser } = useAuthContext()
    const { selectedConversation } = useConversation()
    const fromMe = message.senderId === authUser._id
    const chatClassName = fromMe ? 'chat-end' : 'chat-start';
    const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
    const bubbleColor = fromMe ? 'bg-blue-500' : ""

    return (
        <div className={`chat ${chatClassName}`}>
            <div className=" chat-image avatar ">
                <div className=" w-10 rounded-full">
                    <img src={profilePic} alt="user avatar" />
                </div>
            </div>
            <div className={` chat-bubble text-white ${bubbleColor} pb-1`}> {message.message} </div>
            <div className=" chat-footer opacity-50 text-xs flex gap-1 items-center">{formatedTime}</div>
        </div>
    )
}

export default Message