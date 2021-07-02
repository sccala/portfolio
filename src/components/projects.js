import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, Row, Col, Carousel } from 'reactstrap'
import { MYPROJECTS } from '../shared/myprojects'
import '../App.css'

function RenderCard(props) {
  return (
    <Card className='cardstyle'>
      <CardImg height="102%" src={props.image} alt={props.title} rounded>
        {/* <a href="#" /> */}
      </CardImg>
      <CardBody>
        <CardTitle>{props.name}</CardTitle>
        <CardText>{props.focus}</CardText>
        <CardText>{props.description}</CardText>
        <CardText>{props.caption}</CardText>
      </CardBody>
    </Card>
  )
}

class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = {
      image: MYPROJECTS[0].image,
      name: MYPROJECTS[0].name,
      title: MYPROJECTS[0].title,
      caption: MYPROJECTS[0].description,
      focus: MYPROJECTS[0].focus,
    }
  }
  render() {
    return (
      <>
        <Row className="page-hero">
          <Col className="page-herotitle">Projects</Col>
        </Row>
        <div className="container py-4">
          <Row>
            {MYPROJECTS.map((project) => (
              <Col xs="12" md="6" lg="4">
                <RenderCard image={project.image} name={project.name} caption={project.description} focus={project.focus} />
              </Col>
            ))}
          </Row>
          
        </div>
      </>
    )
  }
}

export default Projects
