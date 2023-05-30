import React from 'react';
import  "../../pages/about/about.css";
import logo from "../../images/mobilia.png"

const About = () => {
  return (
    <section className='about-contain'>
      <div className='about-content'>
        <img className='about-img' src={logo}/>
        <div className='about-text'>
          <h1 className='about-h1'>about us</h1>
          <h5 className='about-h5'>Mobilia</h5>
          <p className='about-p '> web development mr potatoweb development mr potatoweb development mr potatoweb development mr potatoweb development mr potatoweb development mr potatoweb development mr potatoweb development mr potatoweb development mr potatoweb development mr potatoweb development mr potatoweb development mr potatoweb development mr potatoweb development mr potato</p>
        </div>
      </div>
    </section>
  )
}

export default About