import React from 'react'
import { Row, Col } from 'reactstrap'

function Contact(props) {
  return (
    <>
      <Row className="page-hero d-none d-lg-block">
        <Col className="page-herotitle">Contact</Col>
      </Row>
      <div className="container">
        <div className="row row-content align-items-center">
          <div className="col-sm-4">
            <ul>
              <li>Email</li>
              <li>Phone</li>
              <li>Likedin</li>
              <li>Github</li>
              <li>Twitter</li>
              <li>Dev.to</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
