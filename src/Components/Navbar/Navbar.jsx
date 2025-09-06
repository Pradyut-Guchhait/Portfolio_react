import React, { useEffect, useState } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }
    return () => document.body.classList.remove('no-scroll')
  }, [menuOpen])
  return (
    <div className='navbar'>
      <p className='nav-title'>Pradyut Guchhait</p>
      <button className={`hamburger ${menuOpen ? 'is-active' : ''}`} aria-label="Menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className="nav-menu">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <a href="#contact" className="nav-connect">Connect With Me</a>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} onClick={closeMenu}>
        <nav onClick={(e) => e.stopPropagation()}>
          <button className='close-btn' aria-label='Close menu' onClick={closeMenu}>×</button>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About Me</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
      </div>
    </div>
  )
}

export default Navbar