import React, { Component } from 'react'

class Resume extends Component {
  render() {
    return (
      <>
        <div className="resumebody" style={{ paddingTop: '5%', paddingBottom: '5%' }}>
          <div>
            <div className="resumecategory" >
              EXPERIENCE
            </div>
            <div className="resumecompany" >
              NuCamp
            </div>
            <div >
              <div className="resumetitle"> NuCamp Coding Bootcamp Full Stack Course</div>
            </div>
          </div>
          <div>
            <div className="resumedate" >
              Jan 2021 - 6 month Graduated
            </div>
            <div >- divlaborated on team coding assignment</div>
            <div className="resumedate" ></div>
            <div >- Learned frontend and backend development tool</div>
            <div className="resumedate" ></div>
            <div >- Developed 4 responsive projects/applications start to finish</div>
          </div>

          <hr style={{ marginTop: '3%', marginBottom: '3%' }} />
          <div>
            <div className="resumecategory" >
              CERTIFICATES
            </div>
            <div className="resumedate" >
              2020-2021
            </div>
          </div>
          <div className="resumecompany">
            <div >- IBM Data science specialization course (Python)</div>
            <div >- Google Technical Support Fundamental</div>
            <div >- Udemy Fullstack Web Engineer course (Complete Web Developer 2.0 Japanese ver.) Hiroki Inoue</div>
            <div >- Udemy React for biginners from the basic modern JS, Jake</div>
            <div >- Udemy Logically explain how to become The Javascript Intermidiate level programmer </div>
            <div >- Udemy Docker from zero, Kame Reon</div>
          </div>
          <hr style={{ marginTop: '3%', marginBottom: '3%' }} />
          <div>
            <div className="resumecategory">
              WORK
            </div>
          </div>
          <div>
            <div className="resumecompany" >
              U.S. JACLEAN
            </div>
            <div className="resumetitle" >
              Assistant Design Manager / Marketing Lead
            </div>
            <div className="resumedate" >
              2020-2021
            </div>
            <div >
              Managed design department team of 4 to design packaging, brochures and flyers. Developed 5 e-commerce websites with CMS largest site
              generating 500 unique daily views and $25k sales monthly.
            </div>
       
          </div>
          <div style={{ paddingTop: '2%' }}>
            <div className="resumecompany" >
              Nissin International Transport
            </div>
            <div className="resumetitle" >
              Business Planning and Complicance Coordinator
            </div>
            <div className="resumedate">
              2020-2021
            </div>
            <div >Prepared and presented reports to executive management outlining key project insights to inform strategic decisions</div>
          </div>
          <div style={{ paddingTop: '2%' }}>
            <div className="resumecompany" >
              Parachute Inc
            </div>
            <div className="resumetitle" >
              Account Executive
            </div>
            <div className="resumedate">
              2020-2021
            </div>
            <div >
              Coordinated multicultural marketing campaigns for US and international companies targeting Vietnamese, Korean, and Japanese communities
              in the US
            </div>
          </div>

          <div style={{ paddingTop: '2%' }}>
            <div className="resumecompany" >
              Willforce Inc
            </div>
            <div className="resumetitle" >
              Creative Director
            </div>
            <div className="resumedate" >
              2020-2021
            </div>
            <div >
              Directed and supervise a team of 10 – 15 to oversee global marketing for Japanese global companies included Panasonic global, Kyocera,
              and Sony
            </div>
          </div>
          <hr style={{ marginTop: '3%', marginBottom: '3%' }} />
          <div>
            <div className="resumecategory" >
              EDUCATION
            </div>
          </div>
          <div>
            <div className="resumecompany" >
              University of Shiga, Japan
            </div>
            <div  className="resumetitle">
              Bachelor of Living Design
            </div>
            <div className="resumedate" >
              2007-2011
            </div>
          </div>
          <hr style={{ marginTop: '3%', marginBottom: '3%' }} />
          <div>
            <div className="resumecategory">SKILLS</div>
          </div>
          <div>
            <div  className="resumecompany">
              Programming Languages
            </div>
            <div>HTML, JSX, CSS, Bootstrap, Javascript, React, Redux, Node, Express, MongoDB</div>
            <div  className="resumecompany" style={{ paddingTop: '2%' }}>
              Other
            </div>
            <div>- Adobe Illustrator, Photoshop, InDesign</div>
          </div>

          <hr style={{ marginTop: '3%', marginBottom: '3%' }} />
          <div>
            <div className="resumecategory">LAUNGUAGE</div>
          </div>
          <div>
            <div >English(Professional)</div>
            <div >Japanese(native)</div>
          </div>

          <div className="mx-auto" style={{ paddingTop: '5%' }}></div>
          <div className="">
            <a href="/images/sunsoo_chung_resume.pdf" download >
              Download PDF
            </a>
          </div>
        </div>
      </>
    )
  }
}
export default Resume
