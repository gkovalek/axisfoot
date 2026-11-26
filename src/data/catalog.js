// Los 19 modelos del catálogo técnico, agrupados para el visitante (sin códigos internos).
// Todos se ofrecen en talles 24 a 53.
export const SIZE_RANGE = '24–53'

export const GROUPS = ['health', 'sport', 'daily']

export const CATALOG = [
  // Salud
  { id: 'hallux', group: 'health', name: { es: 'Juanete (hallux valgus)', en: 'Bunion (hallux valgus)' },
    solves: { es: 'Corrige el apoyo del arco, reparte la presión y estabiliza el pie para aliviar el dolor del juanete al caminar.', en: 'Corrects arch support, spreads pressure and steadies the foot to ease bunion pain when walking.' } },
  { id: 'flat', group: 'health', name: { es: 'Pie plano', en: 'Flat foot' },
    solves: { es: 'Sostiene el arco caído, mejora la forma de caminar y reduce la fatiga del pie.', en: 'Supports a fallen arch, improves your gait and reduces foot fatigue.' } },
  { id: 'heel', group: 'health', name: { es: 'Dolor de talón', en: 'Heel pain' },
    solves: { es: 'Descarga el talón y la planta con amortiguación para aliviar la presión y el dolor al apoyar.', en: 'Cushions the heel and sole to relieve pressure and pain with every step.' } },
  { id: 'fascia', group: 'health', name: { es: 'Fascitis plantar', en: 'Plantar fasciitis' },
    solves: { es: 'Sostiene el arco y amortigua antepié y talón para reducir la tensión de la planta y el dolor al caminar.', en: 'Supports the arch and cushions forefoot and heel to reduce sole tension and walking pain.' } },
  // Deportivas
  { id: 'outdoor', group: 'sport', name: { es: 'Aire libre y trekking', en: 'Outdoor & trekking' },
    solves: { es: 'Absorbe impactos y da agarre en terrenos irregulares o resbalosos, con soporte de arco y tobillo.', en: 'Absorbs impact and grips on uneven or slippery ground, with arch and ankle support.' } },
  { id: 'basket-arch', group: 'sport', name: { es: 'Básquet · soporte de arco', en: 'Basketball · arch support' },
    solves: { es: 'Da estabilidad en frenadas y giros rápidos y amortigua saltos y aterrizajes.', en: 'Steadies sudden stops and fast turns and cushions jumps and landings.' } },
  { id: 'basket-cushion', group: 'sport', name: { es: 'Básquet · amortiguación reforzada', en: 'Basketball · extra cushioning' },
    solves: { es: 'Suma amortiguación en talón y antepié para jugar más tiempo con menos fatiga.', en: 'Adds heel and forefoot cushioning to play longer with less fatigue.' } },
  { id: 'marathon', group: 'sport', name: { es: 'Maratón', en: 'Marathon' },
    solves: { es: 'Amortigua el impacto de la distancia y alivia la fatiga del pie en carreras largas.', en: 'Cushions long-distance impact and eases foot fatigue over big miles.' } },
  { id: 'jogging', group: 'sport', name: { es: 'Running y jogging', en: 'Running & jogging' },
    solves: { es: 'Comodidad y amortiguación para correr con regularidad, cuidando arco y talón.', en: 'Comfort and cushioning for regular runs, looking after arch and heel.' } },
  { id: 'ski', group: 'sport', name: { es: 'Esquí', en: 'Skiing' },
    solves: { es: 'Mejora el soporte lateral y la estabilidad en descensos y giros, y amortigua el terreno.', en: 'Improves lateral support and stability on descents and turns, and cushions rough snow.' } },
  { id: 'football', group: 'sport', name: { es: 'Fútbol', en: 'Football' },
    solves: { es: 'Estabilidad lateral y amortiguación para cambios de dirección, piques y remates.', en: 'Lateral stability and cushioning for cuts, sprints and shots.' } },
  { id: 'racket', group: 'sport', name: { es: 'Bádminton y raqueta', en: 'Badminton & racket sports' },
    solves: { es: 'Estabilidad lateral y amortiguación para movimientos rápidos y cambios de dirección en la cancha.', en: 'Lateral stability and cushioning for quick moves and direction changes on court.' } },
  { id: 'golf', group: 'sport', name: { es: 'Golf', en: 'Golf' },
    solves: { es: 'Sostiene el swing con estabilidad y alivia la fatiga de caminar el campo.', en: 'Steadies your swing and eases fatigue from walking the course.' } },
  { id: 'gym', group: 'sport', name: { es: 'Gimnasio y entrenamiento', en: 'Gym & training' },
    solves: { es: 'Soporte de arco y amortiguación para saltos, giros y ejercicios de impacto.', en: 'Arch support and cushioning for jumps, turns and high-impact workouts.' } },
  { id: 'cycling', group: 'sport', name: { es: 'Ciclismo', en: 'Cycling' },
    solves: { es: 'Apoyo firme sobre el pedal, menos vibración y un pie ventilado en cada salida.', en: 'Firm support on the pedal, less vibration and a ventilated foot on every ride.' } },
  { id: 'skate', group: 'sport', name: { es: 'Skate', en: 'Skateboarding' },
    solves: { es: 'Amortigua golpes y aterrizajes y da agarre y sostén del arco sobre la tabla.', en: 'Cushions hits and landings with grip and arch support on the board.' } },
  // Uso diario
  { id: 'walk', group: 'daily', name: { es: 'Caminata diaria', en: 'Daily walking' },
    solves: { es: 'Comodidad y estabilidad para caminar todos los días, con amortiguación en talón y antepié.', en: 'Comfort and stability for everyday walking, with heel and forefoot cushioning.' } },
  { id: 'standing', group: 'daily', name: { es: 'Jornadas de pie', en: 'Long hours on your feet' },
    solves: { es: 'Alivia el cansancio y la carga sobre el pie si trabajás muchas horas de pie.', en: 'Eases tiredness and load on the foot if you work long hours standing.' } },
  { id: 'dress', group: 'daily', name: { es: 'Zapato de vestir', en: 'Dress shoes' },
    solves: { es: 'Soporte de arco y talón para que el calzado formal sea cómodo toda la jornada.', en: 'Arch and heel support so formal shoes stay comfortable all day.' } },
]
