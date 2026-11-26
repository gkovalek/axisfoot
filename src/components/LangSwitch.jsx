import { useI18n } from '../i18n/I18nProvider'

const LANGS = ['es', 'en']

export const LangSwitch = ({ onDark = false }) => {
  const { lang, setLang } = useI18n()
  const frame = onDark ? 'border-white/30' : 'border-line-strong'
  const idle = onDark ? 'text-white/70 hover:text-white' : 'text-slate hover:text-ink'
  const active = onDark ? 'bg-white text-ink' : 'bg-ink text-white'

  return (
    <div role="group" aria-label="Language" className={`flex items-center rounded-full border p-0.5 font-mono text-[0.7rem] uppercase tracking-widest ${frame}`}>
      {LANGS.map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={`min-h-8 min-w-9 rounded-full px-2.5 transition-colors duration-200 ${lang === code ? active : idle}`}
        >
          {code}
        </button>
      ))}
    </div>
  )
}
