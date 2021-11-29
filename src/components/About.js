// @ts-nocheck

export const About = () => {
  return (
    <>
      <section id='home'>
        <div className='text-center h-screen align-middle flex flex-col min-w-full overflow-hidden relative container' >
          <div className='absolute w-60 h-60 rounded-xl bg-subtle -top-5 -left-16  transform rotate-45 block z-0 '></div>
          <div className='w-40 h-40 absolute bg-subtle rounded-full top-0 right-12 block'></div>
          <div className='w-20 h-40 absolute bg-subtle rounded-full bottom-20 left-10 transform rotate-45 block z-0 '></div>
          <div className='absolute w-48 h-48 rounded-xl bg-subtle bottom-6 -right-10 transform rotate-12 block z-0 '></div>
        

          <div className='m-auto z-20'>
            <h1 className=' text-primary text-center text-lg sm:text-xl font-heading font-bold '>
              Hello, I'm Chase Chung <br />
              Web developer
            </h1>
            <p className='pt-4 font-bold text-title text-primary'>
              with full stack, e-commerce, and mobile experience{' '}
            </p>
            <p className='pt-8 font-body text-primary'>
              Self-taught web developer fueled by 🍣 . <br />I proficiently develop websites and
              mobile apps using React Typescript, Tailwind, sometimes Node, Mongo, Express, and React Native.
            </p>

            <div className='pt-20 z-0'>
              <a href='#projects'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='mx-auto h-10 w-10 animate-bounce text-primary'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='1'
                    d='M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z'
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
