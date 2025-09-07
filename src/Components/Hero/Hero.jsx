import React, { useState, useEffect } from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [displayText, setDisplayText] = useState('')
  const [showCursor, setShowCursor] = useState(true)

  const desktopText = "I'm Pradyut Guchhait, a Web Developer"
  const mobileLine1 = "I'm Pradyut Guchhait,"
  const mobileLine2 = "a Web Developer"

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 767)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (!isMobile) {
      // Desktop typewriter effect
      let index = 0
      const interval = setInterval(() => {
        if (index <= desktopText.length) {
          setDisplayText(desktopText.slice(0, index))
          index++
        } else {
          clearInterval(interval)
        }
      }, 100)
      
      return () => clearInterval(interval)
    } else {
      // Mobile typewriter effect - two lines
      let line1Index = 0
      let line2Index = 0
      let currentLine = 1
      
      const typeNextChar = () => {
        if (currentLine === 1 && line1Index <= mobileLine1.length) {
          setDisplayText(mobileLine1.slice(0, line1Index))
          line1Index++
          setTimeout(typeNextChar, 100)
        } else if (currentLine === 1 && line1Index > mobileLine1.length) {
          currentLine = 2
          setTimeout(typeNextChar, 500) // Pause between lines
        } else if (currentLine === 2 && line2Index <= mobileLine2.length) {
          setDisplayText(mobileLine1 + '\n' + mobileLine2.slice(0, line2Index))
          line2Index++
          setTimeout(typeNextChar, 100)
        }
      }
      
      typeNextChar()
    }
  }, [isMobile])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)
    
    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <div id='home' className='hero'>
        <div className="profile-container">
            <img src={profile_img} alt="" />
            <div className="ripple-effect ripple-1"></div>
            <div className="ripple-effect ripple-2"></div>
            <div className="ripple-effect ripple-3"></div>
        </div>
        
        <h1 className='typewriter'>
          {isMobile ? (
            <div className="mobile-typewriter">
              {displayText.split('\n').map((line, index) => (
                <div key={index} className="typewriter-line">
                  {index === 0 ? <span>{line}</span> : line}
                  {index === displayText.split('\n').length - 1 && showCursor && (
                    <span className="cursor">|</span>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <>
              <span>{displayText.slice(0, 21)}</span>
              <span className="white-text">{displayText.slice(21)}</span>
              {showCursor && <span className="cursor">|</span>}
            </>
          )}
        </h1>
        <p>I'm a Web Developer with a passion for creating beautiful and functional websites. 
            I'm a quick learner and I'm always looking to improve my skills.</p><br/>
        <div className='hero-actions'>
          <a href="#contact" className="hero-connect">Connect With Me</a>  
          <a href="https://drive.google.com/file/d/1VGKT_zVdOsP5KHHLqDTe5HTvnTmCUad-/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="hero-resume">My Resume</a>
        </div>
    </div>
  )
}

export default Hero