import React, { Component } from 'react'
import { Row, Col, Container } from 'reactstrap'

import '../App.css'

class Skills extends Component {
  render() {
    return (
      <>
        <Container style={{ paddingTop: '5%', paddingBottom: '5%' }}>
          <h2 className="projects-header">Coding Bootcamp</h2>
          <Row>
            <Col>
              <img className="col-md-3" src="assets/images/Fullstack_grad.jpg" alt="fullstack grad" rounded />
              <img className="col-xs-6 col-md-3" src="assets/images/bootstrap_cert.jpg" alt="Bootstap cert" rounded />
              <img className="col-xs-6 col-md-3" src="assets/images/react_cert.jpg" alt="React cert" rounded />
              <img className="col-xs-6 col-md-3" src="assets/images/reactnative_cert.jpg" alt="React cert" rounded />
              <img className="col-xs-6 col-md-3" src="assets/images/Backend_cert.jpg" alt="Backend cert" rounded />
            </Col>
          </Row>
          <hr tyle={{ marginTop: '3%', marginBottom: '3%' }} />
          <Row>
            <Col>
              <h2 className="projects-header">MERN stack</h2>
              <img className="col-sm-2" src="assets/images/MongoDB-Logo-500x313.png" alt="mongo" />
              <img className="col-sm-2" src="assets/images/node_logo.png" alt="node" />
              <img className="col-sm-2" src="assets/images/ExpressJS.png" alt="express" />
              <img className="col-sm-2" src="assets/images/react_logo.png" alt="react" />
            </Col>
          </Row>

          <hr tyle={{ marginTop: '3%', marginBottom: '3%' }} />
          <Row>
            <Col>
              <h2 className="projects-header">Programming Languages</h2>
              <img className="col-sm-4" src="assets/images/htmlslogo.png" alt="htmls logos" />
            </Col>
          </Row>
          <hr tyle={{ marginTop: '3%', marginBottom: '3%' }} />
          <Row>
            <Col>
              <h2 className="projects-header">Adobe CC</h2>
              <img className="col-sm-4" src="assets/images/adobe_logos.png" alt="adobe logos" />
            </Col>
          </Row>
          
        </Container>
      </>
    )
  }
}
export default Skills
