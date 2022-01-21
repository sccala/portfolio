import React, { Component } from 'react'

class Resume extends Component {
  render() {
    return (
      <>
        <section id='resume'>
          <div className='text-lg text-primary pt-40 pb-20 font-heading font-bold'>résumé</div>
          <div className='flex pt-20'>
            <div className='text-title text-primary w-2/5 font-bold font-heading'>Experience</div>
            <div className='w-3/5'>
              <p className='text-sub text-primary pb-2'>2022 Jan - present</p>
              <div className='text-base text-primary pb-8'>
                Mobile Developer - The Noisemaker
              </div>
              <p className='text-sub text-primary pb-2'>2021 feb - present</p>
              <div className='text-base text-primary pb-8'>Web Developer - Freelance</div>
              <p className='text-sub text-primary pb-2'>2017 dec - 2021 jan</p>
              <div className='text-base text-primary pb-8'>
                Assistant Design Manager - U.S. JACLEAN, INC.
              </div>
            </div>
          </div>

          <div className='flex pt-8 '>
            <div className='text-title text-primary w-2/5 font-bold font-heading'> Education</div>
            <div className='w-3/5'>
              <div className='text-base text-primary pb-4'>
                Nucamp - Full stack web and mobile development course
              </div>
              {/* 
              <div className='text-base text-primary pb-4'>
                University of Shiga, Japan - Bachelor of Living Design
              </div> */}
            </div>
          </div>

          <div className=' text-base text-primary text-center py-16 '>
            <a
              className='rounded-lg text-sm text-gray-200 hover:bg-yellow-800 bg-accent mr-1 md:mr-2 mb-2 px-8 md:px-8 py-2 inline-block cursor-pointer duration-100 items-end'
              href='assets/images/ChaseChung_2022JAN_light.pdf'
              download
            >
              Full Resume Light Version
            </a>

            <a
              className='rounded-lg text-sm text-gray-200 hover:bg-green-900 bg-accentsub mr-1 md:mr-2 mb-2 px-8 md:px-8 py-2 inline-block cursor-pointer duration-100 items-end'
              href='assets/images/ChaseChung_2022JAN_dark.pdf'
              download
            >
              Full Resume Dark Version
            </a>
          </div>
        </section>
      </>
    )
  }
}
export default Resume
