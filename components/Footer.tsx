'use client'

import React, { MouseEvent, useEffect } from 'react'
import Button from './Button'
import Link from 'next/link'
import useTextRevealAnimation from '@/hooks/useTextRevealAnimation'
import { useInView } from 'motion/react'

export const navItems = [
  {
    id: 'home',
    label: 'Home',
    href: '#'
  },
  {
    id: 'about',
    label: 'About Me',
    href: '#intro'
  },
  // {
  //   id: 'skills',
  //   label: 'Skills',
  //   href: '#skills'
  // },
  {
    id: 'projects',
    label: 'Projects',
    href: '#projects'
  },
  {
    id: 'faqs',
    label: 'FAQs',
    href: '#faqs'
  },
  {
    id: 'testimonials',
    label: 'Testimonials',
    href: '#testimonials'
  },
  {
    id: 'contact',
    label: 'Contact',
    href: '#contact'
  }
]

const Footer = () => {
  const { scope, entranceAnimation } = useTextRevealAnimation()
  const inView = useInView(scope)
  useEffect(() => {
    if (inView) {
      entranceAnimation()
    }
  }, [inView, entranceAnimation])

  const handleClickMobileNavItem = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    const url = new URL(e.currentTarget.href)
    const hashUrl = url.hash
    console.log('first', hashUrl)
    const target = document.querySelector(hashUrl)
    if (!target) return
    target.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <footer className=' bg-stone-900 text-white' id='contact'>
      <div className='container'>
        <div className='section'>
          <div className='flex items-center gap-2'>
            <div className=' animate-pulse size-3 bg-green-400 rounded-full'></div>
            <span className=' uppercase'>
              One spot available for next month
            </span>{' '}
          </div>
          <div className='grid md:grid-cols-3 md:items-center'>
            <div className='md:col-span-2'>
              <h2
                className=' text-4xl md:text-7xl lg:text-8xl mt-8 font-extralight'
                ref={scope}
              >
                Enough talk, let&apos; s build something great together
              </h2>
              <a href='mailto:ashishkuchiya@gmail.com'>
                <Button
                  className='mt-8'
                  variant='secondary'
                  iconAfter={
                    <div className='size-6 overflow-hidden group/button'>
                      <div className='w-12 h-6 flex transition-transform duration-300 group-hover/button:-translate-x-1/2'>
                        <svg
                          width='800px'
                          height='800px'
                          viewBox='0 0 24 24'
                          fill='#fff'
                          stroke='currentColor'
                          className='size-6'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <g id='style=linear'>
                            <g id='email'>
                              <path
                                id='vector'
                                d='M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z'
                                stroke='#000000'
                                stroke-width='1.5'
                                stroke-miterlimit='10'
                                stroke-linecap='round'
                                stroke-linejoin='round'
                              />
                              <path
                                id='vector_2'
                                d='M18.7698 7.7688L13.2228 12.0551C12.5025 12.6116 11.4973 12.6116 10.777 12.0551L5.22998 7.7688'
                                stroke='#000000'
                                stroke-width='1.5'
                                stroke-linecap='round'
                              />
                            </g>
                          </g>
                        </svg>
                        <svg
                          width='800px'
                          height='800px'
                          viewBox='0 0 24 24'
                          fill='#fff'
                          stroke='currentColor'
                          className='size-6'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <g id='style=linear'>
                            <g id='email'>
                              <path
                                id='vector'
                                d='M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z'
                                stroke='#000000'
                                stroke-width='1.5'
                                stroke-miterlimit='10'
                                stroke-linecap='round'
                                stroke-linejoin='round'
                              />
                              <path
                                id='vector_2'
                                d='M18.7698 7.7688L13.2228 12.0551C12.5025 12.6116 11.4973 12.6116 10.777 12.0551L5.22998 7.7688'
                                stroke='#000000'
                                stroke-width='1.5'
                                stroke-linecap='round'
                              />
                            </g>
                          </g>
                        </svg>
                      </div>
                    </div>
                  }
                >
                  ashishkuchiya@gmail.com
                </Button>
              </a>
              <a href='tel:+919131094428'>
                <Button
                  className='mt-8 ml-5'
                  variant='secondary'
                  iconAfter={
                    <div className='size-6 overflow-hidden group/button'>
                      <div className='w-12 h-6 flex transition-transform duration-300 group-hover/button:-translate-x-1/2'>
                        {/*  svg here */}
                        <svg
                          width='800px'
                          height='800px'
                          viewBox='0 0 24 24'
                          fill='#fff'
                          stroke='#fff'
                          className='size-6'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M10.0376 5.31617L10.6866 6.4791C11.2723 7.52858 11.0372 8.90532 10.1147 9.8278C10.1147 9.8278 10.1147 9.8278 10.1147 9.8278C10.1146 9.82792 8.99588 10.9468 11.0245 12.9755C13.0525 15.0035 14.1714 13.8861 14.1722 13.8853C14.1722 13.8853 14.1722 13.8853 14.1722 13.8853C15.0947 12.9628 16.4714 12.7277 17.5209 13.3134L18.6838 13.9624C20.2686 14.8468 20.4557 17.0692 19.0628 18.4622C18.2258 19.2992 17.2004 19.9505 16.0669 19.9934C14.1588 20.0658 10.9183 19.5829 7.6677 16.3323C4.41713 13.0817 3.93421 9.84122 4.00655 7.93309C4.04952 6.7996 4.7008 5.77423 5.53781 4.93723C6.93076 3.54428 9.15317 3.73144 10.0376 5.31617Z'
                            stroke='#1C274C'
                            stroke-width='1.5'
                            stroke-linecap='round'
                          />
                        </svg>
                        <svg
                          width='800px'
                          height='800px'
                          viewBox='0 0 24 24'
                          fill='#fff'
                          stroke='#fff'
                          className='size-6'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M10.0376 5.31617L10.6866 6.4791C11.2723 7.52858 11.0372 8.90532 10.1147 9.8278C10.1147 9.8278 10.1147 9.8278 10.1147 9.8278C10.1146 9.82792 8.99588 10.9468 11.0245 12.9755C13.0525 15.0035 14.1714 13.8861 14.1722 13.8853C14.1722 13.8853 14.1722 13.8853 14.1722 13.8853C15.0947 12.9628 16.4714 12.7277 17.5209 13.3134L18.6838 13.9624C20.2686 14.8468 20.4557 17.0692 19.0628 18.4622C18.2258 19.2992 17.2004 19.9505 16.0669 19.9934C14.1588 20.0658 10.9183 19.5829 7.6677 16.3323C4.41713 13.0817 3.93421 9.84122 4.00655 7.93309C4.04952 6.7996 4.7008 5.77423 5.53781 4.93723C6.93076 3.54428 9.15317 3.73144 10.0376 5.31617Z'
                            stroke='#1C274C'
                            stroke-width='1.5'
                            stroke-linecap='round'
                          />
                        </svg>
                      </div>
                    </div>
                  }
                >
                  +91 9131094428
                </Button>
              </a>
            </div>
            <div className=''>
              <nav className='mt-16 flex flex-col gap-8 md:items-end md:mt-0'>
                {navItems.map(({ id, label, href }) => (
                  <Link
                    href={href}
                    className=''
                    key={id}
                    onClick={handleClickMobileNavItem}
                  >
                    <Button variant='text' className='text-lg'>
                      {label}
                    </Button>
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <p className='py-16 text-white/30 text-sm text-center'>
          Copyright &copy; Ashish Gupta &bull; All right reserved!{' '}
        </p>
      </div>
    </footer>
  )
}

export default Footer
