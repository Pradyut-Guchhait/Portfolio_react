import React from 'react'
import './Projects.css'

function Projects() {
  const projects = [
    {
        title: 'MERN Expense Tracker',
        tech: ['MongoDB', 'Express.js', 'React (Vite)', 'Node.js', 'Recharts'],
        description: 'Full-stack expense tracker with JWT authentication, monthly budgets, secure CRUD operations, and an interactive analytics dashboard.',
        repo: 'https://github.com/Pradyut-Guchhait/Expense-Tracker-MERN-'
      },
      {
        title: 'Network Topology Simulator',
        tech: ['Python', 'Multithreading', 'IPC (FIFO/TCP)', 'Matplotlib', 'PyTest'],
        description: 'Automated simulator for generating and analyzing network topologies with failure detection, optimization suggestions, and real-time visualizations.',
        repo: 'https://github.com/Pradyut-Guchhait/Network_Simulator'
      },
      {
        title: 'BannerCraft: AI Banner Generator',
        tech: ['Python', 'OpenCV', 'TensorFlow', 'Flask'],
        description: 'AI-powered web app that detects products in images and generates promotional banners with high accuracy using a custom TensorFlow model.',
        repo: 'https://drive.google.com/file/d/1ndSFsk2dXwZtidW3TCZQ6T0hNQlTis4T/view' 
      }
      
  ]

  return (
    <div id='projects' className='projects reveal'>
        <div className="projects-title">
            <h1>Projects</h1>
        </div>
        <div className="projects-grid stagger" data-repeat>
          {projects.map((project) => (
            <div className="project-card" key={project.title}>
              <div className="project-card-body">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-tech">
                  {project.tech.map((t) => (
                    <span className="tech-chip" key={t}>{t}</span>
                  ))}
                </div>
                <p className="project-desc">{project.description}</p>
              </div>
              <div className="project-card-footer">
                <a className="repo-link" href={project.repo} target="_blank" rel="noreferrer">View Repo</a>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Projects