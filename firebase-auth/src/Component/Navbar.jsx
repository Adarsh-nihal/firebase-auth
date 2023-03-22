import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{display:"flex",margin:"auto",width:"30%"}}>
        <h4 > <Link to="login">SIGN IN</Link></h4>
        <h4 style={{marginLeft:"10px"}}> <Link to="signup">SIGN UP</Link></h4>
        </div>
  )
}

export default Navbar