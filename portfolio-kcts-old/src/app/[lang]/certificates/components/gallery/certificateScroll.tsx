'use client'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect } from 'react'
gsap.registerPlugin(ScrollTrigger)

export const CertificateScroll = (): null => {
  useEffect(() => {
    const gallery = document.querySelectorAll('.certificateGallery')
    const ctxRevert: gsap.Context[] = []
    if (gallery === null) return

    gallery.forEach(certificate => {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: certificate,
            start: 'top bottom',
            end: 'bottom top'
          }
        })

        tl.fromTo('.galleryCertificate',
          {
            opacity: 0,
            y: -50
          },
          {
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
            y: 0,
            ease: 'elastic.out(1, 0.3)'
          })
      }, certificate)

      ctxRevert.push(ctx)
    })

    return () => ctxRevert.forEach(ctx => ctx.revert())
  }, [])

  return null
}
