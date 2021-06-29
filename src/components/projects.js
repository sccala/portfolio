import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap'
import { MYPROJECTS } from '../shared/myprojects'

// const myProjects = MYPROJECTS.filter((a) => a.featured)[0]
// const projectTitle = MYPROJECTS.name
// const projectImage = MYPROJECTS.image
// const projectCaption = MYPROJECTS.description

function RenderCard(props) {
  return (
    <Card>
      <CardImg src={props.image} alt={props.title} />
      <CardBody>
        <CardTitle>{props.name}</CardTitle>
        <CardText>{props.description}</CardText>
      </CardBody>
    </Card>
  )
}

class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = {
      image: MYPROJECTS.image,
      name: MYPROJECTS.name,
      title: MYPROJECTS.title,
      caption: MYPROJECTS.description,
    }
  }
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md m-1">
              <RenderCard image={this.state.image} name={this.state.name} caption={this.state.description} />
            </div>
            <div className="col-md m-1">
              <RenderCard image={this.state.image} name={this.state.name} caption={this.state.description} />
            </div>
            <div className="col-md m-1">
              <RenderCard image={this.state.image} name={this.state.name} caption={this.state.description} />
            </div>
          </div>
        </div>
      </>
    )
  }
}


export default Projects
