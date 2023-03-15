import React, { useState,useRef } from 'react'
import { Link } from 'react-router-dom'
import { Box } from '@mui/material/'
import { Input } from '@mui/material'
import Button from '@mui/material/Button'

 function Login(props) {

const emailRef=useRef()
const passwordRef=useRef()

// const [email,setemail]=useState("")
// const [password,setpassword]=useState("")

function showValue(){
    if(emailRef.current.value==props.user.email && passwordRef.current.value==props.user.password){
        alert("login successful")
    }else{
        alert("check login details")
    }
}

    
  return (
    <Box>
        <label>Email: </label>
        <input type="Email" style={{color:'red',backgroundColor:'white'}} spaceholder="Email" id='email' ref={emailRef} /><br /><br />
        <label>Password: </label>
        <input type="password" spaceholder="Password" ref={passwordRef}/><br /><br />

        <input type="text" />
        <button variant="contained">Test</button>
        <button onClick={showValue}>Submit</button><br /><br />
        <Link to="/signup"><button>Signup</button></Link>

       

        </Box>
  )
 }

export default Login