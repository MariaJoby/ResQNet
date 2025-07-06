
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Login from './components/Login'
import Registration from './components/Registration'
import Donate from './components/Donate'
import Patient from './components/Patient'
import VolunteerForm from './components/Volunteer'
import About from './components/About'

function App() {
  return(
    <>
        <NavBar/>
          <Routes>
              <Route path="/h" element={<Home/>}/>
              <Route path="/l" element={<Login/>}/>
              <Route path="/r" element={<Registration/>}/>
              <Route path="/d" element={<Donate/>}/>
              <Route path="/p" element={<Patient/>}/>
              <Route path="/v" element={<VolunteerForm/>}/>
              <Route path="/a" element={<About/>}/>
          </Routes>
    </>
  )
}

export default App;

