import React, { Component } from 'react'
import Header from './header'
import Footer from './footer'
import Home from './home'
import Contact from './contact'
import Skills from './skills'
import Projects from './projects'
import Resume from './resume'
import { Switch, Route, Redirect } from 'react-router-dom'

class Main extends Component {
  
  render() {    
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/skills" component={Skills} />
          <Route path="/projects" component={Projects} />
          <Route path="/resume" component={Resume} />
          <Route exact path="/contact" component={Contact} />
          <Redirect path="/home" />
        </Switch>
        <Footer />
      </>
    )
  }
}

export default Main
