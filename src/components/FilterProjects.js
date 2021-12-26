export const FilterProject = ({ filtered, setFiltered }) => {
 
  const handleClick = status => {
    setFiltered(status)
  }

  return (
    <>
      <div className=''>
        <div className='flex justify-between font-heading text-primary py-16 md:container'>
          <button
            className={`${
              filtered === 'All' && 'focus:text-accent focus:bg-secondary'
            } font-bold px-2 md:px-8 border-0 rounded-full md:rounded-lg text-sm md:text-body py-1 `}
            onClick={() => handleClick('All')}
          >
            All
          </button>
          <button
            className={`${
              filtered === 'Full stack' && 'focus:text-accent focus:bg-secondary'
            } font-bold px-2 md:px-4 border-0 rounded-full md:rounded-lg text-sm md:text-body py-1 `}
            onClick={() => handleClick('Full stack')}
          >
            Full stack
          </button>
          <button
            className={`${
              filtered === 'Front end' && 'focus:text-accent focus:bg-secondary'
            } font-bold  px-2 md:px-4 border-0 rounded-full md:rounded-lg text-sm md:text-body py-1 `}
            onClick={() => handleClick('Front end')}
          >
            Front end
          </button>
          <button
            className={`${
              filtered === 'Mobile App' && 'focus:text-accent focus:bg-secondary'
            } font-bold px-2 md:px-4 border-0 rounded-full md:rounded-lg text-sm md:text-body py-1 `}
            onClick={() => handleClick('Mobile App')}
          >
            Mobile
          </button>
          <button
            className={`${
              filtered === 'CMS' && 'focus:text-accent focus:bg-secondary'
            } font-bold mr-1 px-2 md:px-4 border-0 rounded-full md:rounded-lg text-sm md:text-body py-1 `}
            onClick={() => handleClick('CMS')}
          >
            CMS
          </button>
        </div>
      </div>
    </>
  )
}
