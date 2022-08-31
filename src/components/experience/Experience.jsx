import React from 'react'
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
const Experience = () => {
  return (
    <section id='experience'>
      <h5 className='pad'>What skills do I have?</h5>
      <h2>My Skills</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
        <h3>Frontend Development
          <div className="experience__content">
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>HTML</h4>
            <small className='skill__level'>Experienced</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>CSS</h4>
            <small className='skill__level'>Intermediate</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>JavaScript</h4>
            <small className='skill__level'>Intermediate</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>React Js</h4>
            <small className='skill__level'>Intermediate</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>Flutter</h4>
            <small className='skill__level'>Experienced</small>
            </div>
            </article>
          </div>
        </h3>
        </div>
        <div className="experience__backend">
        <h3>Backend Development
          <div className="experience__content">
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
           <div>
           <h4>Node JS</h4>
            <small className='skill__level'>Intermediate</small>
           </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
           <div>
           <h4>MySQL</h4>
            <small className='skill__level'>Intermediate</small>
           </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
           <div>
           <h4>Firebase</h4>
            <small className='skill__level'>Beginner</small>
           </div>
            </article>
          </div>
        </h3>
        </div>
      </div>
    </section>
  )
}

export default Experience