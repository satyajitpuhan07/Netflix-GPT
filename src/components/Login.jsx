import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from "../utils/Validate";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BgImg } from '../utils/constants';

const Login = () => {


  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null)
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () =>{
    //validate the form data ;
    
    const message = checkValidData(
      email.current.value,
      password.current.value,
      isSignInForm ? null : name.current.value);
    setErrorMessage(message);
    if(message) return;

    //SignIn or SignUp
    if(!isSignInForm){
      //SignUp Logic
      createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
        .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name.current.value
            }).then(() => {
              const {uid, email, displayName} = auth.currentUser;
                  dispatch(addUser({uid: uid, email: email, displayName: displayName}));
            }).catch((error) => {
              setErrorMessage(error.message)
            });
      })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode+'-'+errorMessage);
      });
    }
    else{
      //SignIn Logic
      signInWithEmailAndPassword(auth,email.current.value,password.current.value)
        .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
      })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode+ "-" + errorMessage)
      });
    }

  }

  const toggleSignInForm =() =>{
    setIsSignInForm(!isSignInForm)
  }
  return (
    <div>
        <Header/>
        <div className='absolute'>
          <img src={BgImg} alt="bg-img" />
        </div>

          <form onSubmit={(e)=>e.preventDefault()} className='w-4/12 absolute p-10 my-30 mx-auto left-0 right-0 text-white rounded-lg bg-black/70'>

          <h1 className='font-bold text-4xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>

          {!isSignInForm && (<input ref={name} type="text" placeholder='Full Name' className='bg-gray-600 text-white p-4 my-3 w-full'/>)}

          <input ref={email} type="text" placeholder='Email Address' className='bg-gray-600  p-4 my-3 w-full'/>

          <input ref={password} type="password" placeholder='password' className='bg-gray-600  p-4 my-3 mt-3 w-full '/>

          <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>

          <button className='cursor-pointer p-3 my-4 mt-4 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>

          <p className='cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already regitered Sign In Now"}</p>

        </form>
    </div>
  )
}

export default Login