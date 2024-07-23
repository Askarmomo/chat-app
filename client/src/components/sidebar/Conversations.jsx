import useGetConversation from "../../hooks/useGetConversation"
import { getRandomEmoji } from "../../utils/emoji";
import Conversation from "./Conversation"


const Conversations = () => {

    const { loading, conversation } = useGetConversation()

    return (
        <div className=" py-2 flex flex-col overflow-auto">

            {conversation.map((oneConversation, index) => (

                <Conversation
                    key={oneConversation._id}
                    conversation={oneConversation}
                    emoji={getRandomEmoji()}
                    lastIndex={index === oneConversation.length - 1}
                />
            ))}

            {loading ? <span className=" loading loading-spinner"></span> : null}
        </div>
    )
}

export default Conversations