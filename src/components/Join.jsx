import { useI18n } from '../i18n/I18nProvider'
import { whatsappLink } from '../data/site'
import { Section } from './Section'

export const Join = () => {
  const { t } = useI18n()
  const { join } = t

  return (
    <Section id="sumate" eyebrow={join.eyebrow} title={join.title} lead={join.lead}>
      <ul className="grid gap-5 md:grid-cols-2">
        {join.items.map((item, index) => (
          <li key={item.title} data-reveal className="card flex gap-5 p-7">
            <span className="tabular flex size-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-b from-[#2d82f0] to-blue font-mono text-sm font-medium text-white shadow-[0_8px_16px_-6px_rgb(0_83_180/0.6)]">{index + 1}</span>
            <div>
              <h3 className="text-xl font-extrabold tracking-tight">{item.title}</h3>
              <p className="pretty mt-2 leading-relaxed text-slate">{item.body}</p>
            </div>
          </li>
        ))}
      </ul>
      <div data-reveal className="mt-10">
        <a href={whatsappLink(join.message)} target="_blank" rel="noopener noreferrer" className="btn btn-primary !min-h-14 !px-9 !text-base">{join.cta} <span aria-hidden="true">↗</span></a>
      </div>
    </Section>
  )
}
