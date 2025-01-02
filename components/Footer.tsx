import React from 'react'
import Button from './Button'
import Link from 'next/link'

export const navItems = [
  {
    id: 'home',
    label: 'Home',
    href: '#home'
  },
  {
    id: 'about',
    label: 'About Me',
    href: '#about'
  },
  {
    id: 'skills',
    label: 'Skills',
    href: '#skills'
  },
  {
    id: 'projects',
    label: 'Projects',
    href: '#projects'
  },
  {
    id: 'services',
    label: 'Services',
    href: '#services'
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
              <h2 className=' text-4xl md:text-7xl lg:text-8xl mt-8 font-extralight'>
                Enough talk, let&apos; s build something great together
              </h2>
              <Button
                className='mt-8'
                variant='secondary'
                iconAfter={
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
                }
              >
                Info@ashishhh.com
              </Button>
            </div>
            <div className=''>
              <nav className='mt-16 flex flex-col gap-8 md:items-end md:mt-0'>
                {navItems.map(({ id, label, href }) => (
                  <Link href={href} className='' key={id}>
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
