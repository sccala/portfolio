import React, { Component } from 'react'
import {Col,Row, Container} from 'reactstrap';

class Resume extends Component {
  render() {
    return (
      <>
        <Container fluid>
          <Row className="page-hero d-none d-lg-block">
            <Col className="page-herotitle">Resume</Col>
          </Row>
          <Row>
            <Col>
              <h2 className="projects-header">Experience</h2>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col>
              <Col className="projects-header">Education</Col>
              <Col>Bachelor od Design</Col>
              <Col>University of Shiga Prefrecture, Shiga, Japan 2007-2011</Col>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col>
              <Col className="projects-header">Launguage</Col>
              <Col>English</Col>
              <Col>Professional working proficiency</Col>
              <Col>Japanese</Col>
              <Col>Native proficiency</Col>
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}
export default Resume
