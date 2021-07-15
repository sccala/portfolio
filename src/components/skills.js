import React, { Component } from 'react'
import { Row, Col, Container } from 'reactstrap'

import '../App.css'

function enlargeImg(img){
  const myImg = document.getElementById('cert')
  const currWidth = myImg.clientWidth
  if (currWidth < 500) {
    myImg.style.width = currWidth + 200 + 'px'
  } else {
    return;
  }
}

class Skills extends Component {
  render() {
    return (
      <>
        <Container style={{ paddingTop: '1%', paddingBottom: '5%' }}>
          <h2 className="projects-header">Coding Bootcamp</h2>
          <Row>
            <Col>
              <img className="col-6 col-md-4 col-lg-2" src="assets/images/Fullstack_grad.jpg" alt="fullstack grad" onClick={enlargeImg()} id='cert'/>
              <img className="col-6 col-md-4 col-lg-2" src="assets/images/bootstrap_cert.jpg" alt="Bootstap cert" />
              <img className="col-6 col-md-4 col-lg-2" src="assets/images/react_cert.jpg" alt="React cert" />
              <img className="col-6 col-md-4 col-lg-2" src="assets/images/reactnative_cert.jpg" alt="React cert" />
              <img className="col-6 col-md-4 col-lg-2" src="assets/images/Backend_cert.jpg" alt="Backend cert" />
            </Col>
          </Row>
          <hr tyle={{ marginTop: '3%', marginBottom: '3%' }} />
          <Row>
            <Col>
              <h2 className="projects-header">Frameworks </h2>
              <img className="col-md-6" src="assets/images/mern1.png" alt="mongo" />
              <img className="col-md-6" src="assets/images/mern2.png" alt="node" />
            </Col>
          </Row>

          <hr tyle={{ marginTop: '3%', marginBottom: '3%' }} />
          <Row>
            <Col>
              <h2 className="projects-header">Programming Languages</h2>
              <img className="col-md-6" src="assets/images/htmlslogo.png" alt="htmls logos" />
            </Col>
          </Row>
          <hr tyle={{ marginTop: '3%', marginBottom: '3%' }} />
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
