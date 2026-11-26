import { useI18n } from '../i18n/I18nProvider'
import { Section } from './Section'

export const Process = () => {
  const { t } = useI18n()

  return (
    <Section id="process" index="03" eyebrow={t.process.eyebrow} title={t.process.title}>
      <ol className="grid gap-10 md:grid-cols-4 md:gap-6">
        {t.process.steps.map((step, index) => (
          <li key={step.title} data-reveal className="relative border-t border-line-strong pt-6">
            <span className="absolute -top-px left-0 h-px w-10 bg-green" />
            <span className="font-mono text-xs text-green">{String(index + 1).padStart(2, '0')}</span>
            <h3 className="mt-6 text-xl font-medium tracking-tight">{step.title}</h3>
            <p className="pretty mt-3 text-sm leading-relaxed text-mist">{step.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
