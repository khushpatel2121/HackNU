import React from 'react';
import "./login.css";
import { Link } from 'react-router-dom';
import {loginFailure, loginStart, loginSuccess} from "../../../redux/userSlice";
import {useDispatch} from "react-redux"
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {

  const [username, setName] = useState("");
  const [password, setPassword] = useState("");

  const dispatch= useDispatch();
  const navigate = useNavigate();
  
  const handleLogin = async(e)=>{
    e.preventDefault();
    dispatch(loginStart());
    try{
      const res = await axios.post("http://localhost:3000/api/auth/login",{username,password});
      dispatch(loginSuccess(res.data));
      navigate("/")
    }catch(err){
      dispatch(loginFailure());
    }
    }

  const error = true
  return (
    <div className='Login'>
    <div className='LWrapper'>
      <h1 className='LTitle'>
      </h1>
      <form className='LForm'>
      <input className='Linput' placeholder='Username' onChange={e=>setName(e.target.value)}/>

    
      <input className='Linput' placeholder="Passcode" type="password" onChange={e=>setPassword(e.target.value)}/>
      <span>
        New User? <Link to="/register">Register</Link>
      </span>
      {error&&<span>{error.message}</span>}
      </form>
     <button className='Lbutton' onClick={handleLogin}>
      Login
     </button>

    </div>
  </div>
  )
}

export default Login
