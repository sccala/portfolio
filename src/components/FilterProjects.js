export const FilterProject = ({ filtered, setFiltered }) => {
 
  const handleClick = status => {
    setFiltered(status)
  }


  return (
    <div className='flex justify-between w-full  font-heading text-primary py-16 '>
      <button
        className={`${
          filtered === 'All' && 'focus:text-accent active:text-accent'
        }  font-bold mx-auto border-0 rounded-lg px-8 py-1`}
        onClick={() => handleClick('All')}
      >
        All
      </button>
      <button
        className={`${
          filtered === 'Full stack' && 'focus:text-accent'
        } font-bold px-8 py-1 mx-auto border-0 rounded-lg `}
        onClick={() => handleClick('Full stack')}
      >
        Full stack
      </button>
      <button
        className={`${
          filtered === 'Front end' && 'focus:text-accent'
        } font-bold px-8 py-1 mx-auto border-0 rounded-lg`}
        onClick={() => handleClick('Front end')}
      >
        Front end
      </button>
      <button
        className={`${
          filtered === 'CMS' && 'focus:text-accent'
        }  font-bold mx-auto border-0 rounded-lg px-8 py-1`}
        onClick={() => handleClick('CMS')}
      >
        CMS
      </button>
    </div>
  )
}
