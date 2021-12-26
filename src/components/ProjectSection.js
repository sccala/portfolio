// @ts-nocheck
import { useState } from 'react'
import { MYPROJECTS } from '../shared/myprojects'
import { FilterProject } from './FilterProjects'

export const ProjectSection = () => {
  const [filtered, setFiltered] = useState('All')
  return (
    <>
      <section id='projects'>
        <div className='pt-20 text-lg text-primary font-heading font-bold'>projects</div>
        <FilterProject filtered={filtered} setFiltered={setFiltered} />
        {MYPROJECTS.filter(item =>
          `${filtered}` === 'All' ? item.featured : item.type === `${filtered}`
        ).map(item => (
          <>
            <div key={item.id} className='divide-y divide-primarydivider'>
              <div className='mx-auto py-16 text-center md:text-left'>
                <h2 className='text-title font-heading text-primary pb-8 font-bold'>{item.name}</h2>
                <div className=' flex md:flex-row flex-col '>
                  <div className='w-full lg:w-1/2 pr-0 md:pr-8'>
                    <p className='pb-8 text-base text-primary hidden md:block'>
                      {item.description}
                    </p>
                    {item.focus.map(focus => (
                      <span
                        key={focus.id}
                        className='rounded-full text-sm text-secondary bg-secondary mr-2 mb-2 px-2 md:px-4 py-1 inline-block'
                      >
                        {focus}
                      </span>
                    ))}
                    <div className='py-8 '>
                      {item.demo ? (
                        <a
                          href={item.demo}
                          className='rounded-lg text-sm text-gray-200 hover:bg-yellow-800 bg-accent mr-1 md:mr-2 mb-2 px-8 md:px-8 py-2 cursor-pointer duration-100 items-end'
                        >
                          Demo
                        </a>
                      ) : (
                        <a
                          href={item.github}
                          className='rounded-lg text-sm bg-gray-500 text-gray-400  dark:bg-gray-700 dark:text-gray-500 mr-1 md:mr-2 mb-2 px-8 md:px-8 py-2 cursor-pointer items-end'
                        >
                          No demo
                        </a>
                      )}
                      {item.github ? (
                        <a
                          href={item.github}
                          className='rounded-lg text-sm text-gray-200 bg-accentsub mr-1 md:mr-2 mb-2 px-8 md:px-8 py-2 hover:bg-green-900 cursor-pointer duration-100'
                        >
                          Github
                        </a>
                      ) : (
                        <a
                          href={item.demo}
                          className='rounded-lg text-sm bg-gray-500 text-gray-400 dark:text-gray-500 dark:bg-gray-700 mr-1 md:mr-2 mb-2 px-8 md:px-8 py-2  cursor-pointer'
                        >
                          No github
                        </a>
                      )}
                    </div>
                  </div>
                  <div className='w-full lg:w-1/2 '>
                    <img className='max-h-96  shadow-lg m-auto' src={item.image} alt={item.name} />
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </section>
    </>
  )
}
