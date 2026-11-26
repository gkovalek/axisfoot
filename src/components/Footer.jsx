import { useI18n } from '../i18n/I18nProvider'
import { assetUrl } from '../data/site'

export const Footer = () => {
  const { t } = useI18n()

  return (
    <footer className="border-t border-line bg-paper px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 md:flex-row">
        <img src={assetUrl('logo-oscuro.png')} alt="Axis Foot" width="64" height="64" className="size-16 object-contain" />
        <nav aria-label="Legal" className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm font-semibold">
          <a href={assetUrl('privacidad/index.html')} className="text-slate transition-colors hover:text-blue">{t.footer.privacy}</a>
          <a href={assetUrl('terminos/index.html')} className="text-slate transition-colors hover:text-blue">{t.footer.terms}</a>
          <a href="#inicio" className="text-slate transition-colors hover:text-blue">{t.footer.top} ↑</a>
        </nav>
        <p className="eyebrow text-center">© {new Date().getFullYear()} Axis Foot · Argentina · {t.footer.rights}</p>
      </div>
    </footer>
  )
}
