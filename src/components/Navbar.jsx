import { useEffect, useState } from 'react'
import { useI18n } from '../i18n/I18nProvider'
import { LangSwitch } from './LangSwitch'

const LINK_KEYS = ['technology', 'catalog', 'process', 'about']
const SCROLLED_THRESHOLD = 24

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

  const closeMenu = () => setOpen(false)

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${scrolled || open ? 'border-b border-line bg-ink/80 backdrop-blur-xl' : 'border-b border-transparent'}`}>
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6" aria-label="Principal">
        <a href="#top" className="flex items-center gap-3" aria-label="Axis Foot">
          <img src={`${import.meta.env.BASE_URL}logo-transparente.png`} alt="" width="40" height="40" className="size-10 object-contain" />
          <span className="text-sm font-semibold uppercase tracking-[0.22em]">Axis <span className="text-green">Foot</span></span>
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {LINK_KEYS.map((key) => (
            <li key={key}>
              <a href={`#${key}`} className="text-sm text-mist transition-colors duration-200 hover:text-snow">{t.nav[key]}</a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          <LangSwitch />
          <a href="#contact" className="rounded-full bg-green px-5 py-2.5 text-sm font-semibold text-ink transition-transform duration-150 hover:brightness-110 active:scale-[0.96]">
            {t.nav.cta}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={t.nav.menu}
          className="flex size-11 items-center justify-center md:hidden"
        >
          <span className="relative block h-3 w-6">
            <span className={`absolute inset-x-0 h-px bg-snow transition-transform duration-300 ${open ? 'top-1.5 rotate-45' : 'top-0'}`} />
            <span className={`absolute inset-x-0 h-px bg-snow transition-transform duration-300 ${open ? 'top-1.5 -rotate-45' : 'top-3'}`} />
          </span>
        </button>
      </nav>

      {open && (
        <div className="flex flex-col gap-1 border-t border-line px-6 pb-8 pt-4 md:hidden">
          {[...LINK_KEYS, 'contact'].map((key) => (
            <a key={key} href={`#${key}`} onClick={closeMenu} className="py-3 text-2xl font-medium tracking-tight">{t.nav[key]}</a>
          ))}
          <div className="mt-4"><LangSwitch /></div>
        </div>
      )}
    </header>
  )
}
