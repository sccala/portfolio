import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, Row, Col, Container } from 'reactstrap'
import { MYPROJECTS } from '../shared/myprojects'
import '../App.css'

function RenderCard(props) {
  return (
    <Card className="cardstyle">
      <CardImg height="102%" src={props.image} alt={props.title} rounded>
        
      </CardImg>
      <CardBody>
        <CardTitle className='cardtitle'>{props.name}</CardTitle>
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
      type: MYPROJECTS[0].type,
      featured: MYPROJECTS[0].featured,
      link: MYPROJECTS[0].link,
    }
  }
  render() {
    return (
      <>
        <Container fluid pb-4>
          <Row className="page-hero d-none d-lg-block">
            <Col className="align-self-center page-herotitle">Projects</Col>
          </Row>
          <Row>
            <Col>
              <h2 className="projects-header">Bootcamp Work</h2>
            </Col>
          </Row>
          <Row>
            {MYPROJECTS.filter((project) => project.type === 'bootcamp').map((project) => (
              <Col xs="12" md="6" lg="4">
                <RenderCard
                  image={project.image}
                  name={project.name}
                  caption={project.description}
                  focus={project.focus}
                  type={project.type}
                  featured={project.featured}
                />
              </Col>
            ))}
          </Row>
          <Row>
            <Col>
              <h2 className="projects-header">Personal Projects</h2>
            </Col>
          </Row>
          <Row>
            {MYPROJECTS.filter((project) => project.type === 'personal').map((project) => (
              <Col xs="12" md="6" lg="4">
                <RenderCard
                  image={project.image}
                  name={project.name}
                  caption={project.description}
                  focus={project.focus}
                  type={project.type}
                  featured={project.featured}
                />
              </Col>
            ))}
          </Row>
          <Row>
            <Col>
              <h2 className="projects-header">Tutorials</h2>
            </Col>
          </Row>
          <Row>
            {MYPROJECTS.filter((project) => project.type === 'tutorials').map((project) => (
              <Col xs="12" md="6" lg="4">
                <RenderCard
                  image={project.image}
                  name={project.name}
                  caption={project.description}
                  focus={project.focus}
                  type={project.type}
                  featured={project.featured}
                />
              </Col>
            ))}
          </Row>
          <Row>
            <Col>
              <h2 className="projects-header">Codepen Challenges</h2>
            </Col>
          </Row>
          <Row>
            {MYPROJECTS.filter((project) => project.type === 'codepen').map((project) => (
              <Col xs="12" md="6" lg="4">
                <RenderCard
                  image={project.image}
                  name={project.name}
                  caption={project.description}
                  focus={project.focus}
                  type={project.type}
                  featured={project.featured}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </>
    )
  }
}

export default Projects
