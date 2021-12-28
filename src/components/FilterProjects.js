export const FilterProject = ({ filtered, setFiltered }) => {
  const handleClick = status => {
    setFiltered(status)
  }

  return (
    <>
      <div className='bg-primary sticky top-4'>
        <div className='pt-20 pb-8 text-lg text-primary font-heading font-bold'>projects</div>
        <div className='flex border-b border-primaryborder justify-between shadow-xl'>
          <button
            className='flex items-center md:px-4 py-2 text-center text-primary bg-transparent focus:border-b-2  border-accentborder pr-1 focus:text-accent active:text-accent whitespace-nowrap focus:outline-none font-heading -mb-px -px-1'
            onClick={() => handleClick('All')}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='hidden md:block mx-1 h-6 w-6'
              viewBox='0 0 24 24'
              strokeWidth='2'
              stroke='currentColor'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
              <rect x='4' y='4' width='6' height='5' rx='2'></rect>
              <rect x='4' y='13' width='6' height='7' rx='2'></rect>
              <rect x='14' y='4' width='6' height='7' rx='2'></rect>
              <rect x='14' y='15' width='6' height='5' rx='2'></rect>
            </svg>

            <span className='mx-1 text-base font-bold font-heading'> All </span>
          </button>

          <button
            className='flex items-center md:px-4 py-2 text-center text-primary bg-transparent focus:border-b-2 focus:text-accent border-accentborder pr-1 whitespace-nowrap focus:outline-none font-heading -mb-px -px-1'
            onClick={() => handleClick('Full stack')}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='hidden md:block mx-1 h-6 w-6'
              viewBox='0 0 24 24'
              strokeWidth='1.75'
              stroke='currentColor'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
              <path d='M17.8 19.817l-2.172 1.138a0.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a0.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a0.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a0.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a0.39 .39 0 0 1 -.567 .411l-2.172 -1.138z'></path>
              <path d='M6.2 19.817l-2.172 1.138a0.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a0.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a0.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a0.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a0.39 .39 0 0 1 -.567 .411l-2.172 -1.138z'></path>
              <path d='M12 9.817l-2.172 1.138a0.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a0.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a0.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a0.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a0.39 .39 0 0 1 -.567 .411l-2.172 -1.138z'></path>
            </svg>

            <span className='mx-1 text-base font-bold font-heading'> Full stack </span>
          </button>

          <button
            className='flex items-center md:px-4 py-2 text-center text-primary bg-transparent focus:border-b-2 focus:text-accent border-accentborder pr-1 whitespace-nowrap focus:outline-none font-heading -mb-px -px-1'
            onClick={() => handleClick('Front end')}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='hidden md:block mx-1 h-5 w-5'
              viewBox='0 0 24 24'
              strokeWidth='2'
              stroke='currentColor'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
              <path d='M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z'></path>
            </svg>
            <span className='mx-1 text-base font-bold font-heading'> Front end </span>
          </button>
          <button
            className='flex items-center md:px-4 py-2 text-center text-primary bg-transparent focus:border-b-2 focus:text-accent border-accentborder pr-1 whitespace-nowrap focus:outline-none font-heading -mb-px -px-1'
            onClick={() => handleClick('Mobile App')}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='hidden md:block mx-1 h-6 w-6'
              viewBox='0 0 24 24'
              strokeWidth='1.75'
              stroke='currentColor'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
              <rect x='7' y='4' width='10' height='16' rx='1'></rect>
              <line x1='11' y1='5' x2='13' y2='5'></line>
              <line x1='12' y1='17' x2='12' y2='17.01'></line>
            </svg>

            <span className='mx-1 text-base font-bold font-heading'> Mobile </span>
          </button>

          <button
            className='flex items-center md:px-4 py-2 text-center text-primary bg-transparent focus:border-b-2  border-accentborder pr-1 focus:text-accent whitespace-nowrap focus:outline-none font-heading -mb-px -px-1'
            onClick={() => handleClick('CMS')}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='hidden md:block mx-1 h-6 w-6'
              viewBox='0 0 24 24'
              strokeWidth='1.75'
              stroke='currentColor'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
              <rect x='6' y='3' width='12' height='18' rx='4'></rect>
              <line x1='12' y1='7' x2='12' y2='11'></line>
            </svg>
            <span className='mx-1 text-base font-bold font-heading'> CMS </span>
          </button>
        </div>
      </div>
    </>
  )
}
