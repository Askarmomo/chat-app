import { BiLogOut } from 'react-icons/bi'
import useLogOut from '../../hooks/useLogOut'

function LogOutButton() {
    const { loading, logout } = useLogOut()
    return (
        <div className=' mt-auto'>
            {
                !loading ?
                    <BiLogOut onClick={logout} className=' w-6 h-6 text-white cursor-pointer' />
                    : <span className=' loading loading-spinner'></span>
            }
        </div>
    )
}

export default LogOutButton