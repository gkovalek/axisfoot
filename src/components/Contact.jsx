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
    <Section id="contact" index="05" eyebrow={t.contact.eyebrow} title={t.contact.title} lead={t.contact.lead}>
      <div className="grid gap-12 md:grid-cols-[1fr_1.2fr]">
        <div data-reveal>
          <a
            href={whatsappLink(t.contact.message)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-14 items-center gap-3 rounded-full bg-green px-8 text-base font-semibold text-ink transition-transform duration-150 hover:brightness-110 active:scale-[0.96]"
          >
            {t.contact.whatsapp} <span aria-hidden="true">↗</span>
          </a>
          <p className="eyebrow mt-8">{t.contact.b2b}</p>
        </div>
        <dl className="border-t border-line">
          {channels.map((channel) => (
            <div key={channel.label} data-reveal className="grid grid-cols-[8rem_1fr] gap-4 border-b border-line py-5">
              <dt className="eyebrow pt-1">{channel.label}</dt>
              <dd className="text-lg">
                {channel.href
                  ? <a href={channel.href} target="_blank" rel="noopener noreferrer" className="transition-colors duration-200 hover:text-green">{channel.value}</a>
                  : channel.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  )
}
