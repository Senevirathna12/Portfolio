/* eslint-disable no-unused-vars */

import React from 'react'
import './Hero.css'
import profile_img from '../../assets/myCrop.png'

const Hero = () => {
  return (
    <div className='hero'>
        <img className='hero-profileimg' src={profile_img} alt="Profile" />
        <h1><span>I&apos;m Amith Senevirathna</span> </h1>
        <p> A Computer Engineering undergraduate 🎓 at the University of Ruhuna. I&apos;m 💻 passionate about software development.</p>
        <div className="hero-action">
            <div className="hero-connect">Connect With Me</div>
            <div className="hero-resume">My Resume</div>
        </div>
    </div>
  )
}

export default Hero