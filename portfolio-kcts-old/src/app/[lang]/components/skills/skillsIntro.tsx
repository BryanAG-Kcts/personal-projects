'use client'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect } from 'react'
gsap.registerPlugin(ScrollTrigger)

export const SkillsIntro = (): null => {
  useEffect(() => {
    const skills = document.querySelector('.skillsSection')
    if (skills == null) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: skills,
          start: 'top bottom',
          end: 'bottom top'
        }
      })

      tl.fromTo('.technologyCard', {
        x: (index) => gsap.utils.random(-100 * (index + 1), 100 * (index + 1)),
        opacity: 0,
        rotate: 20,
        y: (index) => gsap.utils.random(-100 * (index + 1), 100 * (index + 1))
      },
      {
        x: 0,
        opacity: 1,
        rotate: 0,
        y: 0,
        ease: 'elastic.out(1, 0.7)',
        duration: 1,
        delay: 0.4,
        stagger: { from: 'random' }
      })
    }, skills)

    return () => ctx.revert()
  }, [])

  return null
}
