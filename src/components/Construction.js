export const Construction = () => {
  return (
    <>
      {/* <h1 className='text-center'>Currently in the construction⛏</h1>
      <h2 className='text-center'>Will be back again soon!</h2>
      <div className='flex justify-around mx-auto text-center'>
        <a className='mr-4' href='https://www.linkedin.com/in/ca1756/'>
          Linkedin
        </a>
        <a className='mr-4' href='https://codepen.io/Chi1104'>
          Codepen
        </a>
        <a href='https://github.com/sccala'>Github</a>
      </div> */}

      <div className='flex flex-col h-screen bg-center bg-cover bg-no-repeat bg-indigo-900 text-gray-100'>
        <div className='grid place-items-center w-4/5 mx-auto p-10 my-20 sm:my-auto bg-white-600 border-4 border-indigo-600 bg-opacity-70 rounded-xl shadow-2xl space-y-5 text-center cursor-pointer'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            className='h-24 w-24 text-gray-100'
            viewBox='0 0 16 16'
          >
            <path d='M4.968 9.75a.5.5 0 1 0-.866.5A4.498 4.498 0 0 0 8 12.5a4.5 4.5 0 0 0 3.898-2.25.5.5 0 1 0-.866-.5A3.498 3.498 0 0 1 8 11.5a3.498 3.498 0 0 1-3.032-1.75zM7 5.116V5a1 1 0 0 0-1-1H3.28a1 1 0 0 0-.97 1.243l.311 1.242A2 2 0 0 0 4.561 8H5a2 2 0 0 0 1.994-1.839A2.99 2.99 0 0 1 8 6c.393 0 .74.064 1.006.161A2 2 0 0 0 11 8h.438a2 2 0 0 0 1.94-1.515l.311-1.242A1 1 0 0 0 12.72 4H10a1 1 0 0 0-1 1v.116A4.22 4.22 0 0 0 8 5c-.35 0-.69.04-1 .116z' />
            <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-1 0A7 7 0 1 0 1 8a7 7 0 0 0 14 0z' />
          </svg>

          <h1 className='text-4xl font-bold uppercase text-gray-100　transition duration-500'>
            Coming Soon
          </h1>
          <h2 className='text-xl text-gray-100 transition duration-500'>
            Chase Chung's portfolio site is in construction ⛏ Will be back in couple days.
            Meanwhile, let's connect the other channel or shoot an email{' '}
            <a className='text-red-300 hover:text-red-400' href='sccala18@gmail.com'>
              sccala18@gmail.com
            </a>
            😊
          </h2>
          <div className='grid grid-cols-3 md:grid-cols-4 gap-4'>
            <a
              href='https://www.linkedin.com/in/ca1756/'
              className='md:w-32 tracking-wide font-bold rounded border-2 border-indigo-500 hover:text-white hover:border-blue-600 hover:bg-blue-600 shadow-md py-2 px-6 inline-flex items-center transition duration-500'
            >
              <span className='mx-auto'>LinkedIn</span>
            </a>
            <a
              href='https://twitter.com/@Chi93542998'
              className='md:w-32 tracking-wide font-bold rounded border-2 border-indigo-500 hover:text-white hover:border-blue-500 hover:bg-blue-500 shadow-md py-2 px-6 inline-flex items-center transition duration-500'
            >
              <span className='mx-auto'>Twitter</span>
            </a>

            <a
              href='https://github.com/sccala'
              className='md:w-32 tracking-wide font-bold rounded border-2 border-indigo-500 hover:text-white hover:border-red-600 hover:bg-red-600 shadow-md py-2 px-6 inline-flex items-center transition duration-500'
            >
              <span className='mx-auto'>Github</span>
            </a>
            <a
              href='sccala18@gmail.com'
              className='md:w-32 tracking-wide font-bold rounded border-2 border-indigo-500 hover:text-white hover:border-pink-600 hover:bg-pink-600 shadow-md py-2 px-6 inline-flex items-center transition duration-500'
            >
              <span className='mx-auto'>Email</span>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
