// import React, { useState} from 'react'
import {Link, NavLink} from "react-router-dom"
import { BrowserRouter } from 'react-router-dom'
import "./Navbar.css"


const Navbar = () => {
  // const { menuOpen, setMenuOpen} = useState(false)
  return(
    <nav>
      <Link to="/" className="title">Nabiaa</Link>
      <div className="menu">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/About">About Me</NavLink>
        </li>
        <li>
          <NavLink to="/Skills">Skills</NavLink>
        </li>
        <li>
          <NavLink to="/Project">Project</NavLink>
        </li>
        <li>
          <NavLink to="/Contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;