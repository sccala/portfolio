import React from 'react'

function Contact(props) {
  return (
    <>
      <section id='contact'>
        <div className='text-lg text-primary py-10'>contact</div>
        <div className='text-center md:flex my-8'>
          <div className='text-base text-primary md:text-left  md:w-1/5'>
            Got any question? Let's chat (or connect)
          </div>
          <div className='mt-8 md:w-4/5 justify-content-center'>
            <a
              className='border rounded-lg border-primaryborder px-4 py-1 mr-1 md:mx-4 text-primary bg-tertiary hover:bg-secondary duration-100 text-sm inline-block'
              href='https://twitter.com/Chi93542998'
            >
              Twitter
            </a>

            <a
              className='border rounded-lg border-primaryborder px-4 py-1 mr-1 md:mx-4 text-primary bg-tertiary hover:bg-secondary duration-100 text-sm inline-block'
              href='https://www.linkedin.com/in/ca1756/'
              target='_blank'
              rel='noreferrer'
            >
              LinkedIn
            </a>

            <a
              className='border rounded-lg border-primaryborder px-4 py-1 mr-1 md:mx-4 text-primary text-sm hover:bg-secondary duration-100 inline-block bg-tertiary'
              href='https://github.com/chiyomi1104'
              target='_blank'
              rel='noreferrer'
            >
              Github
            </a>
            <a
              className='border rounded-lg border-primaryborder px-4 py-1 md:mx-4 text-primary hover:bg-secondary duration-100 text-sm inline-block bg-tertiary'
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
