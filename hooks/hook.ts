import { animate, stagger, useAnimate } from 'framer-motion'
import { useEffect } from 'react'
import SplitType from 'split-type'

export const useTextRevealAnimation = () => {
  const [scope, Animate] = useAnimate()

  useEffect(() => {
    new SplitType(scope.current, { types: 'lines,words', tagName: 'span' })
  }, [scope])

  const entranceAnimation = () =>
    animate(
      scope.current.querySelectorAll('.word'),
      {
        transform: 'translateY(0)'
      },
      { duration: 0.5, delay: stagger(0.2) }
    )

  return { scope, entranceAnimation }
}
