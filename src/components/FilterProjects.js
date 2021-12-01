export const FilterProject = ({ filtered, setFiltered }) => {
 
  const handleClick = status => {
    setFiltered(status)
  }

  return (
    <>
      <div className='container'>
        <div className='flex justify-between font-heading text-primary py-16 '>
          <button
            className={`${
              filtered === 'All' && 'focus:text-accent active:text-accent'
            }  font-bold mx-auto border-0 rounded-lg px-4 md:px-8 text-sm md:text-body py-1`}
            onClick={() => handleClick('All')}
          >
            All
          </button>
          <button
            className={`${
              filtered === 'Full stack' && 'focus:text-accent'
            } font-bold px-4 md:px-8  mx-auto border-0 rounded-lg text-sm md:text-body py-1`}
            onClick={() => handleClick('Full stack')}
          >
            Full stack
          </button>
          <button
            className={`${
              filtered === 'Front end' && 'focus:text-accent'
            } font-bold px-4 md:px-8  mx-auto border-0 rounded-lg text-sm md:text-body py-1`}
            onClick={() => handleClick('Front end')}
          >
            Front end
          </button>
          <button
            className={`${
              filtered === 'Mobile App' && 'focus:text-accent'
            } font-bold px-4 md:px-8  mx-auto border-0 rounded-lg text-sm md:text-body py-1`}
            onClick={() => handleClick('Mobile App')}
          >
            Mobile App
          </button>
          <button
            className={`${
              filtered === 'CMS' && 'focus:text-accent'
            }  font-bold mx-auto border-0 rounded-lg px-4 md:px-8 text-sm md:text-body py-1`}
            onClick={() => handleClick('CMS')}
          >
            CMS
          </button>
        </div>
      </div>
    </>
  )
}
