import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Connect from './components/Connect'
import Header from './components/Header'
import Projects from './components/Projects'

const App = () => {
  return (
    <div>
      <Header/>
      <Home/>
      <About/>
      <Projects/>
      <Services/>
      <Connect/>
    </div>
  )
}

export default App