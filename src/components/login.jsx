import React, { useState } from 'react'
import { Link } from 'react-router-dom'

 function Login(props) {

   
const [email,setemail]=useState("")
const [password,setpassword]=useState("")

function showValue(){
    if(email==props.user.email && password==props.user.password){
        alert("login successful")
    }else{
        alert("check login details")
    }
}

    
  return (
    <div>
        <label>Email: </label>
        <input type="Email" spaceholder="Email" id='email'onChange={(e)=>{setemail(e.target.value);}}/><br /><br />
        <label>Password: </label>
        <input type="password" spaceholder="Password" onChange={(p)=>{setpassword(p.target.value)}}/><br /><br />
        <button onClick={showValue}>Submit</button><br /><br />
        <Link to="/signup"><button>Signup</button></Link>

    </div>
  )
 }

export default Login