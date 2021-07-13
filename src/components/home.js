import React, { Component } from 'react'
import { Container, Row, Col, Card, Button, CardImg, CardBody, CardHeader } from 'reactstrap'

class Home extends Component {
  render() {
    return (
      <>
        <Container>
          <Row style={{ paddingTop: '5%', paddingBottom: '5%' }}>
            <Col xs="4" md="6">
              <img className="homepic" src="assets/images/homepic3.jpg" alt="Profile image" />
            </Col>
            <Col style={{ paddingTop: '5%'}} xs="8" md="6">
              <p className="introductiontitle">Hello! My name is Sunsoo Chung and I am a web developer.</p>
              <p className="introductionbody">
                Mostly, I like to deconstruct things, figure out how they work, and make cool stuff from scratch.
                <br />I create responsive and efficient websites with HTML, CSS, Bootstrap, and JavaScript. I am also comfortable using frameworks
                such as React and React Native. I've grown to love React and React Native for their reusable components, and I can find my way around
                a Redux store for state management. I also have experience building a REST API with Express and MongoDB.
              </p>
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}
export default Home
