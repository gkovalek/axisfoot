import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { es } from './es'
import { en } from './en'

const DICTIONARIES = { es, en }
const STORAGE_KEY = 'axisfoot-lang'

const readStoredLang = () => {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === 'es' || stored === 'en') return stored
  } catch {
    // storage no disponible: se usa el idioma del navegador
  }
  return navigator.language?.toLowerCase().startsWith('en') ? 'en' : 'es'
}

const I18nContext = createContext(null)

export const I18nProvider = ({ children }) => {
  const [lang, setLang] = useState(readStoredLang)

  useEffect(() => {
    document.documentElement.lang = lang
    try {
      window.localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // ignorado: la preferencia solo vive en memoria
    }
  }, [lang])

  const value = useMemo(() => ({ lang, setLang, t: DICTIONARIES[lang] }), [lang])
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export const useI18n = () => {
  const context = useContext(I18nContext)
  if (!context) throw new Error('useI18n debe usarse dentro de I18nProvider')
  return context
}
