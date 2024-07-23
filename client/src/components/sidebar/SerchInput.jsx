import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../Zustand/useCoversation";
import useGetConversation from "../../hooks/useGetConversation";
import toast from "react-hot-toast";

function SerchInput() {
    const [search, setSearch] = useState('')
    const { setSelectedConversation } = useConversation()
    const { conversation } = useGetConversation()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!search) return;
        if (search.length < 3) {
            return toast.error('serch must be 3 cheractr above')
        }
        const conversations = conversation.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));

        if (conversations) {
            setSelectedConversation(conversations)
            setSearch('')
        } else toast.error('User not avilable')
    }



    return (
        <form onSubmit={handleSubmit} className=" flex items-center gap-2">
            <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search..." className=" input input-bordered rounded-full" />
            <button type="submit" className=" btn btn-circle bg-sky-500 text-white">
                <IoSearchSharp className=" text-xl" />
            </button>
        </form>

    )
}

export default SerchInput