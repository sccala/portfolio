import React from 'react'
import { Container, Row, Col, ListGroup } from 'react-bootstrap'

function Contact(props) {
  return (
    <Container>
      <Row style={{ paddingTop: '5%', paddingBottom: '5%' }}>
        <Col className="contact" xs={12} md={8} lg={6} className="m-auto">
          <ListGroup className="text-left">
            <ListGroup.Item className="contactbody">
              <a href="mailto: sccala18@gmail.com"> sccala18@gmail.com</a>
            </ListGroup.Item>
            <ListGroup.Item className="contactbody">
              <a href="https://www.linkedin.com/in/ca1756/" target="_blank" rel="noreferrer">
                {' '}
                LinkedIn.com
              </a>
            </ListGroup.Item>
            <ListGroup.Item className="contactbody">
              <a href="https://github.com/chiyomi1104" target="_blank" rel="noreferrer">
                {' '}
                Github.com
              </a>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default Contact
