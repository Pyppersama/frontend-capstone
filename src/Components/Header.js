import React from 'react'
import './style.css'
import HeaderImage from '../Assets/restauranfood.jpg'

function Header() {
  return (
    <header>
        <div className='header-inner'>
            <h1>Little Lemon</h1>
            <h3>Nigeria</h3>
            <p>
                We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
            </p>
            <a href='#' className='primary-btn'>
                Start Free Trial
            </a>
            <div className='header-img'>
                <img src={HeaderImage} alt='header-food-image'/>
            </div>

        </div>
    </header>
  )
}

export default Header