import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import layersData from '../layers.json'
import './insoleAssembly.css'

gsap.registerPlugin(ScrollTrigger, useGSAP)

/* ------------------------------------------------------------------ */
/* Motion constants                                                    */
/* ------------------------------------------------------------------ */

const MEDIA = {
  desktop: '(min-width: 768px) and (prefers-reduced-motion: no-preference)',
  mobile: '(max-width: 767.98px) and (prefers-reduced-motion: no-preference)',
  reduced: '(prefers-reduced-motion: reduce)',
}

const SCRUB_SMOOTHING = 0.6
const PIN_LENGTH = { desktop: '+=260%', mobile: '+=170%' }

// Scroll timeline, in abstract timeline units (scrub maps them to scroll distance).
const T = {
  assemble: 3,
  calloutRetract: 1.2,
  hold: 1,
  step: 2.4,
  stepMove: 1.4,
  stepCalloutDelay: 1.1,
  stepCallout: 1,
  release: 0.8,
  tail: 0.6,
}
const EASE = {
  move: 'power2.inOut',
  draw: 'power3.out',
  fade: 'power1.inOut',
  introIn: 'expo.out',
  introOut: 'power3.inOut',
  float: 'sine.inOut',
}

// Capas que no se están mirando: casi desaparecen para que la activa se perciba sola.
const DIM_OPACITY = 0.12
// Etiquetas de las otras capas: se ocultan, se muestra una descripción por vez.
const NOTE_HIDDEN_OPACITY = 0

// Idle intro (seconds).
const INTRO = {
  delay: 0.15,
  flyIn: 1.1,
  flyStagger: 0.09,
  flyOffsetPct: 38,
  startScale: 0.94,
  hold: 0.35,
  explode: 1.2,
  explodeStagger: 0.06,
  fastForward: 4,
}

const FLOAT = { amplitudePx: 7, period: 3.2 }

/* ------------------------------------------------------------------ */
/* Geometry (all in px of the shared 1296x985 exploded canvas)         */
/* ------------------------------------------------------------------ */

const CANVAS_W = layersData.width
const CANVAS_H = layersData.height
const LAYERS = layersData.layers // z-order bottom -> top

// Order in which layers separate on scroll (= step 01..04).
const STEP_ORDER = ['base', 'foam', 'poly', 'cover']

// Offset (canvas px) + rotation (deg) that moves each layer from its
// exploded position into the compact assembled stack.
const ASSEMBLED = {
  base: { dy: -238, rotate: 1.6 },
  foam: { dy: 44, rotate: 0 },
  poly: { dy: -128, rotate: 0.6 },
  cover: { dy: 218, rotate: -1.4 },
}

// Whole-plane pose when assembled: flatter, slightly larger, reads as one insole.
const PLANE_ASSEMBLED = { rotation: 3.5, scale: 1.1, skewX: -4, yPercent: 2 }

// Callout anchor (dot) on each layer in the exploded state + which side the label sits.
const CALLOUTS = {
  cover: { x: 430, y: 205, side: 'left' },
  foam: { x: 1205, y: 232, side: 'right' },
  poly: { x: 1150, y: 378, side: 'right' },
  base: { x: 330, y: 820, side: 'left' },
}

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

const pct = (value, total) => `${(value / total) * 100}%`
const layerById = (id) => LAYERS.find((l) => l.id === id)
const stepIndex = (id) => STEP_ORDER.indexOf(id)
const formatStep = (i) => String(i + 1).padStart(2, '0')

// Canvas-px offset -> yPercent of the layer's own box (stays responsive).
const assembledYPercent = (id) => (ASSEMBLED[id].dy / layerById(id).h) * 100

const sortedLabels = (labels = []) =>
  STEP_ORDER.map((id) => labels.find((l) => l.id === id)).filter(Boolean)

const layerStyle = ({ x, y, w, h }) => ({
  left: pct(x, CANVAS_W),
  top: pct(y, CANVAS_H),
  width: pct(w, CANVAS_W),
  height: pct(h, CANVAS_H),
})

const calloutStyle = ({ x, y, side }) =>
  side === 'left'
    ? { top: pct(y, CANVAS_H), left: 'calc(-1 * var(--ia-outset))', width: `calc(${pct(x, CANVAS_W)} + var(--ia-outset))` }
    : { top: pct(y, CANVAS_H), left: pct(x, CANVAS_W), right: 'calc(-1 * var(--ia-outset))' }

/** Find which step (0..3) the timeline playhead is in, or -1. */
function activeStepAt(tl) {
  const time = tl.time()
  for (let i = STEP_ORDER.length - 1; i >= 0; i--) {
    if (time >= tl.labels[`step${i}`] + T.stepCalloutDelay) return time < tl.labels.release ? i : -1
  }
  return -1
}

function setActiveStep(root, index) {
  root.querySelectorAll('[data-step]').forEach((el) => {
    el.toggleAttribute('data-active', Number(el.dataset.step) === index)
  })
  root.querySelectorAll('.ia-layer, .ia-list-item, .ia-callout').forEach((el) => {
    el.toggleAttribute('data-active', stepIndex(el.dataset.id) === index)
  })
}

/* ------------------------------------------------------------------ */
/* Timelines                                                           */
/* ------------------------------------------------------------------ */

function buildIntro(q) {
  const intros = q('.ia-intro')
  const tl = gsap.timeline({ delay: INTRO.delay, paused: true })

  // Bottom layer first, rising into the stack.
  tl.fromTo(
    intros,
    {
      opacity: 0,
      scale: INTRO.startScale,
      yPercent: (i) => assembledYPercent(LAYERS[i].id) + INTRO.flyOffsetPct,
      rotation: (i) => ASSEMBLED[LAYERS[i].id].rotate,
    },
    {
      opacity: 1,
      scale: 1,
      yPercent: (i) => assembledYPercent(LAYERS[i].id),
      duration: INTRO.flyIn,
      ease: EASE.introIn,
      stagger: INTRO.flyStagger,
    },
  )
    .to(intros, {
      yPercent: 0,
      rotation: 0,
      duration: INTRO.explode,
      ease: EASE.introOut,
      stagger: INTRO.explodeStagger,
    }, `+=${INTRO.hold}`)

  return tl
}

function buildFloat(q) {
  return gsap.fromTo(q('.ia-float'), { y: -FLOAT.amplitudePx }, {
    y: FLOAT.amplitudePx,
    duration: FLOAT.period / 2,
    ease: EASE.float,
    repeat: -1,
    yoyo: true,
    paused: true,
  })
}

/** Elements that belong to one layer (stage layer, callout parts, list item). */
function partsFor(q, id) {
  return {
    layer: q(`.ia-layer[data-id="${id}"]`),
    callout: q(`.ia-callout[data-id="${id}"]`),
    line: q(`.ia-callout[data-id="${id}"] .ia-line`),
    dot: q(`.ia-callout[data-id="${id}"] .ia-dot`),
    text: q(`.ia-callout[data-id="${id}"] .ia-callout-text`),
    item: q(`.ia-list-item[data-id="${id}"]`),
  }
}

function addAssemble(tl, q) {
  const layers = q('.ia-layer')

  tl.addLabel('assemble')
    .to(q('.ia-callout-text'), { opacity: 0, duration: T.calloutRetract, ease: EASE.fade }, 'assemble')
    .to(q('.ia-line'), { scaleX: 0, duration: T.calloutRetract, ease: EASE.fade }, 'assemble')
    .to(q('.ia-dot'), { scale: 0, opacity: 0, duration: T.calloutRetract, ease: EASE.fade }, 'assemble')
    .to(q('.ia-list-item'), { opacity: 1, duration: T.calloutRetract, ease: EASE.fade }, 'assemble')
    .to(layers, {
      yPercent: (i, el) => assembledYPercent(el.dataset.id),
      rotation: (i, el) => ASSEMBLED[el.dataset.id].rotate,
      duration: T.assemble,
      ease: EASE.move,
    }, 'assemble')
    .to(q('.ia-plane'), { ...PLANE_ASSEMBLED, duration: T.assemble, ease: EASE.move }, 'assemble')
    .addLabel('assembled')
    .to({}, { duration: T.hold })
}

function addStep(tl, q, id, i) {
  const label = `step${i}`
  const p = partsFor(q, id)
  const others = STEP_ORDER.filter((o) => o !== id)
  const otherLayers = others.flatMap((o) => partsFor(q, o).layer)
  const otherNotes = others.flatMap((o) => [...partsFor(q, o).callout, ...partsFor(q, o).item])
  const calloutAt = `${label}+=${T.stepCalloutDelay}`

  tl.addLabel(label)
    .to(p.layer, { yPercent: 0, rotation: 0, opacity: 1, duration: T.stepMove, ease: EASE.move }, label)
    .to(otherLayers, { opacity: DIM_OPACITY, duration: T.stepMove, ease: EASE.fade }, label)
    .to(otherNotes, { opacity: NOTE_HIDDEN_OPACITY, duration: T.stepMove, ease: EASE.fade }, label)
    .to([...p.callout, ...p.item], { opacity: 1, duration: T.stepMove, ease: EASE.fade }, label)
    .to(p.line, { scaleX: 1, duration: T.stepCallout, ease: EASE.draw }, calloutAt)
    .to(p.dot, { scale: 1, opacity: 1, duration: T.stepCallout, ease: EASE.draw }, calloutAt)
    .to(p.text, { opacity: 1, duration: T.stepCallout, ease: EASE.fade }, calloutAt)

  // The plane relaxes back to the exploded pose while the first layer separates,
  // so every callout anchor lines up before it draws.
  if (i === 0) {
    tl.to(q('.ia-plane'), { rotation: 0, scale: 1, skewX: 0, yPercent: 0, duration: T.stepMove, ease: EASE.move }, label)
  }
  tl.set({}, {}, `${label}+=${T.step}`)
}

function addRelease(tl, q) {
  tl.addLabel('release')
    .to(q('.ia-hint'), { opacity: 0, duration: T.release, ease: EASE.fade }, 'release')
    .to([...q('.ia-layer'), ...q('.ia-callout'), ...q('.ia-list-item')], {
      opacity: 1,
      duration: T.release,
      ease: EASE.fade,
    }, 'release')
    .to({}, { duration: T.tail })
}

function buildScroll(q, root, { pinLength, intro, onProgressRef }) {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: root,
      start: 'top top',
      end: pinLength,
      scrub: SCRUB_SMOOTHING,
      pin: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        // Scrolling during the intro: fast-forward it instead of fighting it.
        if (self.progress > 0 && intro.isActive()) intro.timeScale(INTRO.fastForward)
      },
    },
    onUpdate: () => {
      setActiveStep(root, activeStepAt(tl))
      onProgressRef.current?.(tl.progress())
    },
  })

  addAssemble(tl, q)
  tl.set(q('.ia-callouts, .ia-list'), { opacity: 1 }, 'assembled')
  STEP_ORDER.forEach((id, i) => addStep(tl, q, id, i))
  addRelease(tl, q)

  tl.fromTo(q('.ia-progress-fill'), { scaleX: 0 }, { scaleX: 1, duration: tl.duration(), ease: 'none' }, 0)
  return tl
}

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */

export function InsoleAssembly({
  labels = [],
  onProgress,
  hint = '',
  ariaLabel = 'Exploded view of the insole layers',
  id,
  className = '',
}) {
  const root = useRef(null)
  const onProgressRef = useRef(onProgress)
  onProgressRef.current = onProgress
  const notes = sortedLabels(labels)

  useGSAP(
    () => {
      const q = gsap.utils.selector(root)
      const mm = gsap.matchMedia()

      const animated = (pinLength) => {
        const intro = buildIntro(q)
        const float = buildFloat(q)
        intro.eventCallback('onComplete', () => float.play())
        ScrollTrigger.create({
          trigger: root.current,
          start: 'top 80%',
          once: true,
          onEnter: () => intro.play(),
        })
        buildScroll(q, root.current, { pinLength, intro, onProgressRef })

        // Only drift while the stage is on screen.
        ScrollTrigger.create({
          trigger: root.current,
          start: 'top bottom',
          end: 'bottom top',
          onToggle: (self) => {
            if (!intro.isActive()) float.paused(!self.isActive)
          },
        })
      }

      mm.add(MEDIA.desktop, () => animated(PIN_LENGTH.desktop))
      mm.add(MEDIA.mobile, () => animated(PIN_LENGTH.mobile))
      mm.add(MEDIA.reduced, () => {
        // Static exploded state, everything legible, no pin or scrub.
        root.current.setAttribute('data-static', '')
        onProgressRef.current?.(1)
        return () => root.current?.removeAttribute('data-static')
      })

      return () => mm.revert()
    },
    { scope: root },
  )

  return (
    <section ref={root} id={id} className={`ia ${className}`.trim()}>
      <div className="ia-inner">
        <div className="ia-stage" role="img" aria-label={ariaLabel}>
          <div className="ia-float">
            <div className="ia-plane">
              {LAYERS.map((layer) => (
                <div key={layer.id} className="ia-layer" data-id={layer.id} style={layerStyle(layer)}>
                  <div className="ia-intro">
                    <img
                      src={`${import.meta.env.BASE_URL}layers/${layer.id}.webp`}
                      width={layer.w}
                      height={layer.h}
                      alt=""
                      decoding="async"
                      draggable={false}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="ia-callouts" aria-hidden="true">
              {notes.map((note) => {
                const anchor = CALLOUTS[note.id]
                return (
                  <div
                    key={note.id}
                    className="ia-callout"
                    data-id={note.id}
                    data-side={anchor.side}
                    style={calloutStyle(anchor)}
                  >
                    <div className="ia-callout-text">
                      <span className="ia-index">{formatStep(stepIndex(note.id))}</span>
                      <span className="ia-title">{note.title}</span>
                      <span className="ia-spec">{note.spec}</span>
                    </div>
                    <div className="ia-line">
                      <div className="ia-line-fill" />
                    </div>
                    <span className="ia-dot" />
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <ol className="ia-list">
          {notes.map((note) => (
            <li key={note.id} className="ia-list-item" data-id={note.id}>
              <span className="ia-index">{formatStep(stepIndex(note.id))}</span>
              <span className="ia-title">{note.title}</span>
              <span className="ia-spec">{note.spec}</span>
            </li>
          ))}
        </ol>

        {hint && (
          <p className="ia-hint" aria-hidden="true">
            <span>{hint}</span>
            <span className="ia-chevron">↓</span>
          </p>
        )}

        <div className="ia-steps" aria-hidden="true">
          <div className="ia-step-numbers">
            {STEP_ORDER.map((stepId, i) => (
              <span key={stepId} data-step={i}>{formatStep(i)}</span>
            ))}
          </div>
          <div className="ia-progress">
            <div className="ia-progress-fill" />
          </div>
        </div>
      </div>
    </section>
  )
}
