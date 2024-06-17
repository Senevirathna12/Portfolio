/* eslint-disable no-unused-vars */
import React from 'react'
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/myCrop.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-title">
            <h1>
                About Me
            </h1>
            <img src={theme_pattern} alt="theme" />
        </div>
        <div className="about-section">
            <div className="about-left">
                <img src={profile_img} alt="Profile" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <hr />
                <p>
                    Hello! I am Senevirathna K.M.A.N, a 🎓 Computer Engineering undergraduate at the University of Ruhuna. With a strong passion for 💻 software development, I am an adaptable and responsible individual, eager to apply my knowledge to real-world projects.
                </p>
                <p>
                    My academic journey has equipped me with a solid foundation in computer engineering principles, and I am excited to further develop my skills in a professional setting. I thrive on tackling challenges and am always eager to quickly learn new technologies.
                </p>
                <hr />
                </div>
            </div>
        </div>
    </div>
  )
}

export default About