import React from 'react'
import './Contact.css'
import {MdOutlineMailOutline} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_r4452tq', 'template_9ob7rt9', form.current, 'Gej_asJzK-qI7bj9s')

    e.target.reset();

  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
        <article className='contact__option'>
        <MdOutlineMailOutline className='contact__option-icon'/>
        <h4>Email</h4>
        <h5>debayansen.ds.ds@gmail.com</h5>
        <a href='mailto:debayansen.ds.ds@gmail.com' target="_blank">Send Mail</a>
        </article>
        <article className='contact__option'>
        <RiMessengerLine className='contact__option-icon'/>
        <h4>Messenger</h4>
        <h5>Debayan Sen</h5>
        <a href='https://m.me/dn.sn.56' target="_blank">Send Message</a>
        </article>
        <article className='contact__option'>
        <BsWhatsapp className='contact__option-icon'/>
        <h4>WhatsApp</h4>
        <h5>+91 7638925741</h5>
        <a href='https://api.whatsapp.com/send?phone=7638925741' target="_blank">Ping me on WhatsApp</a>
        </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Your Full Name' required/>
        <input type="email" name='email' placeholder='Your Email' required/>
        <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact