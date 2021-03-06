import React, { Component } from 'react'

import './App.css'
// import { Construction } from './components/Construction'

import Resume from './components/Resume'
import Contact from './components/Contact'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import './App.css'
import { About } from './components/About'
import { ProjectSection } from './components/ProjectSection'
import { Skills } from './components/Skills'

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <About />
        <div className='container mx-auto '>
          {/* <Construction />  */}
          <ProjectSection />
          <Skills />
          <Resume />
          <Contact />
        </div>
        <Footer />
      </>
    )
  }
}

export default App
