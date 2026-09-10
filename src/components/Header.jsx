import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/Firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, USER_AVATAR } from '../utils/constants';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store)=> store.user)
  const handleSignOut = () =>{
    signOut(auth).then(() => {
     navigate("/")
    }).catch((error) => {
      navigate("/error")
    });
  }

    useEffect(()=>{
     const unsubscribe = onAuthStateChanged(auth, (user) => { 
     if (user) {
       const {uid, email, displayName} = user;
       dispatch(addUser({uid: uid, email: email, displayName: displayName}));
       navigate("/browse")
        } 
        else {
       dispatch(removeUser())
       navigate("/");
       }
      });

      //Unsubscribe when component unmount
      return ()=> unsubscribe();
      },[])

  return (
    <div className='absolute flex justify-between w-screen px-8 py-5 bg-linear-to-b from-black z-10'>
      <img className='w-44' src={LOGO} alt='logo' />
      {user &&<div className='flex p-2'>
        <img className='w-12 h-12' src={USER_AVATAR} alt="usericon" />
        <button onClick={handleSignOut} className='cursor-pointer font-bold text-white'>Sign Out</button>
      </div>}
    </div>
  )
}

export default Header