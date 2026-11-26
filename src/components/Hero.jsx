import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useI18n } from '../i18n/I18nProvider'
import { InsoleAssembly } from './InsoleAssembly'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const COPY_FADE_DISTANCE = 320
const COPY_RISE_PX = -48

export const Hero = () => {
  const { t } = useI18n()
  const copy = useRef(null)

  // El texto se desvanece al empezar a desarmar la plantilla.
  useGSAP(() => {
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.to(copy.current, {
        opacity: 0,
        y: COPY_RISE_PX,
        ease: 'none',
        scrollTrigger: { start: 0, end: COPY_FADE_DISTANCE, scrub: true },
      })
    })
  }, { scope: copy })

  return (
    <section id="top" className="relative">
      <div aria-hidden="true" className="hairline-grid pointer-events-none absolute inset-0" />
      <div ref={copy} className="pointer-events-none absolute inset-x-0 top-0 z-10 px-6 pt-28 motion-reduce:static md:pt-32">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow mb-6 flex items-center gap-3">
            <span className="size-1.5 rounded-full bg-green" />
            {t.hero.eyebrow}
          </p>
          <h1 className="balance max-w-3xl text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
            {t.hero.title[0]}<br />
            <span className="text-blue-bright">{t.hero.title[1]}</span>
          </h1>
          <p className="pretty mt-6 max-w-md text-base leading-relaxed text-mist md:text-lg">{t.hero.lead}</p>
          <div className="pointer-events-auto mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="rounded-full bg-green px-7 py-3.5 text-sm font-semibold text-ink transition-transform duration-150 hover:brightness-110 active:scale-[0.96]">{t.hero.primary}</a>
            <a href="#catalog" className="rounded-full border border-line-strong px-7 py-3.5 text-sm font-medium transition-colors duration-200 hover:border-snow active:scale-[0.96]">{t.hero.secondary}</a>
          </div>
        </div>
      </div>
      <InsoleAssembly labels={t.layers} />
    </section>
  )
}
