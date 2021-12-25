import { MYSKILLS } from '../shared/myskills'

export const Skills = () => {
  return (
    <>
      <section id='skills'>
        <div className='text-lg text-primary py-20 font-heading font-bold relative '>skills</div>
        <div className=''>
          {MYSKILLS.map(item => (
            <>
              <div className='md:text-left text-center text-title text-primary font-bold pt-8 pb-4 font-heading'>
                {item.name}
              </div>
              {item.focus.map(item => (
               
                  <span className='justify-center md:mt-4 mt-2 rounded-full text-sm text-secondary bg-tertiary mr-2 md:mr-2 mb-2 px-4 md:px-4 py-2 inline-block'>
                    {item}
                  </span>
          
              ))}
            </>
          ))}
        </div>
      </section>
    </>
  )
}
