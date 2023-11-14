import React from 'react'
import Logo from '../Assets/Logo.svg'
import './style.css'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav>
        <div>
            <img src={Logo} alt='Littlelemon Logo'/>
        </div>
        <div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/'>About</Link></li>
                <li><Link to='/'>Menu</Link></li>
                <li><Link to='/Reservation'>Reservation</Link></li>
                <li><Link to='/'>Order</Link></li>
                <li><Link to='/'>Login</Link></li>
            </ul>
        </div>
    </nav>
  )
}

export default Nav