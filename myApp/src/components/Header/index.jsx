import React from 'react'
import "./index.css"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header-container">
        <h1 className="my-name">Abhi</h1>
        <div className="options-container">
            <Link to = "/" className='elements-style'>  
                <h3 className="options-style">Home</h3>
            </Link>
            <Link to = "/about" className='elements-style'>
                <h3 className="options-style">About</h3>
            </Link>
            <Link to = "/services" className='elements-style'>  
                <h3 className="options-style">Services</h3>
            </Link>
            <Link to = "/connect" className='elements-style'>
                <h3 className="options-style">Connect</h3>
            </Link>
        </div>
        <button className="connect-with-me-button-style">Connect With Me</button>
    </div>
  )
}

export default Header