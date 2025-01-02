'use client'
import Image from 'next/image'
import React, { useRef } from 'react'
import Button from './Button'
import test1 from '../app/asset/testimonial-1.jpg'
import test2 from '../app/asset/testimonial-2.jpg'
import test3 from '../app/asset/testimonial-3.jpg'
import { motion, useScroll, useTransform } from 'framer-motion'
import Testimonial from './Testimonial'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Chen',
    company: 'Pixel Perfect',
    role: 'Head of Design',
    quote:
      "Alex's expertise in both technical development and design created a beautiful, high-performing website.",
    image: test1,
    imagePositionY: 0.2
  },
  {
    id: 2,
    name: 'Marcus Rodriguez',
    company: 'Craft Coffee Co.',
    role: 'Founder',
    quote:
      'Alex transformed our boutique coffee brand with a website that perfectly balances aesthetics and functionality.',
    image: test2,
    imagePositionY: 0.1
  },
  {
    id: 3,
    name: 'Emily Watson',
    company: 'Studio Minimal',
    role: 'Creative Director',
    quote:
      'The collaborative process was amazing. Alex brought lots of fresh perspectives and innovative solutions.',
    image: test3,
    imagePositionY: 0.55
  }
]

const Testimonials = () => {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const { scrollYProgress } = useScroll({
    target: titleRef,
    offset: ['start end', 'end start']
  })
  const transformTop = useTransform(scrollYProgress, [0, 1], ['0', '15%'])
  const transformBottom = useTransform(scrollYProgress, [0, 1], ['0', '-15%'])

  const testimonialId = 1
  return (
    <section className='section' id='testimonials'>
      <div className=''>
        <h2
          className='text-4xl md:text-7xl lg:text-8xl flex flex-col overflow-hidden tracking-tighter'
          ref={titleRef}
        >
          <motion.span
            className='whitespace-nowrap'
            style={{ x: transformTop }}
          >
            Some Nice words from my past clients
          </motion.span>
          <motion.span
            className='whitespace-nowrap self-end text-red-orange-500'
            style={{ x: transformBottom }}
          >
            Some Nice words from my past cliensts
          </motion.span>
        </h2>
        <div className='container'>
          <div className='mt-20'>
            {testimonials.map(
              ({ name, company, role, quote, image, imagePositionY, id }) =>
                testimonialId === id && (
                  <Testimonial
                    name={name}
                    company={company}
                    role={role}
                    quote={quote}
                    image={image}
                    imagePositionY={imagePositionY}
                    id={id}
                    key={id}
                  />
                )
            )}
          </div>

          <div className='flex gap-4 mt-6 lg:mt-10'>
            <Button
              className='rounded-full  h-10 w-10  p-0'
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
                    d='M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18'
                  />
                </svg>
              }
            />
            <Button
              className='rounded-full  h-10 w-10 p-0'
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
                    d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3'
                  />
                </svg>
              }
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials