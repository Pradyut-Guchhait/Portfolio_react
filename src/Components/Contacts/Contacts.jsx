import React from 'react'
import './Contacts.css'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa'

function Contacts() {
  return (
    <div className='contacts'>
        <div className="contacts-title">
            <h1>Contact</h1>
        </div>
        <div className="contacts-content">
          <div className="contact-info">
            <h3>Get in touch</h3>
            <p className="contact-blurb">Have a project in mind or just want to say hello? Drop a message and I’ll get back to you.</p>
            <ul className="contact-list">
              <li><FaEnvelope /> <a href="mailto:pradyutguchhait04@gmail.com">pradyutguchhait04@gmail.com</a></li>
              <li><FaPhone /> <a href="tel:+918619663196">+91 86196 63196</a></li>
              <li><FaMapMarkerAlt /> Jaipur, India</li>
            </ul>
            <div className="contact-socials">
              <a href="https://github.com/pradyut-guchhait" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/pradyut-guchhait-579b8a2b3" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
            </div>
          </div>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <input type="text" name="name" placeholder="Your Name" required />
            </div>
            <div className="form-row">
              <input type="email" name="email" placeholder="Your Email" required />
            </div>
            <div className="form-row">
              <textarea name="message" rows="10" placeholder="Your Message" required></textarea>
            </div>
            <div className="form-actions">
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
    </div>
  )
}

export default Contacts