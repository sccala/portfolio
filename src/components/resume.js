import React, { Component } from 'react'
import { Col, Row, Container, Button } from 'reactstrap'
import Resumepdf from '../public/assets/images/sunsoo_chung_resume.pdf'

class Resume extends Component {
  render() {
    return (
      <>
        <Container fluid>
          <Row className="page-hero d-none d-lg-block">
            <Col className="page-herotitle">Resume</Col>
          </Row>
          <Row>
            <Button target="_blank" download={Resumepdf} className="dlbutton">
              <a href="/assets/images/nucampsite.jpg" download>
                Click to download
              </a>
            </Button>
          </Row>
          <Row>
            <Col>Experience</Col>
            <Col>Bachelor of Design</Col>
            <Col>University of Shiga Prefrecture, Shiga, Japan 2007-2011</Col>
          </Row>
          <hr />
          <Row>
            <Col>Education</Col>
            <Col>Bachelor of Design</Col>
            <Col>University of Shiga Prefrecture, Shiga, Japan 2007-2011</Col>
          </Row>
          <hr />
          <Row>
            <Col>
              <Col>Launguage</Col>
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
