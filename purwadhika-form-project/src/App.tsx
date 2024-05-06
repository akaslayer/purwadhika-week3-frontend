import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import User from './pages/User'
import Register from './pages/Register'

function App() {
  useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<User />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </>
  )
}

export default App
