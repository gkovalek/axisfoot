import { useI18n } from '../i18n/I18nProvider'
import { EQUIPOS } from '../data/equipos'
import { assetUrl } from '../data/site'
import { Section } from './Section'

export const Equipment = () => {
  const { t, lang } = useI18n()
  const { equipment } = t

  return (
    <Section id="equipos" eyebrow={equipment.eyebrow} title={equipment.title} lead={equipment.lead}>
      <ul className="grid gap-6 md:grid-cols-2">
        {EQUIPOS.map((equipo) => (
          <li key={equipo.id} data-reveal className="card overflow-hidden">
            <div className="bg-white">
              <img src={assetUrl(equipo.image)} alt={equipo.name[lang]} width="1000" height="1000" loading="lazy" decoding="async" className="aspect-square w-full object-contain" />
            </div>
            <div className="border-t border-line p-7">
              <h3 className="text-2xl font-extrabold tracking-tight">{equipo.name[lang]}</h3>
              <p className="pretty mt-2 text-slate">{equipo.tagline[lang]}</p>
              <ul className="mt-5 grid gap-2.5">
                {equipo.points[lang].map((point) => (
                  <li key={point} className="flex gap-3 text-[0.95rem] leading-snug">
                    <span aria-hidden="true" className="mt-1.5 size-2 shrink-0 rounded-full bg-green" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>

      <div data-reveal className="mt-10 rounded-2xl bg-sky p-7 md:p-9">
        <p className="eyebrow mb-4 text-blue">{equipment.commonTitle}</p>
        <ul className="grid gap-3 md:grid-cols-3">
          {equipment.common.map((item) => (
            <li key={item} className="flex gap-3 text-[0.95rem] font-semibold leading-snug"><span aria-hidden="true" className="text-green-ink">✓</span>{item}</li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
