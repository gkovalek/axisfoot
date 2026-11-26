import { I18nProvider } from './i18n/I18nProvider'
import { useSmoothScroll } from './hooks/useSmoothScroll'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Insoles } from './components/Insoles'
import { Equipment } from './components/Equipment'
import { Process } from './components/Process'
import { Join } from './components/Join'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { WhatsAppFab } from './components/WhatsAppFab'

const Site = () => {
  useSmoothScroll()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Insoles />
        <Equipment />
        <Process />
        <Join />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  )
}

const App = () => (
  <I18nProvider>
    <Site />
  </I18nProvider>
)

export default App
