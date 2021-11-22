import React, { Component } from 'react'

import './App.css'
import { Construction } from './components/Construction'

// import Projects from './components/Projects'
// import Resume from './components/Resume'
// import Contact from './components/Contact'
// import Footer from './components/Footer'
// import { Navbar } from './components/Navbar'
// import './App.css'
// import { About } from './components/About'
// import { ProjectSection } from './components/ProjectSection'
// import { Skills } from './components/Skills'

class App extends Component {
  render() {
    return (
      <div className='bg-primary '>
        <Construction /> 
        {/* <Navbar />
        <div className='container'>
          <About />
          <div className='text-lg text-primary'>projects</div>
          <ProjectSection />
          <ProjectSection />
          <ProjectSection />
          <ProjectSection />
<Skills />
          <Resume />
          <Contact />
          <Footer />
        </div> */}
      </div>
    )
  }
}

export default App
