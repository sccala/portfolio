import React from 'react'
import { Container, Row, Col, ListGroup } from 'react-bootstrap'

function Contact(props) {
  return (
    <Container style={{ height: '80vh' }}>
      <Row style={{ paddingTop: '5%', paddingBottom: '5%' }}>
        <Col className='contact mx-auto' xs='12' md='8' lg='6'>
          <ListGroup className='mt-8 text-left'>
            <ListGroup.Item className='contactbody'>
              <a href='mailto: sccala18@gmail.com'> sccala18@gmail.com</a>
            </ListGroup.Item>
            <ListGroup.Item className='contactbody'>
              <a href='https://www.linkedin.com/in/ca1756/' target='_blank' rel='noreferrer'>
                LinkedIn.com
              </a>
            </ListGroup.Item>
            <ListGroup.Item className='contactbody'>
              <a href='https://github.com/chiyomi1104' target='_blank' rel='noreferrer'>
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
