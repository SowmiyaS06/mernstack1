import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Service from './pages/Service.jsx'
import Navbar from './components/Navbar.jsx'
import './components/Navbar.css'
import State from './Hooks/Stae.jsx'
import Form from './Hooks/form.jsx'
import Effect from './Hooks/Effect.jsx'
import Reducer from './Hooks/Reducer.jsx'


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/service' element={<Service />} />
      <Route path='/state' element={<State/>} />
      <Route path='/form' element={<Form/>} />
      <Route path='/Effect' element={<Effect/>}/>
      <Route path='/Reducer' element={<Reducer/>}/>
      <Route path='*' element={<h1>404 Not Found</h1>}/>
    </Routes>
    </>
  )
}

export default App
