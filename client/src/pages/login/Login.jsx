

const Login = () => {
    return (
        <>
            <div className=" flex flex-col items-center justify-center mx-auto min-w-[450px]">
                <div className=" w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                    <h1 className="text-3xl font-semibold text-center text-gray-300 ">
                        Login
                        <span className="text-blue-500">ChatApp</span>
                    </h1>

                    <form>
                        <div>
                            <label className="label p-2">
                                <span className="text-base label-text">Username</span>
                            </label>
                            <input type="text" placeholder="Enter username" className="w-full input input-bordered " />
                        </div>
                        <div>
                            <label className="label p-2">
                                <span className="text-base label-text">Password</span>
                            </label>
                            <input type="Enter password" placeholder="Password" className="w-full input input-bordered " />
                        </div>
                        <a href="#" className="text-sm hover:underline hover:text-blue-500 mt-3 inline-block"> Don&apos;t have an account ?</a>
                        <button className="btn btn-block btn-sm mt-3">Login</button>
                    </form>

                </div>
            </div>
        </>
    )
}

export default Login