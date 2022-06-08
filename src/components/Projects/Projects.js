import React from 'react'
import './projects.scss'
import Card from '../Card/Card'
import ecofoot from '../../assets/images/ecofoot.png'
import threadpools from '../../assets/images/threadpools.png'
import floodfill from '../../assets/images/floodfill.png'
import ezfileencoder from '../../assets/images/ezfileencoder.png'
import financetracker from '../../assets/images/financetracker.png'
import stocktracker from '../../assets/images/stocktracker.png'
import portfolio from '../../assets/images/portfolio.png'

const Projects = () => {
  return (
    <div className='projects' id="projects">
        <h3 className='projects-title'>Projects</h3>
        <div className='projects-cards'>
            <Card title="Portfolio"
                img={portfolio}
                github="#"
                tools="JavaScript, React, HTML, CSS/SCSS"
                description="fill later" />  
            <Card title="Thread Pools"
                img={threadpools}
                github="https://github.com/tsabkuro/Thread-Pools"
                tools="C, VS Code, Multi-threading, Mutex"
                description="fill later" />
            <Card title="Flood Fill Algorithm"
                img={floodfill}
                github="https://github.com/tsabkuro/Flood-Fill"
                tools="C++, GDB Debugger, VS Code, Catch2"
                description="fill later" />
            <Card title="Finance Tracker"
                img={financetracker}
                github="https://github.com/tsabkuro/Finance-Tracker"
                tools="Java, IntelliJ, JUnit, JSON"
                description="fill later" />
            <Card title="EZ File Encoder"
                img={ezfileencoder}
                github="https://github.com/E-Chiu/EZFileEncoder"
                tools="Python, Git/Github, VS Code"
                description="fill later" />
            <Card title="Ecofoot"
                img={ecofoot}
                github="https://github.com/tsabkuro/EcoFoot"
                tools="R, Jupyter Notebook"
                description="fill later" />
            <Card title="Stock Tracker"
                img={stocktracker}
                github="https://github.com/tsabkuro/Stock-Tracker"
                tools="Python, Flask, Sublime Text, Javascript, HTML5,
                CSS, SQL"
                description="fill later" />                                         
        </div>
    </div>
  )
}

export default Projects