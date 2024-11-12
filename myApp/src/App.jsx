import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Connect from './components/Connect'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path = "/" element = {<Home/>} />
        <Route exact path = "/about" element = {<About/>} />
        <Route exact path = "/services" element = {<Services/>} />
        <Route exact path = "/connect" element = {<Connect/>} />
      </Routes>
    </div>
  )
}

export default App