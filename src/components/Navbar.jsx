import { useEffect, useState } from 'react'
import { useI18n } from '../i18n/I18nProvider'
import { assetUrl } from '../data/site'
import { LangSwitch } from './LangSwitch'

const LINKS = [
  { key: 'insoles', href: '#plantillas' },
  { key: 'equipment', href: '#equipos' },
  { key: 'join', href: '#sumate' },
  { key: 'contact', href: '#contacto' },
]
const SCROLLED_THRESHOLD = 40

export const Navbar = () => {
  const { t } = useI18n()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLLED_THRESHOLD)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const solid = scrolled || open
  const text = solid ? 'text-ink' : 'text-white'
  const muted = solid ? 'text-slate hover:text-ink' : 'text-white/80 hover:text-white'
  const closeMenu = () => setOpen(false)

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${solid ? 'border-b border-line bg-white/90 shadow-[0_8px_24px_-16px_rgb(11_27_51/0.25)] backdrop-blur-xl' : 'border-b border-transparent'}`}>
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6" aria-label="Principal">
        <a href="#inicio" className="flex items-center gap-3" aria-label="Axis Foot">
          <img src={assetUrl(solid ? 'logo-oscuro.png' : 'logo-transparente.png')} alt="" width="40" height="40" className="size-10 object-contain" />
          <span className={`text-sm font-extrabold uppercase tracking-[0.22em] ${text}`}>Axis <span className={solid ? 'text-green-ink' : 'text-green'}>Foot</span></span>
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {LINKS.map(({ key, href }) => (
            <li key={key}><a href={href} className={`text-sm font-semibold transition-colors duration-200 ${muted}`}>{t.nav[key]}</a></li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          <LangSwitch onDark={!solid} />
          <a href="#contacto" className={`btn !min-h-10 !px-5 !text-sm ${solid ? 'btn-primary' : 'btn-light'}`}>{t.nav.cta}</a>
        </div>

        <button type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label={t.nav.menu} className="flex size-11 items-center justify-center md:hidden">
          <span className="relative block h-3 w-6">
            <span className={`absolute inset-x-0 h-0.5 rounded bg-current transition-transform duration-300 ${solid ? 'text-ink' : 'text-white'} ${open ? 'top-1.5 rotate-45' : 'top-0'}`} />
            <span className={`absolute inset-x-0 h-0.5 rounded bg-current transition-transform duration-300 ${solid ? 'text-ink' : 'text-white'} ${open ? 'top-1.5 -rotate-45' : 'top-3'}`} />
          </span>
        </button>
      </nav>

      {open && (
        <div className="flex flex-col gap-1 border-t border-line px-6 pb-8 pt-4 md:hidden">
          {LINKS.map(({ key, href }) => (
            <a key={key} href={href} onClick={closeMenu} className="py-3 text-2xl font-bold tracking-tight text-ink">{t.nav[key]}</a>
          ))}
          <div className="mt-4"><LangSwitch /></div>
        </div>
      )}
    </header>
  )
}
