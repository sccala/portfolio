import React, { Component } from 'react'
import { Row, Col, Container } from 'reactstrap'

import '../App.css'

class Skills extends Component {
  render() {
    return (
      <>
        <Container fluid>
          <Row className="page-hero d-none d-lg-block">
            <Col className="page-herotitle">Skills and certificates</Col>
          </Row>
          <Row>
            <Col>
              <h2 className="projects-header">Coding Bootcamp</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              
            </Col>
          </Row>
          <Row>
            <Col>
              <h2 className="projects-header">MERN stack</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <h2 className="projects-header">Adobe CC</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <h2 className="projects-header">Certificates</h2>
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}
export default Skills
