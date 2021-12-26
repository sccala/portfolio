import React from 'react'

function Contact(props) {
  return (
    <>
      <section id='contact'>
        <div className='text-lg text-primary py-20 font-heading font-bold'>contact</div>
        <div className='text-center my-8'>
          <div className='text-title font-heading  font-bold text-primary'>
            Feel free to contact or connect
          </div>
          <div className='mt-8'>
            <a
              className='border rounded-lg border-primaryborder px-8 py-1 mr-1 md:mx-1 text-primary bg-tertiary hover:bg-secondary duration-100 text-sm inline-block text-center'
              href='https://twitter.com/Chi93542998'
            >
              Twitter
            </a>
            <a
              className='border rounded-lg border-primaryborder px-8 py-1 mr-1 md:mx-1 text-primary bg-tertiary hover:bg-secondary duration-100 text-sm inline-block text-center'
              href='https://www.linkedin.com/in/ca1756/'
              target='_blank'
              rel='noreferrer'
            >
              LinkedIn
            </a>

            <a
              className='border rounded-lg border-primaryborder px-8 py-1 mr-1 md:mx-1 text-primary text-sm hover:bg-secondary duration-100 inline-block bg-tertiary text-center'
              href='https://github.com/chiyomi1104'
              target='_blank'
              rel='noreferrer'
            >
              Github
            </a>
            <a
              className='border rounded-lg border-primaryborder px-8 py-1 md:mx-1 text-primary hover:bg-secondary duration-100 text-sm inline-block bg-tertiary text-center'
              href='mailto:sccala18@gmail.com'
            >
              Email
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
