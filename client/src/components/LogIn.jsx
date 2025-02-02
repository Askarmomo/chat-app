import { useState } from "react"
import { Link } from "react-router-dom"
import AuthStore from "../Store/AuthStrore"


const LogIn = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const { login } = AuthStore()

    return (
        <div>
            <section>
                <div className="flex  pt-[270px] sm:pt-20 flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full backdrop-blur-xl rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Login to your account
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label htmlFor="Username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Username</label>
                                    <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" name="Username" id="Username" className="bg-gray-50 border border-gray-300  rounded-lg  outline-none block w-full p-2.5 bg-transparent placeholder:text-slate-200 text-white" placeholder="Ex : mohammed" required="" />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300  rounded-lg  outline-none placeholder:text-slate-200 block w-full p-2.5 bg-transparent text-white" required="" />
                                </div>

                                <button onClick={(e) => { login(username, password); e.preventDefault() }} className="w-full p-2 rounded bg-blue-500 hover:bg-blue-600 transition duration-200 ease-in-out text-white">Login</button>
                                <p className="text-sm font-light">
                                    Don’t have an account yet? <Link to="/singup" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default LogIn