import React, { useState } from 'react'

function SignUp() {

    const[email,setemail]=useState("")
const[username,setusername]=useState("")
const[phone,setphone]=useState("")
const[password,setpass]=useState("")

const[signup,setsignup]=useState(false)

function showData(){
   setsignup(true)
}
function reset(){
    setemail("")    
    setusername("")
    setpass("")
    setphone("")
    setsignup(false)
}


  return (
    <div>
        <label htmlFor="">Email: </label>
        <input value={email} type="email" onChange={(e)=>{setemail(e.target.value);}} /><br /><br />
        <label  htmlFor="">UserName: </label>
        <input value={username} type="text" onChange={(n)=>{setusername(n.target.value);}} /><br /><br />
        <label htmlFor="">Phone: </label>
        <input value={phone} type="text" onChange={(p)=>{setphone(p.target.value);}} /><br /><br />
        <label htmlFor="">Password: </label>
        <input value={password} type="password" onChange={(ps)=>{setpass(ps.target.value);}} /><br /><br />
        <button onClick={showData}>SignUp</button>
        <button onClick={reset}>Reset</button>
{signup&&
<>
        <p>{email}</p>
        <p>{username}</p>
        <p>{phone}</p>
        <p>{password}</p>
</>
}
    </div>
  )
}

export default SignUp