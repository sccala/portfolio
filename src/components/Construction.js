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

      <div className='flex flex-col h-screen bg-center bg-cover bg-no-repeat bg-primary text-primary'>
        <div className='grid place-items-center w-4/5 mx-auto p-10 my-20 sm:my-auto  bg-opacity-70 rounded-xl shadow-2xl space-y-5 text-center cursor-pointer'>
          <h1 className='text-base font-bold uppercase text-primary　transition duration-500'>
            Coming Soon
          </h1>
          <h2 className='text-base text-primary transition duration-500'>
            Chase Chung's portfolio site is in construction ⛏ Will be back in couple days.
            <br />
            Meanwhile, let's connect the other channel, or shoot an email{' '}
            <a className='text-accent hover:text-yellow-900' href='sccala18@gmail.com'>
              sccala18@gmail.com
            </a>
            😊
          </h2>
          <div className='grid grid-cols-3 md:grid-cols-4 gap-4'>
            <a
              href='https://www.linkedin.com/in/ca1756/'
              className='md:w-32 tracking-wide font-bold rounded border-2 border-gray-400  hover:bg-secondary  shadow-md py-2 px-6 inline-flex items-center transition duration-500'
            >
              <span className='mx-auto'>LinkedIn</span>
            </a>
            <a
              href='https://twitter.com/@Chi93542998'
              className='md:w-32 tracking-wide font-bold rounded border-2 border-gray-400  hover:bg-secondary  shadow-md py-2 px-6 inline-flex items-center transition duration-500'
            >
              <span className='mx-auto'>Twitter</span>
            </a>

            <a
              href='https://github.com/sccala'
              className='md:w-32 tracking-wide font-bold rounded border-2 border-gray-400  hover:bg-secondary  shadow-md py-2 px-6 inline-flex items-center transition duration-500'
            >
              <span className='mx-auto'>Github</span>
            </a>
            <a
              href='sccala18@gmail.com'
              className='md:w-32 tracking-wide font-bold rounded border-2 border-gray-400  hover:bg-secondary  shadow-md py-2 px-6 inline-flex items-center transition duration-500'
            >
              <span className='mx-auto'>Email</span>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
