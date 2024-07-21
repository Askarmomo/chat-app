import MessageCointainer from "../../components/messages/MessageCointainer"
import SideBar from "../../components/sidebar/SideBar"


function Home() {
    return (
        <>
            <div className=" flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                <SideBar />
                <MessageCointainer />
            </div>
        </>
    )
}

export default Home