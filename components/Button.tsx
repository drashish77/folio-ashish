import React, { ButtonHTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

const Button = (
  props: {
    variant: 'primary' | 'secondary' | 'text'
    iconAfter?: ReactNode
  } & ButtonHTMLAttributes<HTMLButtonElement>
) => {
  const { className, children, variant, iconAfter, ...rest } = props
  return (
    <button
      className={twMerge(
        ' h-11 r px-6 rounded-xl  border border-red-orange-500 uppercase inline-flex items-center gap-2 transition-colors duration-500 relative group/button ',
        variant === 'primary' && 'bg-red-orange-500 text-white ',
        variant === 'secondary' && 'hover:bg-red-orange-500',
        variant === 'text' &&
          'h-auto px-0 border-transparent after:content-[""] after:transition-all after:duration-500 after:h-px after:w-0 after:absolute after:top-full after:bg-red-500 hover:after:w-full',
        className
      )}
      {...rest}
    >
      <span className=''>{children}</span>
      {iconAfter && <span className=''>{iconAfter}</span>}
    </button>
  )
}

export default Button
