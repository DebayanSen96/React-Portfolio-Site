import React from 'react'
import './Education.css'
const Services = () => {
  return (
    <section id='services'>
      <h5 className='head'>about</h5>
      <h2>My Education</h2>
      <div className="main">
        <div className="content">
          <div className='box__content'>
          <h4>10th(CBSE)</h4>
          <div className='marks__school'>
            <small className='marks'>83.4% - 2018</small>
            <small className='school_name'>MAV Agartala</small>
            </div>
          </div>
        </div>
        <div className="content">
        <div className='box__content'>
        <h4>12th(CBSE)</h4>
        <div className='marks__school'>
            <small className='marks'>78.6% - 2020</small>
            <small className='school_name'>Hindi HS School</small>
          </div>
        </div>
        </div>
        <div className="content">
        <div className='box__content'>
        <h4>B.Tech(EIE)</h4>
        <div className='marks__school'>
            <small className='marks'>8.3 (20-24)</small>
            <small className='school_name'>NIT Agartala</small>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Services