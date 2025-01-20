'use client'
import useTextRevealAnimation from '@/hooks/useTextRevealAnimation'
import { useInView } from 'motion/react'
import React, { FC, useEffect, useRef } from 'react'

const Intro: FC = () => {
  const { scope, entranceAnimation } = useTextRevealAnimation()
  const inView = useInView(scope, { once: true })
  const sectionRef = useRef<HTMLElement>(null)
  useEffect(() => {
    if (inView) {
      entranceAnimation()
    }
  }, [inView, entranceAnimation])

  return (
    <section
      className='section mt-12 md:mt-16 lg:mt-20'
      id='intro'
      ref={sectionRef}
    >
      <div className='container'>
        <h2 className='text-4xl md:text-7xl lg:text-8xl' ref={scope}>
          I&apos; m a frontend developer specializing in crafting fast,
          responsive, and SEO-friendly websites that elevate user engagement and
          performance.
        </h2>
      </div>
    </section>
  )
}

export default Intro
