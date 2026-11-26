import { useI18n } from '../i18n/I18nProvider'
import { HERO_VIDEO, assetUrl } from '../data/site'

const HeroMedia = () => {
  if (!HERO_VIDEO) return null
  const { mp4, webm, poster } = HERO_VIDEO

  return (
    <video className="absolute inset-0 size-full object-cover motion-reduce:hidden" autoPlay muted loop playsInline preload="metadata" poster={poster ? assetUrl(poster) : undefined} aria-hidden="true">
      {webm && <source src={assetUrl(webm)} type="video/webm" />}
      {mp4 && <source src={assetUrl(mp4)} type="video/mp4" />}
    </video>
  )
}

export const Hero = () => {
  const { t } = useI18n()
  const { hero } = t

  return (
    <section id="inicio" className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-[#06204a] text-white">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(70%_60%_at_75%_30%,#0a5fd0_0%,#0053b4_35%,#06204a_100%)]" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 opacity-[0.12] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,#000_20%,transparent_75%)]" />
      <HeroMedia />
      <div aria-hidden="true" className="absolute inset-0 -z-0 bg-gradient-to-t from-[#041733]/90 via-[#041733]/40 to-[#041733]/20" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-14 pt-32 md:pb-20">
        <p className="eyebrow mb-6 flex items-center gap-3 !text-white/80">
          <span className="size-1.5 rounded-full bg-green shadow-[0_0_0_4px_rgb(0_196_66/0.25)]" />
          {hero.eyebrow}
        </p>
        <h1 className="balance max-w-4xl text-5xl font-extrabold leading-[0.98] tracking-tight md:text-8xl">
          {hero.title[0]}<br /><span className="text-[#8fc0ff]">{hero.title[1]}</span>
        </h1>

        <div className="mt-12 grid gap-4 md:mt-16 md:grid-cols-2 md:gap-6">
          {[['problemLabel', 'problem'], ['solutionLabel', 'solution']].map(([label, body]) => (
            <div key={body} className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-md">
              <p className="eyebrow mb-3 !text-[#8fc0ff]">{hero[label]}</p>
              <p className="pretty text-base leading-relaxed text-white/90 md:text-lg">{hero[body]}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <a href="#contacto" className="btn btn-light">{hero.primary}</a>
          <a href="#plantillas" className="btn border border-white/40 text-white hover:bg-white/10">{hero.secondary}</a>
        </div>
      </div>
    </section>
  )
}
