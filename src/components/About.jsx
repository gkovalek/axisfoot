import { useI18n } from '../i18n/I18nProvider'
import { Section } from './Section'

export const About = () => {
  const { t } = useI18n()

  return (
    <Section id="about" index="04" eyebrow={t.about.eyebrow} title={t.about.quote} className="bg-surface">
      <p data-reveal className="pretty mb-20 max-w-2xl text-lg leading-relaxed text-mist">{t.about.vision}</p>
      <ul className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4">
        {t.about.pillars.map((pillar) => (
          <li key={pillar.title} data-reveal className="bg-ink p-8">
            <h3 className="text-base font-semibold">{pillar.title}</h3>
            <p className="pretty mt-3 text-sm leading-relaxed text-mist">{pillar.body}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
