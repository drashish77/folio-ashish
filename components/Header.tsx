'use client'
import Link from 'next/link'
import React, { MouseEvent, useEffect, useState } from 'react'
import Button from './Button'
import { motion, useAnimate } from 'motion/react'
import { navItems } from './Footer'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [topLineScope, topLineAnimate] = useAnimate()
  const [bottomLineScope, bottomLineAnimate] = useAnimate()
  const [navScope, navAnimate] = useAnimate()

  useEffect(() => {
    if (isOpen) {
      topLineAnimate([
        [
          topLineScope.current,
          {
            translateY: 4
          }
        ],
        [
          topLineScope.current,
          {
            rotate: 45
          }
        ]
      ])
      bottomLineAnimate([
        [
          bottomLineScope.current,
          {
            translateY: -4
          }
        ],
        [
          bottomLineScope.current,
          {
            rotate: -45
          }
        ]
      ])
      navAnimate(navScope.current, { height: '100%' }, { duration: 0.7 })
    } else {
      topLineAnimate([
        [
          topLineScope.current,
          {
            rotate: 0
          }
        ],
        [
          topLineScope.current,
          {
            translateY: 0
          }
        ]
      ])
      bottomLineAnimate([
        [
          bottomLineScope.current,
          {
            rotate: 0
          }
        ],
        [
          bottomLineScope.current,
          {
            translateY: 0
          }
        ]
      ])
      navAnimate(navScope.current, { height: '0%' })
    }
    // return () => {

    // };
  }, [
    isOpen,
    topLineAnimate,
    topLineScope,
    bottomLineAnimate,
    bottomLineScope,
    navAnimate,
    navScope
  ])

  const handleClickMobileNavItem = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setIsOpen(false)
    const url = new URL(e.currentTarget.href)
    const hashUrl = url.hash
    console.log('first', hashUrl)
    const target = document.querySelector(hashUrl)
    if (!target) return
    target.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <header className=''>
      <div
        className='fixed top-0 left-0 w-full h-0 overflow-hidden bg-stone-900 z-10'
        ref={navScope}
      >
        <nav className='flex flex-col mt-20 z-30'>
          {navItems.map(({ id, href, label }) => (
            <Link
              href={href}
              className=' text-stone-200 border-t last:border-b border-stone-500 py-6 group/nav-item relative isolate'
              key={id}
              onClick={handleClickMobileNavItem}
            >
              <div className='container flex items-center justify-between !max-w-full'>
                <span className='text-3xl md:text-4xl lg:text-5xl group-hover/nav-item:pl-4 transition-all duration-500'>
                  {label}
                </span>
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
              <div className='absolute w-full h-0 bg-stone-800 group-hover/nav-item:h-full transition-all duration-500 -z-10 bottom-0'></div>
            </Link>
          ))}
        </nav>
      </div>

      <div className='fixed top-0 left-0 w-full mix-blend-difference backdrop-blur-m z-10'>
        <div className='container !max-w-full relative'>
          <div className='flex items-center justify-between h-20'>
            <div className=''>
              <Link href={'/'}>
                <span className='text-xl  font-bold uppercase text-white'>
                  Ashish Gupta
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='fixed top-0 left-0 w-full z-10'>
        <div className='container !max-w-full'>
          <div className='flex  h-20 items-center justify-end'>
            <div className='flex items-center gap-4'>
              <div
                className='size-11 border border-stone-100 cursor-pointer bg-stone-100 rounded-full inline-flex justify-center items-center'
                onClick={() => setIsOpen(!isOpen)}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <motion.rect
                    x='3'
                    y='7'
                    width={18}
                    height={2}
                    ref={topLineScope}
                    fill='currentColor'
                    style={{
                      transformOrigin: '12px 8px'
                    }}
                  />
                  <motion.rect
                    x='3'
                    y='15'
                    width={18}
                    height={2}
                    ref={bottomLineScope}
                    fill='currentColor'
                    // className={'origin-[12px 16px]'}
                    style={{
                      transformOrigin: '12px 16px'
                    }}
                  />
                </svg>
              </div>
              <Link href={'#contact'}>
                <Button variant='primary' className=' hidden md:inline-flex '>
                  Contact me
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
