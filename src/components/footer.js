import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'

class Footer extends Component {
  render() {
    return (
      <footer>
        <Container fluid>
          <Row className="site-footer align-items-center">
            <Col xs="12" md="4">
              Sunsoo Chung
            </Col>
            <Col xs="12" md="4">
              <a className="btn btn-social-icon btn-github" href="#">
                <i class="fa fa-github"></i>
              </a>
              <a className="btn btn-social-icon btn-twitter" href="#">
                <i className="fa fa-twitter" />
              </a>
            </Col>
            <Col xs="12" md="4">
              <a role="button" className="btn btn-link" href="mailto:sccala18@gmail.com">
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
