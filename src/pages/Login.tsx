import { auth, provider } from '../config/firebase' 
import {signInWithPopup} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'

const Login = () => {

    const navigate = useNavigate()

    const authentication = async () => {
        const result = await signInWithPopup(auth, provider);
        console.log(result)
        navigate("/")
        // The signed-in user info.
        //const user = result.user;
        // This gives you a Facebook Access Token.
        //const credential = provider.credentialFromResult(auth, result);
        //const token = credential.accessToken;
    }


    

  return (
    <div>
        <p>Sign in with Google</p><br />
        <Button text="Sign in" function={authentication}/>
      
    </div>
  )
}

export default Login