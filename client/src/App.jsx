import { Navigate, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import SingUp from "./pages/singup/SingUp"
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from "./context/AuthContext"

function App() {
  const { authUser } = useAuthContext()
  return (
    <>
      <div className="p-4 min-h-screen flex items-center justify-center">
        <Routes>
          <Route path="/" element={authUser ? <Home /> : <Navigate to='/login' />} />
          <Route path="/login" element={authUser ? <Navigate to='/' /> : <Login />} />
          <Route path="/singup" element={authUser ? <Navigate to='/' /> : <SingUp />} />
        </Routes>
        <Toaster />
      </div>
    </>
  )
}

export default App
