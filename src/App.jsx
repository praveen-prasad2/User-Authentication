import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Login from './components/login'
import SignUp from './components/signup'
import { Route,Routes,BrowserRouter } from 'react-router-dom'

function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path='' element={<Login/>}/>
      <Route path='signup' element={<SignUp/>}/>
    </Routes>
    </BrowserRouter>
  )  
}

export default App
