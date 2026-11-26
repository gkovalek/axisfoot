import { useI18n } from '../i18n/I18nProvider'
import { SITE, whatsappLink } from '../data/site'
import { Section } from './Section'

export const Contact = () => {
  const { t } = useI18n()
  const { labels } = t.contact
  const channels = [
    { label: labels.whatsapp, value: SITE.whatsappDisplay, href: whatsappLink(t.contact.message) },
    { label: labels.instagram, value: SITE.instagramHandle, href: SITE.instagram },
    { label: labels.email, value: SITE.email, href: `mailto:${SITE.email}` },
    { label: labels.location, value: `${SITE.address}, ${SITE.city}` },
  ]

  return (
    <Section id="contacto" eyebrow={t.contact.eyebrow} title={t.contact.title} lead={t.contact.lead} tone="sky">
      <div className="grid gap-12 md:grid-cols-[1fr_1.2fr]">
        <div data-reveal>
          <a href={whatsappLink(t.contact.message)} target="_blank" rel="noopener noreferrer" className="btn btn-primary !min-h-14 !px-9 !text-base">{t.contact.whatsapp} <span aria-hidden="true">↗</span></a>
        </div>
        <dl className="border-t border-line-strong">
          {channels.map((channel) => (
            <div key={channel.label} data-reveal className="grid grid-cols-[7.5rem_1fr] gap-4 border-b border-line-strong py-5">
              <dt className="eyebrow pt-1">{channel.label}</dt>
              <dd className="min-w-0 break-words text-lg font-semibold">
                {channel.href
                  ? <a href={channel.href} target="_blank" rel="noopener noreferrer" className="transition-colors duration-200 hover:text-blue">{channel.value}</a>
                  : channel.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  )
}
