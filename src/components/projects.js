// @ts-nocheck
import React, { Component } from 'react'
import { MYPROJECTS } from '../shared/myprojects'
import '../App.css'

function RenderCard(props) {
  return (
    <>
      <a href={props.link} target="_blank" rel="noreferrer" className="projects-link">
        <div className="cardstyle" style={{ marginBottom: '5%' }}>
          <div className="cardbackgound" alt={props.title}></div>
          <div>
            <div className="cardtitle">{props.name}</div>
            <div className="cardtext"> {props.caption}</div>
            <div className="cardtext-focus">
              Focus: <strong>{props.focus}</strong>
            </div>
          </div>
        </div>
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
        <div style={{ paddingTop: '1%', paddingBottom: '5%' }}>
          <div>
            <div>
              <h2 className='projects-header'>Bootcamp Work</h2>
            </div>
          </div>
          <div>
            {MYPROJECTS.filter(project => project.type === 'bootcamp').map(project => (
              <div>
                <RenderCard
                  image={project.image}
                  name={project.name}
                  caption={project.description}
                  focus={project.focus}
                  type={project.type}
                  featured={project.featured}
                  link={project.link}
                />
              </div>
            ))}
          </div>
          <div>
            <div>
              <h2 className='projects-header'>Personal Projects</h2>
            </div>
          </div>
          <div>
            {MYPROJECTS.filter(project => project.type === 'personal').map(project => (
              <div>
                <RenderCard
                  image={project.image}
                  name={project.name}
                  caption={project.description}
                  focus={project.focus}
                  type={project.type}
                  featured={project.featured}
                  link={project.link}
                />
              </div>
            ))}
          </div>
          <div>
            <div>
              <h2 className='projects-header'>Tutorials</h2>
            </div>
          </div>
          <div>
            {MYPROJECTS.filter(project => project.type === 'tutorials').map(project => (
              <div>
                <RenderCard
                  image={project.image}
                  name={project.name}
                  caption={project.description}
                  focus={project.focus}
                  type={project.type}
                  featured={project.featured}
                  link={project.link}
                />
              </div>
            ))}
          </div>
          <div>
            <div>
              <h2 className='projects-header'>CMS Sites</h2>
            </div>
          </div>
          <div>
            {MYPROJECTS.filter(project => project.type === 'CMS').map(project => (
              <div>
                <RenderCard
                  image={project.image}
                  name={project.name}
                  caption={project.description}
                  focus={project.focus}
                  type={project.type}
                  featured={project.featured}
                  link={project.link}
                />
              </div>
            ))}
          </div>
          <div>
            <div>
              <h2 className='projects-header'>Codepen Challenges</h2>
            </div>
          </div>
          <div>
            {MYPROJECTS.filter(project => project.type === 'codepen').map(project => (
              <div>
                <RenderCard
                  image={project.image}
                  name={project.name}
                  caption={project.description}
                  focus={project.focus}
                  type={project.type}
                  featured={project.featured}
                  link={project.link}
                />
              </div>
            ))}
          </div>
        </div>
      </>
    )
  }
}

export default Projects
