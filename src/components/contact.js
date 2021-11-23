import React from 'react'

function Contact(props) {
  return (
    <>
      <section id='contact'>
        <div className='text-lg text-primary py-20'>contact</div>
        <div className='mt-8 text-center'>
          <a
            className='border rounded-lg border-primaryborder px-4 py-2 mx-8 text-primary text-base inline-block'
            href='mailto:sccala18@gmail.com'
          >
            {' '}
            Email
          </a>

          <a
            className='border rounded-lg border-primaryborder px-4 py-2 mx-8 text-primary text-base inline-block'
            href='https://www.linkedin.com/in/ca1756/'
            target='_blank'
            rel='noreferrer'
          >
            LinkedIn
          </a>

          <a
            className='border rounded-lg border-primaryborder px-4 py-2 mx-8 text-primary text-base inline-block'
            href='https://github.com/chiyomi1104'
            target='_blank'
            rel='noreferrer'
          >
            Github
          </a>
        </div>
      </section>
    </>
  )
}

export default Contact
