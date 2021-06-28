import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap'
import { myProjects } from '../shared/myprojects'

function RenderCard({ item }) {
  return (
    <Card>
      <CardImg src={item.image} alt={item.name} />
      <CardBody>
        <CardTitle>{item.name}</CardTitle>
        <CardText>{item.description}</CardText>
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
            <div className="row">
              <div className="col-md m-1">
                <RenderCard item={this.state.myProjects} />{' '}
              </div>
              <div className="row">
                <div className="col-md m-1">
                  <RenderCard item={this.state.myProjects[3]} />{' '}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Projects
