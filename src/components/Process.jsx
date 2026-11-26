import { useI18n } from '../i18n/I18nProvider'
import { Section } from './Section'

export const Process = () => {
  const { t } = useI18n()

  return (
    <Section eyebrow={t.process.eyebrow} title={t.process.title} tone="sky">
      <ol className="grid gap-10 md:grid-cols-4 md:gap-6">
        {t.process.steps.map((step, index) => (
          <li key={step.title} data-reveal className="relative border-t-2 border-blue/25 pt-6">
            <span className="absolute -top-0.5 left-0 h-0.5 w-12 bg-blue" />
            <span className="font-mono text-xs font-medium text-blue">{String(index + 1).padStart(2, '0')}</span>
            <h3 className="mt-5 text-xl font-extrabold tracking-tight">{step.title}</h3>
            <p className="pretty mt-3 text-[0.95rem] leading-relaxed text-slate">{step.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
