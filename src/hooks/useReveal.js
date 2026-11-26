import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const REVEAL_DURATION = 0.9
const REVEAL_STAGGER = 0.08
const REVEAL_EASE = 'power3.out'

// Revela con fade + desplazamiento los hijos marcados con [data-reveal] al entrar en pantalla.
export const useReveal = () => {
  const scope = useRef(null)

  useGSAP(() => {
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      ScrollTrigger.batch('[data-reveal]', {
        start: 'top 88%',
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, { opacity: 1, y: 0, duration: REVEAL_DURATION, stagger: REVEAL_STAGGER, ease: REVEAL_EASE }),
      })
    })
  }, { scope })

  return scope
}
