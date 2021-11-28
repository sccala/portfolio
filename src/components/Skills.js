import { MYSKILLS } from '../shared/myskills'

export const Skills = () => {
  return (
    <>
      <section id='skills'>
        <div className='text-lg text-primary py-20 font-heading font-bold relative'>skills</div>

        <div className='justify-items-center relative'>
          {MYSKILLS.map(item => (
            <>
              <div className='text-left text-title text-primary font-bold pt-8 font-heading'>
                {item.name}
              </div>
              {item.focus.map(item => (
                <span className='mt-4 rounded-full text-sm text-secondary bg-tertiary mr-2 md:mr-2 mb-2 px-4 md:px-4 py-2 inline-block'>
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
