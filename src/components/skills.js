import React, { Component } from 'react'
import {Row,Col} from 'reactstrap';

class Skills extends Component {
  render() {
    return (
      <>
        <Row className="page-hero d-none d-lg-block">
          <Col className="page-herotitle">Skills and certificates</Col>
        </Row>
        <div className="container-fluid">
          <p>This is skills component More contents will come</p>
        </div>
      </>
    )
  }
}
export default Skills
