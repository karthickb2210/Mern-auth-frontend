import React, { useState } from "react";
import axios from 'axios';
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const [data,setData] = useState({
    email : "",
    password : ""
  })
  const loginUser = async (e)=>{
    console.log(data)
    e.preventDefault();
    const {email,password} =data;
    try {
      const {data} = await axios.post('/login',{
        email,password
      })
      if(data.error){
        toast.error(data.error)
      }else{
        setData({})
        navigate('/dashboard')
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <form onSubmit={loginUser}>
      <label>Email</label>
      <input type="text" onChange={(e)=>setData({...data,email : e.target.value})} placeholder="enter Email" />
      <label>Password</label>
      <input onChange={(e)=> setData({...data, password : e.target.value})} type="text" placeholder="enter password" />
      <button onClick={loginUser}>Login</button>
      </form>
    </div>
  );
}

export default Login;
