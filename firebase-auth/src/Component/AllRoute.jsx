import React from 'react'
import {Route, Routes} from "react-router-dom"
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import SignUp from '../Pages/SignUp'

const AllRoute = () => {
  return (
  <Routes>
    <Route path="/home" element={<Home/>} />
    <Route path="/" element={<Login/>} />
    <Route path="/signup" element={<SignUp/>} />
    </Routes>
  )
}

export default AllRoute