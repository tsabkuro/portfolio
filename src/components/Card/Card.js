import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './card.scss'

const Card = (props) => {
  return (
    <div className='card'>
      <div className='card-image-container'>
        <a className='card-image-link' target="_blank" href={props.github}>
          <img className='card-image' src={props.img} />
        </a>
      </div>
      <section className='card-top'>
        <h3 className='card-title'>{props.title}</h3>
        <a className='card-github' target="_blank" href={props.github}>
            <span className='layers'>
              <FontAwesomeIcon icon={faGithub} className='github' target='_blank' href={props.github} />
              <FontAwesomeIcon icon={faCircle} className='github-stack' />
            </span>
          </a>
      </section>
      <section className='card-bottom'>
        <p className='card-skills'> <span className='bold'>Tools Used:</span> {props.tools}</p>
      </section>
      <p className='card-description'>{props.description}</p>
    </div>
  )
}

export default Card