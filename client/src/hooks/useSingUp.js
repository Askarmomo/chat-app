import { useState } from "react"
import toast from "react-hot-toast"
import { useAuthContext } from "../context/AuthContext"


const useSingUp = () => {
    const [loading, setLoading] = useState(false)
    const { setAuthUser } = useAuthContext()

    const singup = async ({ fullName, username, password, confirmPassword, gender }) => {
        const success = handleInputErrors({ fullName, username, password, confirmPassword, gender })
        if (!success) return;
        setLoading(true)

        try {

            const res = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ fullName, username, password, confirmPassword, gender })
            })

            const data = await res.json()

            if (data.error) {
                throw new Error(data.error)
            }
            console.log(data);
            //set the user to localstorage
            localStorage.setItem('chat-user', JSON.stringify(data))
            // context
            setAuthUser(data)

        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    }

    return { loading, singup }

}

export default useSingUp

function handleInputErrors({ fullName, username, password, confirmPassword, gender }) {

    if (!fullName || !username || !password || !confirmPassword || !gender) {
        toast.error('Please fill in all the fields')
        return false
    }

    if (password !== confirmPassword) {
        toast.error('password do not match')
        return false
    }

    if (password.length < 6) {
        toast.error('password must be 6 characters')
        return false
    }
    return true
}