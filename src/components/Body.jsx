import React, { useEffect } from 'react'
import Browse from './Browse'
import Login from './Login'
import { Route, Routes } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/Firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Body = () => {
  const dispatch = useDispatch()

  useEffect(()=>{
  onAuthStateChanged(auth, (user) => { 
  if (user) {
    const {uid, email, displayName} = user;
    dispatch(addUser({uid: uid, email: email, displayName: displayName}));
  } else {
    dispatch(removeUser())
  }
});
  },[])
  return (
    <div>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/browse" element={<Browse/>}/>
        </Routes>
    </div>
  )
}

export default Body