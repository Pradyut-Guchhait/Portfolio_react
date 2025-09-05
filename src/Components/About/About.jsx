import React from 'react'
import './About.css'
import { FaTrophy, FaUsers, FaStar } from 'react-icons/fa'
import { FaCertificate, FaFolder } from 'react-icons/fa6'

function About() {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About Me</h1>
            </div>
            <div className="about-sections">
                <div className="about-right">
                    <div className="about-para">
                        <p>I am Pradyut Guchhait, a dedicated Full Stack Web Developer specializing in the MERN stack (MongoDB, Express.js, React, Node.js). With hands-on experience in building scalable web applications, APIs, and functional platforms, I focus on delivering efficient and user-friendly solutions.
                            My professional interests extend to IoT, Cloud Computing, and Software Development, where I aim to integrate modern technologies to solve real-world problems. I thrive in collaborative environments, enjoy tackling complex challenges, and continuously expand my technical expertise.
                            My goal is to leverage my skills to contribute to innovative projects, develop impactful digital solutions, and grow as a technology professional.</p>
                    </div>
                </div>
                <div className="aboutachievements">
                    <div className="achievement-card">
                        <h2>Achievements</h2>
                        <div className="achievement-item">
                            <div className="achievement-icon"><FaTrophy/></div>
                            <div className="achievement-content">
                                <h3>1</h3>
                                <p>Patent</p>
                            </div>
                        </div>
                        <div className="achievement-item">
                            <div className="achievement-icon"><FaStar/></div>
                            <div className="achievement-content">
                                <h3>2+</h3>
                                <p>Hackathons & Team Projects</p>
                            </div>
                        </div>
                        <div className="achievement-item">
                            <div className="achievement-icon"><FaFolder/></div>
                            <div className="achievement-content">
                                <h3>3+</h3>
                                <p>Full-Stack Projects Built</p>
                            </div>
                        </div>
                        <div className="achievement-item">
                            <div className="achievement-icon"><FaCertificate/></div>
                            <div className="achievement-content">
                                <h3>5+</h3>
                                <p>Certifications Earned</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About