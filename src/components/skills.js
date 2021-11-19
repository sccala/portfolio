import React, { Component } from 'react'
import { Row, Col, Container } from 'reactstrap'

import '../App.css'

class Skills extends Component {
  render() {
    return (
      <>
        <Container style={{ paddingTop: '1%', paddingBottom: '5%' }}>
          <h2 className="projects-header">Coding Bootcamp</h2>
          <Row>
            <Col>
              <img className="enlargecert col-6 col-md-4 col-lg-2" src="assets/images/Fullstack_grad.jpg" alt="fullstack grad" id="cert" />
              <img className="enlargecert col-6 col-md-4 col-lg-2" src="assets/images/bootstrap_cert.jpg" alt="Bootstap cert" />
              <img className="enlargecert col-6 col-md-4 col-lg-2" src="assets/images/react_cert.jpg" alt="React cert" />
              <img className="enlargecert col-6 col-md-4 col-lg-2" src="assets/images/reactnative_cert.jpg" alt="React cert" />
              <img className="enlargecert col-6 col-md-4 col-lg-2" src="assets/images/Backend_cert.jpg" alt="Backend cert" />
            </Col>
          </Row>
          <hr style={{ marginTop: '3%', marginBottom: '3%' }} />
          <h2 className="projects-header">Certificates</h2>
          <Row>
            <Col>
              <img className="enlargecert col-6 col-md-4 col-lg-2" src="assets/images/ibm.jpg" alt="fullstack grad" id="cert" />
              <img className="enlargecert col-6 col-md-4 col-lg-2" src="assets/images/googleITsupport.jpg" alt="Bootstap cert" />
              <img className="enlargecert col-6 col-md-4 col-lg-2" src="assets/images/udemyjs.jpg" alt="React cert" />
              <img className="enlargecert col-6 col-md-4 col-lg-2" src="assets/images/udemyreact.jpg" alt="React cert" />
              <img className="enlargecert col-6 col-md-4 col-lg-2" src="assets/images/udemydocker.jpg" alt="Backend cert" />
              <img className="enlargecert col-6 col-md-4 col-lg-2" src="assets/images/udemyfullstack.jpg" alt="Backend cert" />
            </Col>
          </Row>
          <hr style={{ marginTop: '3%', marginBottom: '3%' }} />
          <Row>
            <Col>
              <h2 className="projects-header">Frameworks </h2>
              <img className="col-md-6" src="assets/images/mern1.png" alt="mongo" />
              <img className="col-md-6" src="assets/images/mern2.png" alt="node" />
            </Col>
          </Row>

          <hr style={{ marginTop: '3%', marginBottom: '3%' }} />
          <Row>
            <Col>
              <h2 className="projects-header">Programming Languages</h2>
              <img className="col-md-6" src="assets/images/htmlslogo.png" alt="htmls logos" />
            </Col>
          </Row>
          <hr style={{ marginTop: '3%', marginBottom: '3%' }} />
          <Row>
            <Col>
              <h2 className="projects-header">Adobe CC</h2>
              <img className="col-md-6" src="assets/images/adobe_logos.png" alt="adobe logos" />
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}
export default Skills
