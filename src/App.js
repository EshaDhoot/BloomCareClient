import React from 'react'
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Login from './Login/Login'
import SignUp from './SignUp/SignUp'
import Hello from './Hello';
import Cards from './authenticate/Cards';

function App() {
  return (
   
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/signup" element={<SignUp/>} />
        <Route exact path="/checkuser" element={<Cards/>} />
        <Route exact path="/" element={<Hello/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
