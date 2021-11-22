import React, { Component } from 'react'

class Resume extends Component {
  render() {
    return (
      <>
        <div className='text-lg text-primary pt-20'>résumé</div>

        <hr style={{ marginTop: '3%', marginBottom: '3%' }} />
        <div>
          <div className='text-title text-primary'>Certificates</div>
          <div className='text-base text-primary'>2020-2021</div>
        </div>
        <div className='text-base text-primary'>
          <div>- IBM Data science specialization course (Python)</div>
          <div>- Google Technical Support Fundamental</div>
          <div>
            - Udemy Fullstack Web Engineer course (Complete Web Developer 2.0 Japanese ver.) Hiroki
            Inoue
          </div>
          <div>- Udemy React for biginners from the basic modern JS, Jake</div>
          <div>
            - Udemy Logically explain how to become The Javascript Intermidiate level programmer{' '}
          </div>
          <div>- Udemy Docker from zero, Kame Reon</div>
        </div>
        <hr style={{ marginTop: '3%', marginBottom: '3%' }} />
        <div>
          <div className='text-title text-primary'>Professional Experience</div>
        </div>
        <div>
          <div className='text-title text-primary'>U.S. JACLEAN</div>
          <div className='text-base text-primary'>Assistant Design Manager / Marketing Lead</div>
          <div className='text-base text-primary'>2020-2021</div>
          <div className='text-base text-primary'>
            Managed design department team of 4 to design packaging, brochures and flyers. Developed
            5 e-commerce websites with CMS largest site generating 500 unique daily views and $25k
            sales monthly.
          </div>
        </div>

        <hr style={{ marginTop: '3%', marginBottom: '3%' }} />
        <div>
          <div className='text-title text-primary'>EDUCATION</div>
        </div>
        <div className='text-title text-primary'>NuCamp</div>
        <div>
          <div className='text-base text-primary'>
            {' '}
            NuCamp Coding Bootcamp Full Stack and Mobile Development
          </div>
          <div>
            <div className='text-base text-primary'>
              Jan 2021 - 6 month Graduated
              <div>- Collaborated on team coding assignment</div>
              <div className='text-base text-primary'></div>
              <div>- Learned frontend and backend development tool</div>
              <div className='text-base text-primary'></div>
              <div>- Developed 4 responsive projects/applications start to finish</div>
            </div>
          </div>
        </div>
        <div>
          <div className='text-title text-primary'>University of Shiga, Japan</div>
          <div className='text-base text-primary'>Bachelor of Living Design</div>
        </div>

        <hr style={{ marginTop: '3%', marginBottom: '3%' }} />
        <div>
          <div className='text-title text-primary'>LAUNGUAGE</div>
        </div>
        <div>
          <div>English(Professional)</div>
          <div>Japanese(native)</div>
        </div>

        <div className='mx-auto' style={{ paddingTop: '5%' }}></div>
        <div className=''>
          <a href='/images/sunsoo_chung_resume.pdf' download>
            Download PDF
          </a>
        </div>
      </>
    )
  }
}
export default Resume
