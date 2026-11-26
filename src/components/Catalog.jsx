import { useState } from 'react'
import { useI18n } from '../i18n/I18nProvider'
import { CATALOG, CATEGORIES } from '../data/catalog'
import { whatsappLink } from '../data/site'
import { Section } from './Section'

export const Catalog = () => {
  const { t, lang } = useI18n()
  const [category, setCategory] = useState(CATEGORIES[0])
  const models = CATALOG.filter((model) => model.category === category)

  return (
    <Section id="catalog" index="02" eyebrow={t.catalog.eyebrow} title={t.catalog.title} lead={t.catalog.lead} className="bg-surface">
      <div data-reveal role="tablist" aria-label={t.catalog.eyebrow} className="mb-10 inline-flex rounded-full border border-line p-1">
        {CATEGORIES.map((key) => (
          <button
            key={key}
            type="button"
            role="tab"
            aria-selected={category === key}
            onClick={() => setCategory(key)}
            className={`min-h-10 rounded-full px-5 text-sm font-medium transition-colors duration-200 ${category === key ? 'bg-snow text-ink' : 'text-mist hover:text-snow'}`}
          >
            {t.catalog.categories[key]}
          </button>
        ))}
      </div>

      <ul key={category} data-reveal className="border-t border-line">
        {models.map((model) => (
          <li key={model.code} className="group grid grid-cols-[auto_1fr_auto] items-center gap-x-5 gap-y-1 border-b border-line py-5 transition-colors duration-200 hover:bg-raised md:grid-cols-[7rem_1fr_14rem_auto] md:px-4">
            <span className="font-mono text-xs text-mist">{model.code}</span>
            <span className="flex items-center gap-3 text-lg font-medium tracking-tight md:text-xl">
              <span aria-hidden="true" className="size-3 shrink-0 rounded-full ring-1 ring-white/20" style={{ background: model.color }} />
              {model.name[lang]}
            </span>
            <span className="eyebrow col-start-2 row-start-2 md:col-start-3 md:row-start-1" title={t.catalog.zones}>{model.zones}</span>
            <a
              href={whatsappLink(`${t.contact.message} (${model.code} · ${model.name[lang]})`)}
              target="_blank"
              rel="noopener noreferrer"
              className="row-span-2 inline-flex min-h-11 items-center gap-2 rounded-full border border-line px-4 text-sm text-mist transition-colors duration-200 hover:border-green hover:text-green md:row-span-1"
            >
              {t.catalog.ask} <span aria-hidden="true">↗</span>
            </a>
          </li>
        ))}
      </ul>
      <p className="eyebrow mt-8 normal-case tracking-wider">{t.catalog.legend}</p>
    </Section>
  )
}
