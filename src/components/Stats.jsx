import { useI18n } from '../i18n/I18nProvider'
import { useReveal } from '../hooks/useReveal'

export const Stats = () => {
  const { t } = useI18n()
  const scope = useReveal()

  return (
    <section ref={scope} aria-label="Datos" className="border-y border-line px-6">
      <dl className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
        {t.stats.map((stat, index) => (
          <div key={stat.label} data-reveal className={`py-10 md:px-8 ${index > 0 ? 'md:border-l md:border-line' : ''} ${index % 2 === 1 ? 'border-l border-line md:border-l' : ''}`}>
            <dd className="tabular text-4xl font-light tracking-tight md:text-5xl">{stat.value}</dd>
            <dt className="eyebrow mt-3 max-w-40 leading-relaxed">{stat.label}</dt>
          </div>
        ))}
      </dl>
    </section>
  )
}
