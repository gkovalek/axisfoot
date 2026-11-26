import { useI18n } from '../i18n/I18nProvider'
import { Section } from './Section'

export const Technology = () => {
  const { t } = useI18n()

  return (
    <Section id="technology" index="01" eyebrow={t.tech.eyebrow} title={t.tech.title} lead={t.tech.lead}>
      <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2">
        {t.tech.items.map((item, index) => (
          <article key={item.title} data-reveal className="group bg-surface p-8 transition-colors duration-300 hover:bg-raised md:p-12">
            <span className="font-mono text-xs text-green">{String(index + 1).padStart(2, '0')}</span>
            <h3 className="mt-8 text-2xl font-medium tracking-tight">{item.title}</h3>
            <p className="pretty mt-4 leading-relaxed text-mist">{item.body}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}
