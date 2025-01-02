import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import React from 'react'
import { twMerge } from 'tailwind-merge'

interface TestimonialTypes {
  name: string
  company: string
  role: string
  quote: string
  image: string | StaticImport
  imagePositionY: number
  id: number
}

const Testimonial = (props: TestimonialTypes) => {
  const {
    name,
    company,
    role,
    quote,
    image,
    imagePositionY,
    id
    // className,
    // ...rest
  } = props

  return (
    <div
      className={twMerge(
        'md:grid md:grid-cols-5 md:gap-8 lg:gap-14 md:items-center'
      )}
      key={id}
    >
      <div className='aspect-square md:aspect-[9/16] md:col-span-2'>
        <Image
          src={image}
          alt={name}
          className='object-cover size-full'
          style={{
            objectPosition: `50% ${imagePositionY + 100}%`
          }}
        />
      </div>
      <blockquote className='md:col-span-3'>
        <div className='text-3xl md:text-4xl lg:text-6xl mt-8 md:mt-0'>
          <span className=''>&ldquo;</span>
          {quote}
          <span className=''>&rdquo;</span>
        </div>
        <cite className='mt-4 md:mt-8 lg:mt-12 not-italic block md:text-lg lg:text-xl'>
          {name}, {role} @ {company}
        </cite>
      </blockquote>
    </div>
  )
}

export default Testimonial
