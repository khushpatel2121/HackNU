import React from 'react';
import "./register.css";
import {Link} from "react-router-dom"
import { useState } from 'react';
import axios from 'axios';


const Register = () => {

    const [username, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handlechange = async (e)=>{
        e.preventDefault();
        
        try {
            const res = await axios.post("http://localhost:3000/api/auth/register",{
              username,
              email,
              password,
            });
            res.data && window.location.replace("/login");
        } catch (err) {
            console.log(err);
        }
    
      };

  return (
    <div className='Register'>
      <div className='RWrapper'>
        <h1 className='RTitle'>
        </h1>
        <form className='RForm'>
        <input className='Rinput' placeholder='Username' onChange={(e)=>setName(e.target.value)}/>

      
        <input className='Rinput' placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>

        <input className='Rinput' placeholder="Passcode" type='password' onChange={(e)=>setPassword(e.target.value)}/>
        <span>
            Already have an account? <Link to="/login">Login</Link>
        </span>
       
        </form>
       <button className='Rbutton' onClick={handlechange}>
        Register
       </button>

      </div>
    </div>
  )
}

export default Register
