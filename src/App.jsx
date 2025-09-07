import React, { useEffect } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Projects from './Components/Projects/Projects'
import Contacts from './Components/Contacts/Contacts'
import Footer from './Components/Footer/Footer'

const App = () => {
  useEffect(() => {
    // Scroll to top (hero section) when page loads or reloads
    window.scrollTo(0, 0)
    
    // IntersectionObserver for scroll-reveals
    const elements = document.querySelectorAll('.reveal, .reveal-pop, .stagger')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          // If not needed again, unobserve to improve performance
          if (!entry.target.dataset.repeat) observer.unobserve(entry.target)
        } else if (entry.target.dataset.repeat) {
          entry.target.classList.remove('is-visible')
        }
      })
    }, { threshold: 0.15, rootMargin: '0px 0px -10% 0px' })

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="app-wrapper">
      <div className="background-layer"></div>
      <div className="content-layer">
        <Navbar/>
        <Hero/>
        <About/>
        <Skills/>
        <Projects/>
        <Contacts/>
        <Footer/>
      </div>
    </div>
  )
}


export default App
