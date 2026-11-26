import { I18nProvider } from './i18n/I18nProvider'
import { useSmoothScroll } from './hooks/useSmoothScroll'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Stats } from './components/Stats'
import { Technology } from './components/Technology'
import { Catalog } from './components/Catalog'
import { Process } from './components/Process'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

const Site = () => {
  useSmoothScroll()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Technology />
        <Catalog />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

const App = () => (
  <I18nProvider>
    <Site />
  </I18nProvider>
)

export default App
