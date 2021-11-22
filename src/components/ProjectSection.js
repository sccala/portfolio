// @ts-nocheck

import { StackTag } from './Tags'

export const ProjectSection = () => {
  return (
    <section>
      <div className='flex sm:flex-row flex-col my-20'>
        <div className='w-full lg:w-1/2 pr-8'>
          <h2 className='text-title text-heading text-primary'>Nucamp website</h2>
          <p className='py-8 text-base text-primary'>
            Full-featured website with login modal, saving favorites, and commenting features. This
            demonstrates my React and Redux learning throughout the course. It is currently
            configured to load some content from a local database.
          </p>
          <StackTag />
          <StackTag />
          <StackTag />
        </div>
        <div className='w-full lg:w-1/2'>
          <img className='w-full' src='assets/images/nucampsite.jpg' alt='nucamp site' />
        </div>
      </div>

      <hr />
    </section>
  )
}

// id: 0,
//     name: 'Nucamp website',
//     image: '/assets/images/nucampsite.jpg',
//     featured: false,
//     type: 'bootcamp',
//     focus: 'bootstrap, javascript, jsx, React and Redux',
//     description:
//       'Full-featured website with login modal, saving favorites, and commenting features. This demonstrates my React and Redux learning throughout the course. It is currently configured to load some content from a local database.',
//     link: 'https://github.com/chiyomi1104/React_Nucampsite',
