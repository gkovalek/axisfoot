import { useReveal } from '../hooks/useReveal'

export const Section = ({ id, eyebrow, title, lead, children, tone = 'paper', align = 'left', className = '' }) => {
  const scope = useReveal()
  const background = tone === 'sky' ? 'bg-sky' : 'bg-paper'
  const alignment = align === 'center' ? 'mx-auto text-center' : ''

  return (
    <section ref={scope} id={id} className={`relative px-6 py-24 md:py-36 ${background} ${className}`}>
      <div className="mx-auto max-w-6xl">
        <header className={`mb-14 max-w-3xl md:mb-20 ${alignment}`}>
          <p data-reveal className="eyebrow mb-5 text-blue">{eyebrow}</p>
          <h2 data-reveal className="balance text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">{title}</h2>
          {lead && <p data-reveal className="pretty mt-6 max-w-2xl text-lg leading-relaxed text-slate">{lead}</p>}
        </header>
        {children}
      </div>
    </section>
  )
}
