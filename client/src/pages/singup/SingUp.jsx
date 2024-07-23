import { Link } from "react-router-dom"
import GenderChexkBox from "./GenderChexkBox"
import { useState } from "react"
import useSingUp from "../../hooks/useSingUp"


function SingUp() {

    const [inputs, setInputs] = useState({
        fullName: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: ''
    })

    const { loading, singup } = useSingUp()

    const handleCheckBoxChange = (gender) => {
        setInputs({ ...inputs, gender: gender })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await singup(inputs)
    }


    return (
        <div className=" flex flex-col items-center justify-center mx-auto min-w-[450px]">
            <div className=" w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                <h1 className=" text-3xl font-semibold text-center text-gray-300">
                    SingUp <span className="text-blue-500">ChatApp</span>
                </h1>

                <form onSubmit={handleSubmit}>

                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Full name</span>
                        </label>
                        <input type="text" placeholder="Mohammed Askar" className="w-full input input-bordered "
                            value={inputs.fullName}
                            onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Username</span>
                        </label>
                        <input type="text" placeholder="Mohammedaskar" className="w-full input input-bordered "
                            value={inputs.username}
                            onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Enter password" className="w-full input input-bordered "
                            value={inputs.password}
                            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Confirm password</span>
                        </label>
                        <input type="password" placeholder="Enter confirm password" className="w-full input input-bordered "
                            value={inputs.confirmPassword}
                            onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
                        />
                    </div>
                    {/* gender check box here */}
                    <GenderChexkBox onheckBoxChange={handleCheckBoxChange} selectedGender={inputs.gender} />
                    <Link to={'/login'} className="text-sm hover:underline hover:text-blue-500 mt-3 inline-block"> Already have an account ?</Link>
                    <div>
                        <button disabled={loading} className="btn btn-block btn-sm mt-3">{loading ? <span className=" loading loading-spinner"></span> : 'Sing Up'}</button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default SingUp