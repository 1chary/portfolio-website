import React, { useState } from 'react'
import "./index.css"
import AnchorLink from "react-anchor-link-smooth-scroll"

const Header = () => {
    const [activeTab,changeActiveTab] = useState("home")

  return (
    <div className="header-container">
        <h1 className="my-name">Abhi</h1>
        <div className="options-container">
            <AnchorLink className='elements-style' href='#home'>
                <h3 className="options-style" onClick={() => changeActiveTab("home")}>Home</h3>
            </AnchorLink>
            
            <AnchorLink className='elements-style' href='#about'>
                <h3 className="options-style" onClick={() => changeActiveTab("about")}>About</h3>
            </AnchorLink>

            <AnchorLink className='elements-style' href='#services'>  
                <h3 className="options-style" onClick={() => changeActiveTab("services")}>Services</h3>
            </AnchorLink>

            <AnchorLink className='elements-style' href='#projects'>  
                <h3 className="options-style" onClick={() => changeActiveTab("projects")}>Projects</h3>
            </AnchorLink>

            <AnchorLink className='elements-style' href='#connect'>
                <h3 className="options-style" onClick={() => changeActiveTab("connect")}>Connect</h3>
            </AnchorLink>
        </div>
        <AnchorLink className='elements-style' href='#connect'>
            <button>Connect with me</button>
        </AnchorLink>
    </div>
  )
}

export default Header