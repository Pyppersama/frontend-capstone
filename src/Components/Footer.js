import React from 'react'
import './style.css'
import FooterImage from '../Assets/footerImage.jpg'

function Footer() {
  return (
    <footer>
        <div className='footer-inner'>
            <div className='footer-image'>
                <img src={FooterImage} alt='footer image'/>
            </div>
            <div className='footer-about'>
                <h5>
                    About
                </h5>
                <p>
                    assa aas aa asdsd d asd aa aas saa a  afa a af s fsf f s sdf s gf s sd sdf sdfs d eweee.
                </p>
            </div>
            <div className='footer-contact'>
                <h5>
                    Contact
                </h5>
                <p>
                    assa aas aa fae afa a af s fsf f s sdf s gf s sd sdf sdfs d eweee.
                </p>
            </div>
            <div className='footer-link'>
                <h5>
                    Link
                </h5>
                <p>
                    assa aas aa asdsd d asd aa aas saa a adaddaad aa aafa a af s fsf f s sdf s gf s sd sdf sdfs d eweee.
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer