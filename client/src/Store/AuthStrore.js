

import { create } from "zustand"
import toast from "react-hot-toast"
import api from "../middlewares/Axios"


const AuthStore = create((set, get) => ({

    user: null,
    isFetched: false,
    allUser: [],
    setReciverId: (reciverId) => set({ reciverId: reciverId }),
    singup: async ({ username, password, profilePic }) => {

        if (username, password) {
            username.trim()
            password.trim()
        }
        
        try {
            const res = await api.post(`/api/auth/singup`, {
                username: username,
                password: password,
                profilePic: profilePic
            })
            const data = await res.data
            if (data) {
                set({ user: data })
                toast.success('Account created successfully')
            }
        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.error)
            }
        }

    },
    login: async (username, password) => {

        if (username, password) {
            username.trim()
            password.trim()
        }

        try {
            const res = await api.post(`/api/auth/login`, {
                username: username,
                password: password,
            })
            const data = await res.data
            if (data) {
                set({ user: data })
                toast.success('Login successfully')
            }
            // location.reload()
        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.error)
            }
        }

    },
    userProfile: async () => {
        if (get().isFetch) return
        try {
            const res = await api.get(`/api/auth/userprofile`)
            const data = await res.data

            if (data) {
                set({ user: data, isFetched: true })
            }

        } catch (error) {
            if (error.response) {
                console.log(error.response.data.error)
            }
        }
    },
    getAllUsers: async () => {
        try {
            const res = await api.get(`/api/auth/alluser`)
            const data = await res.data
            if (data) {
                set({ allUser: data })
            }
        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.error)
            }
        }
    },
    logout: async () => {

        try {
            const res = await api.post('/api/auth/logout')
            const data = await res.data
            if (data) {
                set({ user: null })
            }
            location.reload()
        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.error)
            }
        }
    }

}))

export default AuthStore;