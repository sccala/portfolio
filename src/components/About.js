// @ts-nocheck

export const About = () => {
  return (
    <>
      <section id='home'>
        <div className='text-center pt-24 py-16 '>
          <h1 className='text-primary text-center text-lg sm:text-xl font-heading font-bold w-full '>
            Hello, I'm Chase Chung
          </h1>
          <p className='pt-8 font-body text-primary'>
            Self-taught web developer fueled by 🍣 . <br />I proficiently develop websites and
            mobile apps using React Typescript, Tailwind, sometimes Node, Mongo, Express.
          </p>

          <div className='pt-20 z-0'>
            <a href='#about'>
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
      </section>
    </>
  )
}
