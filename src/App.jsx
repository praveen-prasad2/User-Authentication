import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Login from './components/login'
import SignUp from './components/signup'
import { Route,Routes,BrowserRouter } from 'react-router-dom'



function App() {
  const[user,setuser]=useState({})

  

  return (
    <BrowserRouter>
    <Routes>
      <Route path='login' element={<Login/>}/>
      <Route path='signup' element={<SignUp setuser={setuser}/>}/>
    </Routes>
    </BrowserRouter>
  )  
}

export default App
