import React, { Component } from 'react'

import './App.css'
import { Construction } from './components/Construction'
// import Home from './components/Home'
// import Skills from './components/Skills'
// import Projects from './components/Projects'
// import Resume from './components/Resume'
// import Contact from './components/Contact'
// import { Navbar } from 'reactstrap'
// import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <>
      <div className='min-h-screen min-w-screen content-center'>
        <Construction />
      </div>
        {/* <Navbar />
        <Home />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
        <Footer /> */}
      </>
    )
  }
}

export default App
