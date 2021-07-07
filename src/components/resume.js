import React, { Component } from 'react'
import {Col,Row} from 'reactstrap';

class Resume extends Component {
  render() {
    return (
      <>
        <Row className="page-hero d-none d-lg-block">
          <Col className="page-herotitle">Resume</Col>
        </Row>
        <div className="container">
          <p>This is Resume component More contents will come</p>
        </div>
      </>
    )
  }
}
export default Resume
