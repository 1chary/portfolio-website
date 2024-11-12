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
            <Link to = "/about">
                <h3 className="options-style">About</h3>
            </Link>
        </div>
    </div>
  )
}

export default Header