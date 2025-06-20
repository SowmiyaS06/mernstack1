import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
        <nav class="navbar">
            <ul>
                <li>
                    <Link to='/'>Home</Link>

                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/service'>Service</Link>      
                </li>
            </ul>
        </nav>
      
    </div>
  )
}

export default Navbar
