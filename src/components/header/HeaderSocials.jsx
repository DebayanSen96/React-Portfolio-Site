import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsFacebook} from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/debayan-sen-709a24202" target={"_blank"}><BsLinkedin/></a>
        <a href="https://github.com/DebayanSen96" target={"_blank"}><FaGithub/></a>
        <a href="https://www.facebook.com/dn.sn.56" target={"_blank"}><BsFacebook/></a>
    </div>
  )
}

export default HeaderSocials