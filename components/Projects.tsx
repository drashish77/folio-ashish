import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import project1 from '../app/asset/project-1.jpg'
import project2 from '../app/asset/project-2.jpg'
import project3 from '../app/asset/project-3.jpg'
import project4 from '../app/asset/project-4.jpg'
import project5 from '../app/asset/project-5.jpg'

const projects = [
  {
    name: 'Artisan Brew Co.',
    image: project1
  },
  {
    name: 'Wavelength Studios',
    image: project2
  },
  {
    name: 'Nova Fitness',
    image: project3
  },
  {
    name: 'Urban Plates',
    image: project4
  },
  {
    name: 'Bloom Botanicals',
    image: project5
  }
]
const Projects = () => {
  return (
    <section className='section' id='projects'>
      <div className='container'>
        <h2 className='text-4xl md:text-7xl lg:text-8xl'>Selected Works</h2>
        <div className='mt-10 md:mt-16 lg:mt-20'>
          {projects.map(({ name, image }) => (
            <Link key={name} href={'#'}>
              <div className='border-t border-stone-400 border-dotted last:border-b py-6 md:py-8 lg:py-10 flex flex-col group/project relative'>
                <div className='absolute bottom-0 left-0 w-full h-0 group-hover/project:h-full transition-all duration-500 bg-stone-300'></div>
                <div className='relative '>
                  <div className='aspect-video md:hidden'>
                    <Image
                      src={image}
                      alt={name}
                      className='object-cover size-full'
                    />
                  </div>
                  <div className='flex justify-between items-center mt-8 md:mt-0 md:grid md:[grid-template-columns:1fr_300px_max-content] md:gap-8'>
                    <div className='lg:group-hover/project:pl-8 transition-all duration-700'>
                      <h3 className='text-2xl md:text-3xl lg:text-4xl'>
                        {name}
                      </h3>
                    </div>
                    <div className='relative'>
                      <div className='aspect-video absolute w-full top-1/2 -translate-y-1/2 opacity-0 scale-90 group-hover/project:opacity-100 group-hover/project:scale-100 lg:group-hover/project:scale-110 transition-all duration-500 z-10 '>
                        <Image
                          src={image}
                          alt={name}
                          className='object-cover size-full'
                        />
                      </div>
                    </div>
                    <div className='lg:group-hover/project:pr-8 transition-all duration-700'>
                      <div className='size-6 overflow-hidden'>
                        <div className='h-6 w-12 flex group-hover/project:-translate-x-1/2 transition-transform duration-700'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth='1.5'
                            stroke='currentColor'
                            className='size-6'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25'
                            />
                          </svg>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth='1.5'
                            stroke='currentColor'
                            className='size-6'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25'
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects