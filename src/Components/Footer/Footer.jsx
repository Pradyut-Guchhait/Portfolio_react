import React from 'react'
import './Footer.css'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className='footer'>
        <div className="footer-content">
            <div className="footer-brand">
                <h3>Pradyut Guchhait</h3>
                <p className="footer-tagline">Full Stack Developer • MERN | IoT | Cloud</p>
                <div className="footer-socials">
                    <a href="mailto:pradyutguchhait04@gmail.com" aria-label="Email"><FaEnvelope /></a>
                    <a href="https://github.com/pradyut-guchhait" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/pradyut-guchhait-579b8a2b3" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
                </div>
            </div>
            <nav className="footer-links">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </nav>
        </div>
        <div className="footer-bottom">
            <p>© {year} Pradyut Guchhait. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer