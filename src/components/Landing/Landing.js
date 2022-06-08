import './landing.scss'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faArrowAltCircleDown, faCircle, faEnvelope, faSquare } from '@fortawesome/free-solid-svg-icons'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Landing = () => {
  return (
  <div className='landing'>
    <div className='landing-text'>
      <h3 className='landing-description'> Hi! I'm
        <h1 className='landing-name'>Tim Sabanshi</h1>
        a Computer Science Student at the University of British Columbia.
      </h3>
      <h4 className='landing-email'>I can be reached at t.sabanshi@gmail.com</h4>
      <div className='landing-links'>
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/tsabanshi/">
          <span className='layers'>
            <FontAwesomeIcon icon={faLinkedin} className='linkedin' />
            <FontAwesomeIcon icon={faSquare} color="white" className='linkedin-stack' />
          </span>
          LinkedIn
        </a>
        <a target="_blank" rel="noreferrer" href="https://github.com/tsabkuro">
          <span className='layers'>
            <FontAwesomeIcon icon={faGithub} className='github' />
            <FontAwesomeIcon icon={faCircle} className='github-stack' />
          </span>
          GitHub
        </a>
      </div>
      <AnchorLink className="about-arrow" href='#projects' offset={() => 100}><FontAwesomeIcon icon={faArrowAltCircleDown} /></AnchorLink>
    </div>
  </div>
  )
}

export default Landing