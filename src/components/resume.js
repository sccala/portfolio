import React, { Component } from 'react'
import { Col, Row, Container, Button } from 'reactstrap'

class Resume extends Component {
  render() {
    return (
      <>
        <Container fluid>
          <Row className="page-hero d-none d-lg-block">
            <Col className="page-herotitle">Resume</Col>
          </Row>
        </Container>
        <Container className="resumebody" style={{ paddingTop: '5%', paddingBottom: '5%' }}>
          <Row>
            <Col className="resumecategory" lg="12">
              EXPERIENCE
            </Col>
            <Col className="resumecompany" sm="4">
              NuCamp
            </Col>
            <Col sm="8">
              <div className="resumetitle"> NuCamp Coding Bootcamp Full Stack Course</div>
            </Col>
          </Row>
          <Row>
            <Col className="resumedate" sm="4">
              Jan 2021 - 6 month Graduated
            </Col>
            <Col sm="8">- Collaborated on team coding assignment</Col>
            <Col className="resumedate" sm="4"></Col>
            <Col sm="8">- Learned frontend and backend development tool</Col>
            <Col className="resumedate" sm="4"></Col>
            <Col sm="8">- Developed 4 responsive projects/applications start to finish</Col>
          </Row>

          <hr tyle={{ marginTop: '3%', marginBottom: '3%' }} />
          <Row>
            <Col className="resumecategory" lg="12">
              CERTIFICATES
            </Col>
            <Col className="resumedate" sm="4">
              2020-2021
            </Col>
          </Row>
          <Row className="resumecompany">
            <Col sm="12">- IBM Data science specialization course (Python)</Col>
            <Col sm="12">- Google Technical Support Fundamental</Col>
            <Col sm="12">- Udemy Fullstack Web Engineer course (Complete Web Developer 2.0 Japanese ver.) Hiroki Inoue</Col>
            <Col sm="12">- Udemy React for biginners from the basic modern JS, Jake</Col>
            <Col sm="12">- Udemy Logically explain how to become The Javascript Intermidiate level programmer </Col>
            <Col sm="12">- Udemy Docker from zero, Kame Reon</Col>
          </Row>
          <hr style={{ marginTop: '3%', marginBottom: '3%' }} />
          <Row>
            <Col className="resumecategory" lg="12">
              WORK
            </Col>
          </Row>
          <Row>
            <Col className="resumecompany" sm="4">
              U.S. JACLEAN
            </Col>
            <Col className="resumetitle" sm="8">
              Assistant Design Manager / Marketing Lead
            </Col>
            <Col className="resumedate" sm="4">
              2020-2021
            </Col>
            <Col sm="8">
              Managed design department team of 4 to design packaging, brochures and flyers. Developed 5 e-commerce websites with CMS largest site
              generating 500 unique daily views and $25k sales monthly.
            </Col>
            <Col sm="4" />
            <Col sm="8"></Col>
          </Row>
          <Row style={{ paddingTop: '2%' }}>
            <Col className="resumecompany" sm="4">
              Nissin International Transport
            </Col>
            <Col className="resumetitle" sm="8">
              Business Planning and Complicance Coordinator
            </Col>
            <Col className="resumedate" sm="4">
              2020-2021
            </Col>
            <Col sm="8">Prepared and presented reports to executive management outlining key project insights to inform strategic decisions</Col>
          </Row>
          <Row style={{ paddingTop: '2%' }}>
            <Col className="resumecompany" sm="4">
              Parachute Inc
            </Col>
            <Col className="resumetitle" sm="8">
              Account Executive
            </Col>
            <Col className="resumedate" sm="4">
              2020-2021
            </Col>
            <Col sm="8">
              Coordinated multicultural marketing campaigns for US and international companies targeting Vietnamese, Korean, and Japanese communities
              in the US
            </Col>
          </Row>

          <Row style={{ paddingTop: '2%' }}>
            <Col className="resumecompany" sm="4">
              Willforce Inc
            </Col>
            <Col className="resumetitle" sm="8">
              Creative Director
            </Col>
            <Col className="resumedate" sm="4">
              2020-2021
            </Col>
            <Col sm="8">
              Directed and supervise a team of 10 – 15 to oversee global marketing for Japanese global companies included Panasonic global, Kyocera,
              and Sony
            </Col>
          </Row>
          <hr style={{ marginTop: '3%', marginBottom: '3%' }} />
          <Row>
            <Col className="resumecategory" lg="12">
              EDUCATION
            </Col>
          </Row>
          <Row>
            <Col className="resumecompany" sm="4">
              University of Shiga, Japan
            </Col>
            <Col sm="8" className="resumetitle">
              Bachelor of Living Design
            </Col>
            <Col className="resumedate" sm="4">
              2007-2011
            </Col>
          </Row>
          <hr style={{ marginTop: '3%', marginBottom: '3%' }} />
          <Row>
            <Col className="resumecategory">SKILLS</Col>
          </Row>
          <Row>
            <Col sm="12" className="resumecompany">
              Programming Languages
            </Col>
            <Col>
               HTML, JSX, CSS, Bootstrap, Javascript, React, Redux, Node, Express, MongoDB
            </Col>
            <Col sm="12" className="resumecompany">
              Other
            </Col>
            <Col>- Adobe Illustrator, Photoshop, InDesign</Col>
          </Row>

          <hr style={{ marginTop: '3%', marginBottom: '3%' }} />
          <Row>
            <Col className="resumecategory">LAUNGUAGE</Col>
          </Row>
          <Row>
            <Col xs="6">English(Professional)</Col>
            <Col xs="6">Japanese(native)</Col>
          </Row>

          <Row className="mx-auto" style={{ paddingTop: '5%' }}></Row>
          <Button className="dlbutton">
            <a href="/images/sunsoo_chung_resume.pdf" download style={{ color: 'white' }}>
              Download PDF
            </a>
          </Button>
        </Container>
      </>
    )
  }
}
export default Resume
