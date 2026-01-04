'use client'

import { gsap } from 'gsap'
import { useEffect } from 'react'

export const TechnologyScroll = (): null => {
  useEffect(() => {
    const gallery = document.querySelectorAll('.projectsGallery')
    if (gallery == null) return

    const ctxRevert: gsap.Context[] = []

    gallery.forEach(element => {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: element,
            start: 'top bottom',
            end: 'bottom top'
          }
        })

        tl.fromTo('.technologyCard', {
          opacity: 0,
          rotate: 10,
          y: 100
        },
        {
          opacity: 1,
          rotate: 0,
          y: 0,
          ease: 'elastic.out(1, 0.3)',
          duration: 0.3,
          stagger: 0.1
        })
      }, element)

      ctxRevert.push(ctx)
    })
    return () => ctxRevert.forEach(ctx => ctx.revert())
  }, [])

  return null
}
