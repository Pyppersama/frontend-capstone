import React from 'react'
import Logo from '../Assets/Logo.svg'
import './style.css'

function Nav() {
  return (
    <nav>
        <div>
            <img src={Logo} alt='Littlelemon Logo'/>
        </div>
        <div>
            <ul>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Menu</a></li>
                <li><a href='#'>Reservation</a></li>
                <li><a href='#'>Order Online</a></li>
                <li><a href='#'>Login</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Nav