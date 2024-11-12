import React from 'react'
import "./index.css"
import Header from '../Header'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <Header/>
        <div className="home-page-container">
            <img src="https://img.freepik.com/free-photo/handsome-unshaven-european-man-has-serious-self-confident-expression-wears-glasses_273609-17344.jpg?uid=R150155018&ga=GA1.1.2003561545.1728832096&semt=ais_hybrid" alt="profile" className='profile-photo' />
            <h1 className="home-page-content-style">
              <span className="name-style">I'm Abhilash Chary,  </span>
              Full Stack developer based in INDIA.
            </h1>
            <div className="button-container">
              <button className="button-style connect">Connect With Me</button>
              <button className="button-style">My Resume</button>
              
            </div>
            
        </div>
    </div>
  )
}

export default Home