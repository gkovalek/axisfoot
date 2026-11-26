import { useI18n } from '../i18n/I18nProvider'

const LANGS = ['es', 'en']

export const LangSwitch = () => {
  const { lang, setLang } = useI18n()

  return (
    <div role="group" aria-label="Language" className="flex items-center rounded-full border border-line p-0.5 font-mono text-[0.7rem] uppercase tracking-widest">
      {LANGS.map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={`min-h-8 min-w-9 rounded-full px-2.5 transition-colors duration-200 ${lang === code ? 'bg-snow text-ink' : 'text-mist hover:text-snow'}`}
        >
          {code}
        </button>
      ))}
    </div>
  )
}
