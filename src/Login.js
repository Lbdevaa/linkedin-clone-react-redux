import React, { useState } from 'react'
import './Login.css'
import {auth} from './firebase'
import {useDispatch} from 'react-redux'
import { login } from './features/userSlice';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();


  const loginToApp = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(email, password)
    .then(userAuth => {
      dispatch(login({
        email: userAuth.user.email,
        uid: userAuth.user.uid,
        displayName: userAuth.user.displayName,
        profilePic: userAuth.user.photoUrl,
      })
      );
    }).catch(error=> alert(error))
  };
  
  const register = () => {
    if (!name) {
      return alert('Please enter a full name!');
    }
  
    auth.createUserWithEmailAndPassword(email, password)
    .then((userAuth) => {
      userAuth.user.updateProfile({
        displayName: name,
        photoUrl: profilePic,
      })
    .then(() => {
      dispatch(login({
        email: userAuth.user.email,
        uid: userAuth.user.uid,
        displayName: name,
        photoUrl: profilePic,
      }))
    })
    }).catch(error => alert(error));
  };

  return (
    <div className="login">
      <h1>You are not logged in</h1>
      <img src="https://bitnovosti.com/wp-content/uploads/2019/04/linkedin-logo.png" alt=""/>
    
    <form>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Full name (required if registering) " type="text"/>
      <input value={profilePic} onChange={e => setProfilePic(e.target.value)} placeholder="Profile pic url (optional)" type="text"/>
      
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" type="email"/>
      <input value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" type="password" name="" id=""/>
      
      <button type="submit" onClick={loginToApp} >Sign In</button>
    </form>

    <p>Not a memeber? {" "}
      <span className="login__register" onClick={register} >Register Now</span>
    </p>

    </div>
  )
}

export default Login
