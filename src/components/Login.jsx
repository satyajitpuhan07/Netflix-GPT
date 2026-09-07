import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true)
  const toggleSignInForm =()=>{
    setIsSignInForm(!isSignInForm)
  }
  return (
    <div>
        <Header/>
        <div className='absolute'>
          <img src="https://assets.nflxext.com/ffe/siteui/vlv3/ae999ff9-5858-4638-b0f2-8abcf9fb6a08/web/IN-en-20260831-TRIFECTA-perspective_8fd44dcf-63ea-4547-8e1e-e5fc7e03883d_small.jpg" alt="bg-img" />
        </div>
          <form className='w-4/12 absolute p-10 my-30 mx-auto left-0 right-0 text-white rounded-lg bg-black/70'>
          <h1 className='font-bold text-4xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
          {!isSignInForm && (<input type="text" placeholder='Full Name' className='bg-gray-600 text-white p-4 my-3 w-full'/>)}
          <input type="text" placeholder='Email Address' className='bg-gray-600 text-white p-4 my-3 w-full'/>
          <input type="password" placeholder='password' className='bg-gray-600 text-white p-4 my-3 mt-3 w-full '/>
          <button className='p-4 my-4 mt-4 bg-red-700 w-full rounded-lg'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
          <p className='cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already regitered Sign In Now"}</p>
        </form>
    </div>
  )
}

export default Login