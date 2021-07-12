import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, Row, Col, Container } from 'reactstrap'
import { MYPROJECTS } from '../shared/myprojects'
import '../App.css'

function RenderCard(props) {
  return (
    <>
      <a href={props.link} target="_blank" rel="noreferrer" className="projects-link">
        <Card className="cardstyle">
          <CardImg style={{ borderTopRightRadius: '20px', borderTopLeftRadius: '20px' }} src={props.image} alt={props.title}></CardImg>
          <CardBody>
            <CardTitle className="cardtitle">{props.name}</CardTitle>
            <CardText className="cardtext"> {props.caption}</CardText>
            <CardText className="cardtext-focus">
              Focus: <strong>{props.focus}</strong>
            </CardText>
          </CardBody>
        </Card>
      </a>
    </>
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
        <Container fluid>
          <Row className="align-items-center page-hero d-none d-lg-block ">
            <Col>
              <h3 className="page-herotitle align-items-center">Projects</h3>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
              <h2 className="projects-header">Bootcamp Work</h2>
            </Col>
          </Row>
          <Row>
            {MYPROJECTS.filter((project) => project.type === 'bootcamp').map((project) => (
              <Col xs="12" md="6">
                <RenderCard
                  image={project.image}
                  name={project.name}
                  caption={project.description}
                  focus={project.focus}
                  type={project.type}
                  featured={project.featured}
                  link={project.link}
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
              <Col xs="12" md="6">
                <RenderCard
                  image={project.image}
                  name={project.name}
                  caption={project.description}
                  focus={project.focus}
                  type={project.type}
                  featured={project.featured}
                  link={project.link}
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
              <Col xs="12" md="6">
                <RenderCard
                  image={project.image}
                  name={project.name}
                  caption={project.description}
                  focus={project.focus}
                  type={project.type}
                  featured={project.featured}
                  link={project.link}
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
              <Col xs="12" md="6">
                <RenderCard
                  image={project.image}
                  name={project.name}
                  caption={project.description}
                  focus={project.focus}
                  type={project.type}
                  featured={project.featured}
                  link={project.link}
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
