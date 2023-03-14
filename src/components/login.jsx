import React, { useState } from 'react'
import { Link } from 'react-router-dom'

 function Login() {

   
const [name,setname]=useState("")
const [password,setpassword]=useState("")

function showValue(){
    if(name=="Praveen" && password==123){
        alert("hello Praveen")
    }else if(name!="Praveen"){
        alert("username incorrect")
    }else if(password!=123){
        alert("password incorrect")
    }
}

    
  return (
    <div>
        <label>Email: </label>
        <input type="Email" spaceholder="Email" id='email'onChange={(e)=>{setname(e.target.value); console.log(name)}}/><br /><br />
        <label>Password: </label>
        <input type="password" spaceholder="Password" onChange={(p)=>{setpassword(p.target.value)}}/><br /><br />
        <button onClick={showValue}>Submit</button><br /><br />
        <Link to="/signup"><button>Signup</button></Link>

    </div>
  )
 }

export default Login