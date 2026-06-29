import { useState } from 'react'
import './App.css'

// Paleta Axis Foot
const BLUE = '#1055C0'
const BLUE_DARK = '#0D44A0'
const BLUE_LIGHT = '#E8F0FC'
const BLACK = '#111111'
const GRAY_700 = '#444444'
const GRAY_400 = '#999999'
const GRAY_100 = '#F5F5F5'
const GRAY_200 = '#E8E8E8'
const WHITE = '#FFFFFF'

function Navbar() {
  const [open, setOpen] = useState(false)
  const links = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Tecnología', href: '#tecnologia' },
    { label: 'Proceso', href: '#proceso' },
    { label: 'Para quién', href: '#para-quien' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Contacto', href: '#contacto' },
  ]
  return (
    <nav style={{ background: WHITE, borderBottom: `1px solid ${GRAY_200}` }} className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#inicio" className="flex items-center gap-2">
          <img src="/logo-color.png" alt="Axis Foot" className="h-10 w-auto" />
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} style={{ color: GRAY_700 }} className="text-sm font-semibold uppercase tracking-widest hover:opacity-60 transition-opacity">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contacto"
          className="hidden md:inline-flex text-sm font-bold uppercase tracking-widest px-5 py-2 rounded-full text-white transition-all hover:opacity-80"
          style={{ background: BLUE }}
        >
          Reservar turno
        </a>
        <button
          className="md:hidden p-2"
          style={{ color: BLACK }}
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <div style={{ background: WHITE, borderTop: `1px solid ${GRAY_200}` }} className="md:hidden px-6 py-4 flex flex-col gap-4">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{ color: GRAY_700 }} className="text-sm font-semibold uppercase tracking-widest">
              {l.label}
            </a>
          ))}
          <a href="#contacto" onClick={() => setOpen(false)} className="text-sm font-bold uppercase tracking-widest px-5 py-3 rounded-full text-white text-center" style={{ background: BLUE }}>
            Reservar turno
          </a>
        </div>
      )}
    </nav>
  )
}

function Hero() {
  return (
    <section id="inicio" style={{ background: WHITE }} className="min-h-screen flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-6 w-full py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div>
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1 mb-8 text-xs font-bold uppercase tracking-widest"
              style={{ background: BLUE_LIGHT, color: BLUE }}
            >
              <span className="w-2 h-2 rounded-full" style={{ background: BLUE }}></span>
              Tecnología biomecánica avanzada
            </div>
            <h1
              className="text-5xl md:text-6xl font-black leading-none mb-6 uppercase"
              style={{ color: BLACK }}
            >
              BIENESTAR EN<br />
              <span style={{ color: BLUE }}>TUS PIES.</span>
            </h1>
            <p className="text-lg leading-relaxed mb-10" style={{ color: GRAY_700 }}>
              Combinamos análisis biomecánico con IA y criterio profesional para crear tus plantillas personalizadas. Diagnóstico y entrega en la misma visita.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#proceso"
                className="px-8 py-4 rounded-full font-bold text-white uppercase tracking-widest text-sm text-center hover:opacity-80 transition-all"
                style={{ background: BLUE }}
              >
                Quiero mi estudio
              </a>
              <a
                href="#contacto"
                className="px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm text-center border-2 transition-all hover:opacity-60"
                style={{ borderColor: BLUE, color: BLUE }}
              >
                Reservar turno
              </a>
            </div>
            {/* Métricas */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-12" style={{ borderTop: `1px solid ${GRAY_200}` }}>
              {[
                { value: '98.2%', label: 'Resolución clínica' },
                { value: '0.4s', label: 'Respuesta digital' },
                { value: '3D', label: 'Escaneo biomecánico' },
              ].map(s => (
                <div key={s.label}>
                  <div className="text-3xl font-black mb-1" style={{ color: BLUE }}>{s.value}</div>
                  <div className="text-xs uppercase tracking-widest font-semibold" style={{ color: GRAY_400 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Imagen hero */}
          <div className="rounded-3xl overflow-hidden" style={{ minHeight: '500px' }}>
            <img
              src="/hero.png"
              alt="Plantilla Axis Foot"
              className="w-full h-full object-cover"
              style={{ minHeight: '500px', display: 'block' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function Tech() {
  return (
    <section id="tecnologia" className="py-24 px-6" style={{ background: GRAY_100 }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: BLUE }}>01 — Tecnología de vanguardia</span>
          <h2 className="text-4xl md:text-5xl font-black mt-4 uppercase leading-tight" style={{ color: BLACK }}>
            EL PODER DE<br /><span style={{ color: BLUE }}>LA IA EN TUS PIES</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: 'Escaneo tridimensional', desc: 'Digitalizamos tu apoyo con precisión biomecánica asistida por IA y con error cero.', icon: '⬡' },
            { title: 'Diagnóstico por IA', desc: 'Nuestra plataforma analiza instantáneamente tu pisada mediante algoritmos de visión artificial, calculando áreas de presión y torque.', icon: '◎' },
            { title: 'Predicción de fatiga', desc: 'Entendemos cómo se comportará tu pie tras horas de uso para diseñar la plantilla perfecta.', icon: '⌀' },
          ].map(c => (
            <div key={c.title} className="rounded-2xl p-8 hover:shadow-lg transition-all" style={{ background: WHITE, border: `1px solid ${GRAY_200}` }}>
              <div className="text-4xl mb-6 font-bold" style={{ color: BLUE }}>{c.icon}</div>
              <h3 className="text-lg font-black uppercase tracking-wide mb-3" style={{ color: BLACK }}>{c.title}</h3>
              <p className="leading-relaxed text-sm" style={{ color: GRAY_700 }}>{c.desc}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-4 mt-8">
          {[['88%', 'Precisión biométrica'], ['94%', 'Baropodometría 4.0'], ['62%', 'Mejora de rendimiento']].map(([v, l]) => (
            <div key={l} className="rounded-2xl p-6 text-center" style={{ background: WHITE, border: `1px solid ${GRAY_200}` }}>
              <div className="text-3xl font-black mb-2" style={{ color: BLUE }}>{v}</div>
              <div className="text-xs uppercase tracking-widest font-semibold" style={{ color: GRAY_400 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhyAxis() {
  return (
    <section className="py-24 px-6" style={{ background: WHITE }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: BLUE }}>Diferencial exclusivo</span>
          <h2 className="text-4xl md:text-5xl font-black mt-4 uppercase leading-tight" style={{ color: BLACK }}>
            ¿POR QUÉ<br /><span style={{ color: BLUE }}>AXIS FOOT?</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-black uppercase mb-4" style={{ color: BLACK }}>
              SIN ESPERAS.<br />ENTREGA EN EL ACTO.
            </h3>
            <p className="leading-relaxed mb-8" style={{ color: GRAY_700 }}>
              A diferencia de los sistemas tradicionales que requieren semanas de espera, nuestra integración tecnológica Total-Sync nos permite diseñar, fabricar y entregarte tus plantillas personalizadas en una sola visita.
            </p>
            <div className="flex flex-col gap-3">
              {['Diagnóstico instantáneo', 'Cero días de espera', 'Precisión en tiempo real'].map(item => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-black text-white flex-shrink-0" style={{ background: BLUE }}>✓</div>
                  <span className="font-semibold uppercase tracking-wide text-sm" style={{ color: BLACK }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { num: '01', title: 'Medición de precisión', desc: 'Evaluación clínica exhaustiva con protocolos médicos avanzados.' },
              { num: '02', title: 'Digitalización 3D', desc: 'Capturamos la morfología exacta de tus pies en segundos.' },
              { num: '03', title: 'Potencia de diseño', desc: 'Procesamos miles de puntos de datos para la estructura óptima.' },
              { num: '04', title: 'Criterio profesional', desc: 'Cada estudio es supervisado por especialistas.' },
            ].map(s => (
              <div key={s.num} className="rounded-xl p-5" style={{ background: GRAY_100, border: `1px solid ${GRAY_200}` }}>
                <div className="text-xs font-black mb-2" style={{ color: BLUE }}>{s.num}</div>
                <div className="text-sm font-black uppercase mb-2" style={{ color: BLACK }}>{s.title}</div>
                <div className="text-xs leading-relaxed" style={{ color: GRAY_700 }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Process() {
  const steps = [
    { num: '01', title: 'Medición de precisión', desc: 'Evaluación clínica exhaustiva utilizando protocolos médicos avanzados para entender la singularidad de tu pisada.' },
    { num: '02', title: 'Digitalización 3D', desc: 'Capturamos la morfología exacta de tus pies en segundos, creando un gemelo digital de alta fidelidad.' },
    { num: '03', title: 'Potencia de diseño', desc: 'Nuestro sistema avanzado procesa miles de puntos de datos instantáneamente para diseñar la estructura óptima.' },
    { num: '04', title: 'Criterio profesional y humano', desc: 'La tecnología es nuestra herramienta, pero el criterio es profesional. Cada estudio es supervisado por especialistas.' },
    { num: '05', title: 'Acompañamiento continuo', desc: 'Tu pisada evoluciona y nosotros con ella. Ofrecemos re-evaluación a los 3, 6 y 12 meses.' },
  ]
  return (
    <section id="proceso" className="py-24 px-6" style={{ background: GRAY_100 }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: BLUE }}>La revolución del tiempo</span>
          <h2 className="text-4xl md:text-5xl font-black mt-4 uppercase leading-tight" style={{ color: BLACK }}>
            NUESTRO<br /><span style={{ color: BLUE }}>PROCESO</span>
          </h2>
        </div>
        <div className="flex flex-col gap-4">
          {steps.map(s => (
            <div key={s.num} className="rounded-2xl p-6 flex gap-6 items-start hover:shadow-md transition-all" style={{ background: WHITE, border: `1px solid ${GRAY_200}` }}>
              <div className="text-2xl font-black flex-shrink-0" style={{ color: BLUE }}>{s.num}</div>
              <div>
                <h3 className="text-base font-black uppercase tracking-wide mb-2" style={{ color: BLACK }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: GRAY_700 }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ForWho() {
  const segments = [
    { title: 'Confort diario y laboral', desc: 'La solución ideal para quienes pasan muchas horas de pie o sufren de patologías comunes como fascitis plantar, espolones o dolor lumbar derivado de una mala pisada.', icon: '🏢' },
    { title: 'Niños y adolescentes', desc: 'Detección temprana y acompañamiento en la etapa de crecimiento. Corregimos desviaciones a tiempo para asegurar una postura saludable en la adultez.', icon: '👶' },
    { title: 'Deportistas de alto rendimiento', desc: 'Optimización de la pisada para mejorar el gesto deportivo, prevenir lesiones por sobrecarga y maximizar la recuperación en running, tenis y fútbol.', icon: '🏃' },
  ]
  return (
    <section id="para-quien" className="py-24 px-6" style={{ background: WHITE }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: BLUE }}>Para quién diseñamos</span>
          <h2 className="text-4xl md:text-5xl font-black mt-4 uppercase leading-tight" style={{ color: BLACK }}>
            NUESTRA TECNOLOGÍA<br /><span style={{ color: BLUE }}>SE ADAPTA</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto" style={{ color: GRAY_700 }}>
            A cada ritmo de vida, desde la alta competencia hasta el bienestar diario.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {segments.map(s => (
            <div key={s.title} className="rounded-2xl p-8 hover:shadow-lg transition-all" style={{ background: GRAY_100, border: `1px solid ${GRAY_200}` }}>
              <div className="text-4xl mb-6">{s.icon}</div>
              <h3 className="text-lg font-black uppercase tracking-wide mb-3" style={{ color: BLACK }}>{s.title}</h3>
              <p className="leading-relaxed text-sm" style={{ color: GRAY_700 }}>{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="rounded-2xl p-8 md:p-12 text-center" style={{ background: BLUE, color: WHITE }}>
          <h3 className="text-2xl font-black uppercase mb-4">¿Gestionás un club o gimnasio?</h3>
          <p className="mb-6 max-w-xl mx-auto opacity-80">
            Llevamos la tecnología de Axis Foot a tu institución. Que tus socios entrenen mejor y con menos riesgo de lesiones.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {['Convenios corporativos', 'Jornadas de evaluación en sitio', 'Beneficios exclusivos escolares'].map(b => (
              <span key={b} className="border border-white/40 text-white/80 text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full">
                {b}
              </span>
            ))}
          </div>
          <a
            href="#contacto"
            className="inline-flex px-8 py-3 rounded-full font-bold uppercase tracking-widest text-sm"
            style={{ background: WHITE, color: BLUE }}
          >
            Contactar por alianzas
          </a>
        </div>
      </div>
    </section>
  )
}

function About() {
  const pillars = [
    { title: 'Innovación con propósito', desc: 'Utilizamos IA y fabricación digital no solo por modernidad, sino para lograr una precisión clínica inalcanzable con métodos tradicionales.' },
    { title: 'Eficiencia humana', desc: 'Respetamos el tiempo del paciente. Optimizamos nuestros procesos para que el diagnóstico y la solución ocurran en una sola visita.' },
    { title: 'Transparencia profesional', desc: 'Creemos en la educación del paciente. Explicamos cada dato para que la persona sea protagonista de su recuperación.' },
    { title: 'Compromiso de evolución', desc: 'No entregamos un producto y nos olvidamos. Nuestro protocolo asegura que la solución se adapte a la evolución real del usuario.' },
    { title: 'Criterio clínico', desc: 'La tecnología es nuestra herramienta, pero la salud es nuestra prioridad. Cada diseño está respaldado por una evaluación profesional integral.' },
  ]
  return (
    <section id="nosotros" className="py-24 px-6" style={{ background: GRAY_100 }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 mb-20">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: BLUE }}>Nuestra propuesta</span>
            <blockquote className="text-xl md:text-2xl font-black mt-6 leading-tight" style={{ color: BLACK }}>
              "Transformar la calidad de vida de las personas mediante soluciones biomecánicas de vanguardia. En Axis Foot, combinamos tecnología de diagnóstico digital con criterio profesional para ofrecer plantillas personalizadas de alta precisión en el acto."
            </blockquote>
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: BLUE }}>Visión estratégica</span>
            <blockquote className="text-xl md:text-2xl font-black mt-6 leading-tight" style={{ color: BLACK }}>
              "Ser el centro de referencia líder en Argentina en salud postural y biomecánica digital, reconocidos por la innovación constante y por establecer un nuevo estándar de eficiencia."
            </blockquote>
          </div>
        </div>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black uppercase" style={{ color: BLACK }}>
            NUESTROS <span style={{ color: BLUE }}>PILARES</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {pillars.map(p => (
            <div key={p.title} className="rounded-xl p-6 hover:shadow-md transition-all" style={{ background: WHITE, border: `1px solid ${GRAY_200}` }}>
              <div className="w-8 h-1 rounded mb-4" style={{ background: BLUE }}></div>
              <h3 className="text-sm font-black uppercase tracking-wide mb-3" style={{ color: BLACK }}>{p.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: GRAY_700 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const reviews = [
    { text: 'Entré con un dolor que no me dejaba correr 5km y me fui con las plantillas puestas. El cambio fue inmediato.', name: 'Juan P.', role: 'Runner' },
    { text: 'Paso 8 horas parada. Las plantillas de Axis Foot me cambiaron la vida, ya no llego con los pies explotados a casa.', name: 'María S.', role: 'Docente' },
    { text: 'Llevamos a mi hijo por una desviación en la pisada. El estudio digital es increíblemente preciso.', name: 'Carlos T.', role: 'Padre de familia' },
  ]
  return (
    <section className="py-24 px-6" style={{ background: WHITE }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: BLUE }}>Lo que dicen</span>
          <h2 className="text-4xl font-black mt-4 uppercase" style={{ color: BLACK }}>
            NUESTROS <span style={{ color: BLUE }}>PACIENTES</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map(r => (
            <div key={r.name} className="rounded-2xl p-8 flex flex-col gap-6" style={{ background: GRAY_100, border: `1px solid ${GRAY_200}` }}>
              <p className="leading-relaxed text-sm italic flex-1" style={{ color: GRAY_700 }}>"{r.text}"</p>
              <div>
                <div className="font-black text-sm uppercase tracking-wide" style={{ color: BLACK }}>{r.name}</div>
                <div className="text-xs uppercase tracking-widest mt-1 font-bold" style={{ color: BLUE }}>{r.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQ() {
  const [open, setOpen] = useState(null)
  const items = [
    { q: '¿Cuánto dura el estudio?', a: 'La consulta completa, incluyendo evaluación, escaneo 3D y fabricación de las plantillas, tiene una duración aproximada de 45 a 60 minutos.' },
    { q: '¿Tengo que traer algún calzado especial?', a: 'Te recomendamos traer el calzado que usás habitualmente (laboral o deportivo), así podemos evaluar tu pisada en el contexto real.' },
    { q: '¿Sirven para cualquier zapatilla?', a: 'Nuestras plantillas son de perfil bajo y se adaptan a la mayoría de los calzados: zapatillas deportivas, de uso diario y zapatos con plantilla removible.' },
    { q: '¿Las plantillas se confeccionan en la misma consulta?', a: 'Sí. Gracias a nuestra tecnología Total-Sync, fabricamos tus plantillas durante la misma visita. Te las llevás puestas el día de la consulta.' },
  ]
  return (
    <section className="py-24 px-6" style={{ background: GRAY_100 }}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black uppercase" style={{ color: BLACK }}>
            PREGUNTAS <span style={{ color: BLUE }}>FRECUENTES</span>
          </h2>
        </div>
        <div className="flex flex-col gap-3">
          {items.map((item, i) => (
            <div key={i} className="rounded-xl overflow-hidden" style={{ background: WHITE, border: `1px solid ${GRAY_200}` }}>
              <button
                className="w-full text-left px-6 py-5 flex justify-between items-center gap-4"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-sm font-black uppercase tracking-wide" style={{ color: BLACK }}>{item.q}</span>
                <span className="text-2xl font-thin flex-shrink-0" style={{ color: BLUE }}>{open === i ? '−' : '+'}</span>
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-sm leading-relaxed" style={{ color: GRAY_700 }}>{item.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contacto" className="py-24 px-6" style={{ background: WHITE }}>
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-xs font-bold uppercase tracking-widest" style={{ color: BLUE }}>Contáctanos</span>
        <h2 className="text-4xl md:text-5xl font-black mt-4 mb-12 uppercase" style={{ color: BLACK }}>
          RESERVÁ TU<br /><span style={{ color: BLUE }}>TURNO HOY</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: '📍', label: 'Ubicación', content: 'Tu dirección aquí\nCiudad, Argentina' },
            { icon: '💬', label: 'WhatsApp', content: '+54 9 351 000 0000', href: 'https://wa.me/5493510000000' },
            { icon: '📞', label: 'Teléfono', content: '+54 351 000 0000', href: 'tel:+543510000000' },
          ].map(c => (
            <div key={c.label} className="rounded-2xl p-8" style={{ background: GRAY_100, border: `1px solid ${GRAY_200}` }}>
              <div className="text-3xl mb-4">{c.icon}</div>
              <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: BLUE }}>{c.label}</div>
              {c.href
                ? <a href={c.href} className="font-semibold text-sm hover:underline" style={{ color: BLACK }}>{c.content}</a>
                : <div className="font-semibold text-sm" style={{ color: BLACK }}>{c.content}</div>}
            </div>
          ))}
        </div>
        <a
          href="https://wa.me/5493510000000"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-black text-white uppercase tracking-widest text-sm hover:opacity-80 transition-all"
          style={{ background: BLUE }}
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Escribinos por WhatsApp
        </a>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer style={{ background: GRAY_100, borderTop: `1px solid ${GRAY_200}` }} className="py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <img src="/logo-color.png" alt="Axis Foot" className="h-10 w-auto" />
        <p className="text-xs uppercase tracking-widest text-center" style={{ color: GRAY_400 }}>
          © 2026 Axis Foot. Argentina.
        </p>
        <div className="flex gap-6">
          {[['#inicio','Inicio'],['#tecnologia','Tecnología'],['#proceso','Proceso'],['#contacto','Contacto']].map(([h,l]) => (
            <a key={h} href={h} className="text-xs uppercase tracking-widest hover:opacity-60 transition-opacity" style={{ color: GRAY_700 }}>{l}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Tech />
        <WhyAxis />
        <Process />
        <ForWho />
        <About />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
