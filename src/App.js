import React from 'react'
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Login from './Login/Login'
import SignUp from './SignUp/SignUp'
import Hello from './Hello';

function App() {
  return (
   
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/signup" element={<SignUp/>} />
        <Route exact path="/" element={<Hello/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
