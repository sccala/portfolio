import { useState } from 'react'
import { useDarkMode } from '../hooks/useDarkMode'

export const Navbar = () => {
  const [isDark, setIsDark] = useDarkMode()
  const [navbarOpen, setNavbarOpen] = useState(false)
  return (
    <section className='bg-primary border-b-0 '>
      <header className='container text-primary text-base sticky top-0 z-40'>
        <div className='mx-auto py-4 flex-col sm:flex-row hidden sm:flex items-center sticky'>
          <div
            className='flex font-medium items-center text-primary md:sm-0 cursor-pointer'
            onClick={() => {}}
          >
            {isDark ? (
              <svg
                width='20px'
                height='20px'
                viewBox='0 0 15 15'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M10 5.5L9.93198 5.43198C9.33524 4.83524 8.52589 4.5 7.68198 4.5H7.5C5.84315 4.5 4.5 5.84315 4.5 7.5C4.5 9.15685 5.84315 10.5 7.5 10.5H7.68198C8.52589 10.5 9.33524 10.1648 9.93198 9.56802L10 9.5M1.5 10.5V4.5L7.5 1L13.5 4.5V10.5L7.5 14L1.5 10.5Z'
                  stroke='currentColor'
                />
              </svg>
            ) : (
              <svg
                width='20px'
                height='20px'
                viewBox='0 0 15 15'
                fill='currentColor'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M7.5 0.421143L14 4.21281V10.7872L7.5 14.5788L1 10.7872V4.21281L7.5 0.421143ZM7.5 4C5.567 4 4 5.567 4 7.5C4 9.433 5.567 11 7.5 11H7.68198C8.6585 11 9.59503 10.6121 10.2855 9.92157L10.3536 9.85355L9.64645 9.14645L9.57843 9.21447C9.07546 9.71744 8.39329 10 7.68198 10H7.5C6.11929 10 5 8.88071 5 7.5C5 6.11929 6.11929 5 7.5 5H7.68198C8.39329 5 9.07546 5.28257 9.57843 5.78553L9.64645 5.85355L10.3536 5.14645L10.2855 5.07843C9.59503 4.38792 8.6585 4 7.68198 4H7.5Z'
                  fill='currentColor'
                />
              </svg>
            )}

            <span className='ml-3 text-primary cursor-pointer' onClick={() => {}}>
              Chase Chung
            </span>
          </div>
          <nav className='sm:ml-auto flex flex-wrap items-center text-base justify-center cursor-pointer'>
            <a href='#home' className='mr-5 text-primary hover:text-secondary duration-300'>
              Home
            </a>
            <a href='#projects' className='mr-5 text-primary hover:text-secondary'>
              Projects
            </a>
            <a href='#skills' className='mr-5 text-primary hover:text-secondary'>
              Skills
            </a>
            <a href='#contact' className='mr-5 text-primary hover:text-secondary'>
              Resume
            </a>
          </nav>
          <button className='items-center bg-primary text-primary border-0 border-primaryborder py-1 px-2  hover:bg-secondary rounded text-sm mt-4 sm:mt-0'>
            Contact
          </button>
          <button
            className='items-center border-0 border-color-secondary py-1 px-1 mx-2 text-primary rounded-full text-base mt-4 sm:mt-0'
            // @ts-ignore
            onClick={isDark => setIsDark(prevState => !prevState)}
          >
            {isDark ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-6 h-6 items-center'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='1.5'
                  d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
                />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-6 h-6 '
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='1.5'
                  d='M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z'
                />
              </svg>
            )}
          </button>
        </div>
        {/* mobile navbar */}
        <div className='cursor-pointer'>
          <div className='text-primary flex justify-between sm:hidden px-8 py-4'>
            <div className='flex items-center'>
              {isDark ? (
                <svg
                  width='20px'
                  height='20px'
                  viewBox='0 0 15 15'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M10 5.5L9.93198 5.43198C9.33524 4.83524 8.52589 4.5 7.68198 4.5H7.5C5.84315 4.5 4.5 5.84315 4.5 7.5C4.5 9.15685 5.84315 10.5 7.5 10.5H7.68198C8.52589 10.5 9.33524 10.1648 9.93198 9.56802L10 9.5M1.5 10.5V4.5L7.5 1L13.5 4.5V10.5L7.5 14L1.5 10.5Z'
                    stroke='currentColor'
                  />
                </svg>
              ) : (
                <svg
                  width='20px'
                  height='20px'
                  viewBox='0 0 15 15'
                  fill='currentColor'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M7.5 0.421143L14 4.21281V10.7872L7.5 14.5788L1 10.7872V4.21281L7.5 0.421143ZM7.5 4C5.567 4 4 5.567 4 7.5C4 9.433 5.567 11 7.5 11H7.68198C8.6585 11 9.59503 10.6121 10.2855 9.92157L10.3536 9.85355L9.64645 9.14645L9.57843 9.21447C9.07546 9.71744 8.39329 10 7.68198 10H7.5C6.11929 10 5 8.88071 5 7.5C5 6.11929 6.11929 5 7.5 5H7.68198C8.39329 5 9.07546 5.28257 9.57843 5.78553L9.64645 5.85355L10.3536 5.14645L10.2855 5.07843C9.59503 4.38792 8.6585 4 7.68198 4H7.5Z'
                    fill='black'
                  />
                </svg>
              )}
              <span
                className='ml-3 font-medium items-center text-primary cursor-pointer'
                onClick={() => {}}
              >
                Chase Chung
              </span>
            </div>
            <button onClick={() => setNavbarOpen(!navbarOpen)}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </button>
          </div>
          {/* collapsable navbar */}
          <div className={'sm:hidden' + (navbarOpen ? ' block' : ' hidden')}>
            <a
              href='#home'
              className='text-center block text-base text-primary hover:text-accent mb-1'
            >
              Home
            </a>
            <a
              href='#projects'
              className='text-center block text-base text-primary hover:text-accent mb-1'
            >
              Projects
            </a>
            <a
              href='#skills'
              className='text-center block text-base text-primary hover:text-accent mb-1'
            >
              Skills
            </a>
            <a
              href='#resume'
              className='text-center block text-base hover:text-accent text-primary mb-1'
            >
              Resume
            </a>
            <div className='flex flex-row relative'>
              <button
                className='py-1 text-primary hover:text-accent text-base mt-4 mx-auto sm:mt-0 justify-self-center mb-4'
                onClick={isDark => setIsDark(prevState => !prevState)}
              >
                {isDark ? (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-6 h-6 items-center'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='1.5'
                      d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-6 h-6 '
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='1.5'
                      d='M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z'
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>
    </section>
  )
}
