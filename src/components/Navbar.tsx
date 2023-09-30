import { Link } from "react-router-dom"
import { auth } from '../config/firebase'
import { useAuthState } from "react-firebase-hooks/auth"

const Navbar = () => {

    const [user] = useAuthState(auth)


  return (
    <div className="space-x-56 p-4 bg-indigo-600 rounded-lg shadow-2xl mb-6">
        <Link to="/" className="text-sky-400 hover:text-sky-200">Home</Link>
        {user ? <Link to="/post" className="text-sky-400 hover:text-sky-200">Post</Link> : <Link to="/login" className="text-sky-400 hover:text-sky-200">Login</Link>}
    </div>
  )
}

export default Navbar