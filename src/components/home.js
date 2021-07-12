import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'reactstrap'

class Home extends Component {
  render() {
    return (
      <>
        <Container>
          <Row style={{ padding: '10% 0%' }}>
            <Col xs={4} md={6}>
              <img src="assets/images/homepic3.jpg" alt="Profile image" rounded />
            </Col>
            <Col xs={8} md={6} className="introductionbody">
              Hello! My name is Sunsoo Chung and I am a web developer. Mostly, I like to deconstruct things, figure out how they work, and make cool
              stuff from scratch.
              <br />I create responsive and efficient websites with HTML, CSS, Bootstrap, and JavaScript. I am also comfortable using frameworks such
              as React and React Native. I've grown to love React and React Native for their reusable components, and I can find my way around a Redux
              store for state management. I also have experience building a REST API with Express and MongoDB.
            
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}
export default Home
