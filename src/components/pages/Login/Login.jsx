import React from 'react'
import { Button } from '@material-ui/core';
import "./Login.css"
import { signInWithPopup ,signOut } from 'firebase/auth';
import {auth,GoogleProvider} from "../../../firebase"
import { useStateValue } from '../../../context/StateProvider';
import { actionTypes } from '../../../context/reducer';
import { Google } from '@mui/icons-material';
const Login = () => {
  const [state,dispatch] = useStateValue();

   const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };
    

     const signIn = async() =>{
        try {
        const result = await signInWithPopup(auth,GoogleProvider)
          dispatch({
            type : actionTypes.SET_USER,
            user:result.user,
          })
        } catch (error) {
          console.error(error)
        }
     }

  return (
    <> 
    <div className="backgroundImage"></div>
    <div className="login">
      <div className="login__container">
        <img
          src="https://seeklogo.com/images/T/twitter-square-black-and-white-logo-962E683117-seeklogo.com.png"
          alt=""
        />
        
        <h1>Sign In </h1>
        <Button onClick={signIn}><span> <Google style={{paddingRight: "5px",textAlign: "center" ,fontSize: "2.5rem"}} /></span>Sign In with Google</Button>
       
        
        
      </div>
       
    </div>
     
    </>
  )
}

export default Login