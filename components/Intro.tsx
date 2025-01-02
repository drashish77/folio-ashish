'use client'
import { stagger, useAnimate, useInView } from 'framer-motion'
import React, { FC, useEffect } from 'react'
import SplitType from 'split-type'

const Intro: FC = () => {
  const [scope, animate] = useAnimate()
  const inView = useInView(scope, { once: true })
  useEffect(() => {
    new SplitType(scope.current.querySelector('h2'), {
      types: 'lines,words',
      tagName: 'span'
    })
  }, [scope])
  useEffect(() => {
    if (inView) {
      animate(
        scope.current.querySelectorAll('.word'),
        {
          transform: 'translateY(0)'
        },
        {
          duration: 0.5,
          delay: stagger(0.2)
        }
      )
    }
  }, [inView, animate, scope])

  return (
    <section className='section mt-12 md:mt-16 lg:mt-20' id='intro' ref={scope}>
      <div className='container'>
        <h2 className='text-4xl md:text-7xl lg:text-8xl lg:w-4/5'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem velit
          molestias impedit. Officia magnam amet suscipit quos quidem ut aut?
        </h2>
      </div>
    </section>
  )
}

export default Intro
