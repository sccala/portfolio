import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'

class Footer extends Component {
  render() {
    return (
      <footer>
        <Container fluid>
          <Row className=" site-footer align-items-center ">
            <Col className xs="12" md="6">
              Sunsoo Chung
            </Col>
            <Col  xs="12" md="6">
              <a style={{ color: 'white', fontWeight: '300' }} role="button" className="btn btn-link" href="mailto:sccala18@gmail.com">
                sccala18@gmail.com
              </a>
            </Col>
          </Row>
        </Container>
      </footer>
    )
  }
}
export default Footer
