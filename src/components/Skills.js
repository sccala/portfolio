import { MYSKILLS } from '../shared/myskills'

export const Skills = () => {
  return (
    <>
      <div className='text-lg text-primary py-20'>skills</div>
      {MYSKILLS.map(item => (
        <>
          <div className='text-title text-primary pt-8'>{item.name}</div>
          {item.focus.map(item => (
            <span className='mt-4 rounded-full text-sm text-secondary bg-secondary mr-2 md:mr-2 mb-2 px-2 md:px-4 py-2 inline-block'>
              {item}
            </span>
          ))}
        </>
      ))}
    </>
  )
}
