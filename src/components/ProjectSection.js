// @ts-nocheck
import { MYPROJECTS } from '../shared/myprojects'

export const ProjectSection = () => {
  return (
    <>
      {MYPROJECTS.map(item => (
        <section>
          <div className='flex sm:flex-row flex-col my-20'>
            <div className='w-full lg:w-1/2 pr-8'>
              <h2 className='text-title text-heading text-primary'>{item.name}</h2>
              <p className='py-8 text-base text-primary'>{item.description}</p>

              {item.focus.map(focus => (
                <span className='rounded-full text-sm text-secondary bg-secondary mr-2 md:mr-2 mb-2 px-2 md:px-4 py-1 inline-block'>
                  {focus}
                </span>
              ))}
              <div className='pt-8'>
                <a
                  href={item.demo}
                  className='rounded-lg text-sm text-gray-200 hover:bg-yellow-800 bg-accent mr-1 md:mr-2 mb-2 px-8 md:px-8 py-2 cursor-pointer duration-100 items-end'
                >
                  Demo
                </a>
                <a
                  href={item.github}
                  className='rounded-lg text-sm text-gray-200 bg-accentsub mr-1 md:mr-2 mb-2 px-8 md:px-8 py-2 hover:bg-green-900 cursor-pointer duration-100'
                >
                  Github
                </a>
              </div>
            </div>
            <div className='w-full lg:w-1/2'>
              <img className='w-full rounded-md' src={item.image} alt={item.name} />
            </div>
          </div>
          <hr className='border-gray-100 dark:border-primaryborder' />
        </section>
      ))}
    </>
  )
}

