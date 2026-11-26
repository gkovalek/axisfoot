import { useReveal } from '../hooks/useReveal'

export const Section = ({ id, eyebrow, index, title, lead, children, className = '' }) => {
  const scope = useReveal()

  return (
    <section ref={scope} id={id} className={`relative px-6 py-28 md:py-40 ${className}`}>
      <div className="mx-auto max-w-6xl">
        <header className="mb-16 max-w-3xl">
          <p data-reveal className="eyebrow mb-6 flex items-center gap-3">
            <span className="text-green">{index}</span>
            <span className="h-px w-8 bg-line-strong" />
            {eyebrow}
          </p>
          <h2 data-reveal className="balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            {title}
          </h2>
          {lead && (
            <p data-reveal className="pretty mt-6 max-w-2xl text-lg leading-relaxed text-mist">
              {lead}
            </p>
          )}
        </header>
        {children}
      </div>
    </section>
  )
}
