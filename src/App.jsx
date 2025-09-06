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
