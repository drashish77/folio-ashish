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
              <Button
                className='mt-8'
                variant='secondary'
                iconAfter={
                  <div className='size-6 overflow-hidden group/button'>
                    <div className='w-12 h-6 flex transition-transform duration-300 group-hover/button:-translate-x-1/2'>
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
                }
              >
                Info@ashishhh.com
              </Button>
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
