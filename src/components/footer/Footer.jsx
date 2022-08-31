import React from 'react'
import './Footer.css'
import {FiFacebook} from 'react-icons/fi'
import {FiInstagram} from 'react-icons/fi'
import {FiTwitter} from 'react-icons/fi'




const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>DEBAYAN</a>
      <u1 className='permalinks'>
        <li href='#'>Home</li>
        <li href='#'>About</li>
        <li href='#'>Skills</li>
        <li href='#'>Projects</li>
        <li href='#'>Contacts</li>
      </u1>

      <div className="footer__socials">
        <a href='https://www.facebook.com/dn.sn.56'><FiFacebook/></a>
        <a href='https://www.facebook.com/dn.sn.56'><FiInstagram/></a>
        <a href='https://www.facebook.com/dn.sn.56'><FiTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Debayan Sen, All rights reserved</small>
      </div>

    </footer>
  )
}

export default Footer