import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap'
import { myProjects } from '../shared/myprojects'

function RenderCard(myProjects) {
  return (
    <Card>
      <CardImg src={myProjects.image} alt={myProjects.name} />
      <CardBody>
        <CardTitle>{myProjects.name}</CardTitle>
        <CardText>{myProjects.description}</CardText>
      </CardBody>
    </Card>
  )
}

class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = {
      myprojects: myProjects,
    }
  }

  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md m-1">
              <RenderCard item={this.state.myProjects} />
            </div>
            <div className="col-md m-1">
              <RenderCard item={this.state.myProjects} />{' '}
            </div>
            <div className="col-md m-1">
              <RenderCard item={this.state.myProjects} />{' '}
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Projects
