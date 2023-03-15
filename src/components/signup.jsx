import React, { useRef} from 'react'
import { useNavigate } from 'react-router-dom'

function SignUp() {

  
  const emailRef=useRef()
  const usernameRef=useRef()
  const phoneRef=useRef()
  const passwordRef=useRef()


//     const[email,setemail]=useState("")
// const[username,setusername]=useState("")
// const[phone,setphone]=useState("")
// const[password,setpass]=useState("")

const navigate=useNavigate()

// const[signup,setsignup]=useState(false)
// signupRef=useRef()

function showData(){

   let obj={
    email: emailRef.current.value,
    password: passwordRef.current.value,
    username: usernameRef.current.value,
    phone: phoneRef.current.value
   }
   navigate('/login')
   
}



  return (
    <div>
        <label htmlFor="">Email: </label>
        <input  type="email" ref={emailRef} /><br /><br />
        <label  htmlFor="">UserName: </label>
        <input type="text" ref={usernameRef} /><br /><br />
        <label htmlFor="">Phone: </label>
        <input  type="text"ref={phoneRef} /><br /><br />
        <label htmlFor="">Password: </label>
        <input  type="password" ref={passwordRef}/><br /><br />
        <button onClick={showData}>SignUp</button>


    
    </div>
  )
}

export default SignUp