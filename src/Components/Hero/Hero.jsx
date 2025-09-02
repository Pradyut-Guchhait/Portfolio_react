import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="profile-container">
            <img src={profile_img} alt="" />
            <div className="ripple-effect ripple-1"></div>
            <div className="ripple-effect ripple-2"></div>
            <div className="ripple-effect ripple-3"></div>
        </div>
        
        <h1 className='typewriter'><span>I'm Pradyut Guchhait,</span> a Web Developer</h1>
        <p>I'm a Web Developer with a passion for creating beautiful and functional websites. 
            I'm a quick learner and I'm always looking to improve my skills.</p><br/>
        <div className='hero-actions'>
          <div className="hero-connect">Connect With Me</div>  
          <div className="hero-resume">My Resume</div>
        </div>
    </div>
  )
}

export default Hero