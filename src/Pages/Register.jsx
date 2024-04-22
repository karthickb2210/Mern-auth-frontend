import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import {toast} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';

function Register() {
    const navigate = useNavigate();
    const [ data,setData] = useState({
        name : "",
        email : "",
        password: ""
    })

   async function registerUser(e){
    e.preventDefault()
        console.log(data);
        const {name , email,password} = data
        try {
            const { data} = await axios.post('/register',{
                name,email,password
            })
            if(data.error){
                toast.error(data.error)
            }else{
                setData({})
                toast.success("Login success full welcome")
            }
        } catch (error) {
            console.log(error)
        }
       
    }
  return (
    <div>
        <form onSubmit={registerUser}>
            <label>Name</label>
            <input type='text' onChange={(e)=>setData({...data,name : e.target.value})} placeholder='enter name' value={data.name}/>
            <label>Email</label>
            <input type='text' onChange={(e)=>setData({...data,email : e.target.value})} placeholder='enter Email' value={data.email}/>
            <label>Password</label>
            <input type='text' onChange={(e)=>setData({...data,password : e.target.value})} placeholder='enter password' value={data.password} />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Register