import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <div className='container'>
      <div className="navbar-left">
       <Link to="/">
  <img src={logo} alt="Logo" className="logo" />
</Link>
      </div>

      <ul className="navbar-right">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
