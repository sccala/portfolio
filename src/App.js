import React, { Component } from 'react'

import './App.css'
import { Construction } from './components/Construction'
// import Home from './components/Home'
// import Projects from './components/Projects'
// import Resume from './components/Resume'
// import Contact from './components/Contact'
// import Footer from './components/Footer'
// import { Navbar } from './components/Navbar'
import './App.css'


class App extends Component {
  render() {
    return (
      // <div className='bg-primary '>
        
        <Construction /> 
        /* <Navbar />
          <Home />
        <div className='container'>
          <Projects />
          <Resume />
          <Contact />
          <Footer />
        </div>
      </div> */
    )
  }
}

export default App
