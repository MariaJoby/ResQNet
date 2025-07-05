import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Login from './components/Login'
import Registration from './components/Registration'

function App() {
  return(
    <>
        <NavBar>
          <Routes>
              <Route path="/h" element={<Home/>}/>
              <Route path="/l" element={<Login/>}/>
              <Route path="/r" element={<Registration/>}/>
              
          </Routes>
        </NavBar>
    </>
  )
}

export default App
