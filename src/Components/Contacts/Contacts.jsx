import React, { useState } from 'react'
import './Contacts.css'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

function Contacts() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('')

    try {
      // EmailJS configuration - you'll need to replace these with your actual values
      const serviceId = 'service_mkfj4wq'
      const templateId = 'template_4wp3ztm'
      const publicKey = 'kbBSkLm6vQI8k-lhz'

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'pradyutguchhait04@gmail.com'
      }

      await emailjs.send(serviceId, templateId, templateParams, publicKey)
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div id='contact' className='contacts'>
        <div className="contacts-title">
            <h1>Contact</h1>
        </div>
        <div className="contacts-content">
          <div className="contact-info">
            <h3>Get in touch</h3>
            <p className="contact-blurb">Have a project in mind or just want to say hello? Drop a message and I'll get back to you.</p>
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
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <input 
                type="text" 
                name="name" 
                placeholder="Your Name" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-row">
              <input 
                type="email" 
                name="email" 
                placeholder="Your Email" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-row">
              <textarea 
                name="message" 
                rows="10" 
                placeholder="Your Message" 
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="form-actions">
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
            {submitStatus === 'success' && (
              <div className="success-message">
                ✅ Message sent successfully! I'll get back to you soon.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="error-message">
                ❌ Failed to send message. Please try again or contact me directly.
              </div>
            )}
          </form>
        </div>
    </div>
  )
}

export default Contacts