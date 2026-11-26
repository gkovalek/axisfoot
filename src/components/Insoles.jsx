import { useState } from 'react'
import { useI18n } from '../i18n/I18nProvider'
import { CATALOG, GROUPS, SIZE_RANGE } from '../data/catalog'
import { whatsappLink } from '../data/site'
import { useReveal } from '../hooks/useReveal'
import { InsoleAssembly } from './InsoleAssembly'

const ModuleHeader = () => {
  const { t } = useI18n()
  const scope = useReveal()

  return (
    <header ref={scope} className="bg-paper px-6 pb-4 pt-24 md:pt-36">
      <div className="mx-auto max-w-6xl">
        <p data-reveal className="eyebrow mb-5 text-blue">{t.insoles.eyebrow}</p>
        <h2 data-reveal className="balance max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">{t.insoles.title}</h2>
        <p data-reveal className="pretty mt-6 max-w-2xl text-lg leading-relaxed text-slate">{t.insoles.lead}</p>
      </div>
    </header>
  )
}

const ModelCard = ({ model }) => {
  const { t, lang } = useI18n()
  const message = `${t.contact.askModel} ${model.name[lang]}`

  return (
    <li data-reveal className="card flex flex-col gap-4 p-6">
      <div className="flex items-start justify-between gap-4">
        <h4 className="text-lg font-extrabold leading-snug tracking-tight">{model.name[lang]}</h4>
        <span className="tabular shrink-0 rounded-full bg-sky px-3 py-1 font-mono text-[0.7rem] font-medium text-blue">{t.insoles.sizes} {SIZE_RANGE}</span>
      </div>
      <div>
        <p className="eyebrow mb-1.5 !text-[0.65rem]">{t.insoles.solves}</p>
        <p className="pretty text-[0.95rem] leading-relaxed text-slate">{model.solves[lang]}</p>
      </div>
      <a href={whatsappLink(message)} target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex min-h-11 items-center gap-1.5 text-sm font-bold text-blue transition-colors hover:text-blue-deep">
        {t.contact.ask} <span aria-hidden="true">↗</span>
      </a>
    </li>
  )
}

const ModelGroups = () => {
  const { t } = useI18n()
  const scope = useReveal()
  const [group, setGroup] = useState(GROUPS[0])
  const models = CATALOG.filter((model) => model.group === group)
  const current = t.insoles.groups[group]

  return (
    <section ref={scope} className="bg-sky px-6 py-24 md:py-32" aria-labelledby="catalogo-titulo">
      <div className="mx-auto max-w-6xl">
        <h3 id="catalogo-titulo" data-reveal className="balance max-w-2xl text-3xl font-extrabold tracking-tight md:text-5xl">{t.insoles.groupsTitle}</h3>
        <p data-reveal className="mt-4 text-lg text-slate">{t.insoles.groupsLead}</p>

        <div data-reveal role="tablist" aria-label={t.insoles.groupsTitle} className="mt-10 inline-flex max-w-full gap-1 rounded-full bg-white p-1 shadow-card">
          {GROUPS.map((key) => (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={group === key}
              onClick={() => setGroup(key)}
              className={`btn !min-h-11 !px-4 !text-sm md:!px-6 ${group === key ? 'btn-primary' : 'text-slate hover:text-ink'}`}
            >
              {t.insoles.groups[key].name}
            </button>
          ))}
        </div>

        <p className="mt-6 text-lg font-semibold text-ink">{current.blurb}</p>

        <ul key={group} className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {models.map((model) => <ModelCard key={model.id} model={model} />)}
        </ul>
      </div>
    </section>
  )
}

export const Insoles = () => {
  const { t } = useI18n()

  return (
    <div id="plantillas">
      <ModuleHeader />
      <InsoleAssembly labels={t.layers} hint={t.insoles.hint} />
      <ModelGroups />
    </div>
  )
}
