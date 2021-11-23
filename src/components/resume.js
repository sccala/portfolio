import React, { Component } from 'react'

class Resume extends Component {
  render() {
    return (
      <>
        <section id='resume'>
          <div className='text-lg text-primary py-20'>résumé</div>
          <section className='flex'>
            <div className='text-title text-primary w-2/5'>Experience</div>
            <div className='w-3/5'>
              <p className='text-sub text-primary pb-2'>2021 feb - present</p>
              <div className='text-base text-primary pb-4'>Freelance Web Developer</div>
              <p className='text-sub text-primary pb-2'>2017 dec - 2021 jan</p>
              <div className='text-base text-primary pb-4'>
                Parachute Graphic - Account Executive
              </div>

              <p className='text-sub text-primary pb-2'>2011 may - 2014 aug</p>
              <div className='text-base text-primary pb-4'>WillForce.Inc - Creative Director </div>
            </div>
          </section>

          <section className='flex pt-8'>
            <div className='text-title text-primary w-2/5'> Education</div>
            <div className='w-3/5'>
              <div className='text-base text-primary pb-4'>
                Nucamp - Full stack web and mobile developent course
              </div>

              <div className='text-base text-primary pb-4'>
                University of Shiga, Japan - Bachelor of Living Design
              </div>
            </div>
          </section>

          <div className='md:flex text-base text-primary text-center py-16 '>
            <div>
              <a
                className='rounded-lg text-sm text-gray-200 hover:bg-yellow-800 bg-accent mr-1 md:mr-2 mb-2 px-8 md:px-8 py-2 inline-block cursor-pointer duration-100 items-end'
                href='assets/images/sunsoo_chung_resume.pdf'
                download
              >
                Download Full Resume PDF
              </a>
            </div>
            <div>
              <a
                className='rounded-lg text-sm text-gray-200 hover:bg-green-900 bg-accentsub mr-1 md:mr-2 mb-2 px-11 md:px-8 py-2  cursor-pointer duration-100 items-end inline-block'
                href='assets/images/sunsoo_chung_resume.pdf'
                download
              >
                See in Full with Linkedin
              </a>
            </div>
          </div>
        </section>
      </>
    )
  }
}
export default Resume
