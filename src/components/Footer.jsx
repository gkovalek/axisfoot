import { useI18n } from '../i18n/I18nProvider'

export const Footer = () => {
  const { t } = useI18n()

  return (
    <footer className="border-t border-line px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <img src={`${import.meta.env.BASE_URL}logo-transparente.png`} alt="Axis Foot" width="56" height="56" className="size-14 object-contain" />
        <p className="eyebrow text-center">© {new Date().getFullYear()} Axis Foot · Argentina · {t.footer.rights}</p>
        <a href="#top" className="eyebrow transition-colors duration-200 hover:text-snow">{t.footer.top} ↑</a>
      </div>
    </footer>
  )
}
