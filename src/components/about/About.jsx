import React from 'react'
import './About.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'



const About = () => {
  return (
    <section id='about'>
      <h5 className='head'>Get to Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
      <div className='about__me'>
      <div className='about__me-image'>
      <img src={ME} alt='About Image'/>
      </div>
      </div>

      <div className='about__content'>
      <div className="about__cards">
        <article className='about__card'>
          <FaAward className='about__icon'/>
        <h5>Experience</h5>
        <small>2+ Months</small>
        </article>
        <article className='about__card'>
          <FiUsers className='about__icon'/>
        <h5>Clients</h5>
        <small>Currently None LOL</small>
        </article>
        <a href='https://github.com/DebayanSen96?tab=repositories' target='_blank'>
        <article className='about__card'>
          <VscFolderLibrary className='about__icon'/>
        <h5>Projects</h5>
        <small>10+ Completed (Click to view)</small>
        </article>
        </a>
      </div>
      <p>
      I am Debayan Sen. I am currently studying in B.Tech 4th Semester in Electronics and Instrumentation Engineering
at National Institute of Technology Agartala.

I am motivated to learn about Software topics & Competitive Programming(In C++). I have also learned HTML, CSS, JAVA SCRIPT and made a few small project websites with the help of these.
I am also a very focused and always give my full concentration and time to any task given to me.

I am looking for real world experience in any IT Firms.

Thanks for reading :) .
      </p>
      <a href='#contact' className='btn btn-primary'>Contact Me</a>
      </div>
      </div>
    </section>
  )
}

export default About
