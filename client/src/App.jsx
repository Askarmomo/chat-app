import Home from "./components/Home"
import LogIn from "./components/LogIn"
import SingUp from "./components/SingUp"
import { Navigate, Route, Routes } from "react-router-dom"
import img from '../public/images/urban-vintage-78A265wPiO4-unsplash.jpg'
import AuthStore from "./Store/AuthStrore"
import { Toaster } from "react-hot-toast"
import { useEffect } from "react"
import MessageStore from "./Store/MessageStore"
import SocketStrore from "./Store/Socket.io.Store"

const App = () => {

  const { user, userProfile, isFetched, getAllUsers } = AuthStore()
  const { fetchMessages, reciverId, isFetchedMessage } = MessageStore()
  const { connectSocket } = SocketStrore()

  useEffect(() => {
    if (!isFetched) {
      userProfile()
    }
  }, [isFetched, userProfile])

  useEffect(() => {
    if (!isFetchedMessage && user) {
      getAllUsers()
    }
  }, [isFetchedMessage, getAllUsers, user])

  useEffect(() => {
    fetchMessages()
  }, [fetchMessages, reciverId])

  useEffect(() => {
    if (user) {
      connectSocket(user._id)
    }
  }, [user,connectSocket])





  return (
    <>
      <div className="min-h-screen bg-cover bg-center text-white " style={{ backgroundImage: `url('${img}')` }} >
        <Routes>
          <Route path="/" element={user ? <Home /> : <Navigate to={'/login'} />} />
          <Route path="/singup" element={user ? <Navigate to={'/'} /> : <SingUp />} />
          <Route path="/login" element={user ? <Navigate to={'/'} /> : <LogIn />} />
        </Routes>
      </div >
      <Toaster />
    </>
  )
}

export default App