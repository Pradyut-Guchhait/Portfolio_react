import React from 'react'
import './Skills.css'
import { FaReact, FaJsSquare, FaHtml5, FaBolt, FaNodeJs, FaServer, FaDatabase, FaLock, FaGitAlt, FaCloud, FaMobileAlt, FaPython } from 'react-icons/fa'
import { FaC, FaCode } from 'react-icons/fa6'

function Skills() {
    return (
        <div className='skill'>
            <div className="skill-title">
                <h1>Skills & Expertise</h1>
            </div>
            <div className="skills-grid">
            <div className="skill-item">
                    <div className="skill-icon"><FaC/></div>
                    <span>C</span>
                </div>
                <div className="skill-item">
                    <div className="skill-icon"><FaCode /></div>
                    <span>C++</span>
                </div>
                <div className="skill-item">
                    <div className="skill-icon"><FaPython /></div>
                    <span>Python</span>
                </div>
                <div className="skill-item">
                    <div className="skill-icon"><FaHtml5 /></div>
                    <span>HTML & CSS</span>
                </div>
                <div className="skill-item">
                    <div className="skill-icon"><FaJsSquare /></div>
                    <span>JavaScript</span>
                </div>
                <div className="skill-item">
                    <div className="skill-icon"><FaReact /></div>
                    <span>React.js</span>
                </div>
                <div className="skill-item">
                    <div className="skill-icon"><FaBolt /></div>
                    <span>Vite</span>
                </div>
                <div className="skill-item">
                    <div className="skill-icon"><FaNodeJs /></div>
                    <span>Node.js</span>
                </div>
                <div className="skill-item">
                    <div className="skill-icon"><FaServer /></div>
                    <span>Express.js</span>
                </div>
                <div className="skill-item">
                    <div className="skill-icon"><FaDatabase /></div>
                    <span>MongoDB</span>
                </div>
                <div className="skill-item">
                    <div className="skill-icon"><FaDatabase /></div>
                    <span>MySQL</span>
                </div>
                <div className="skill-item">
                    <div className="skill-icon"><FaLock /></div>
                    <span>JWT</span>
                </div>
                <div className="skill-item">
                    <div className="skill-icon"><FaGitAlt /></div>
                    <span>Git & GitHub</span>
                </div>
                <div className="skill-item">
                    <div className="skill-icon"><FaCloud /></div>
                    <span>Cloud Computing</span>
                </div>
                <div className="skill-item">
                    <div className="skill-icon"><FaMobileAlt /></div>
                    <span>Responsive Design</span>
                </div>
            </div>
        </div>
    )
}

export default Skills