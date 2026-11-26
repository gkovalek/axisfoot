// Datos de contacto del sitio.
export const SITE = {
  name: 'Axis Foot',
  instagram: 'https://www.instagram.com/axisfoot.arg/',
  instagramHandle: '@axisfoot.arg',
  whatsappNumber: '5493624988405', // +54 9 362 498-8405 (formato internacional, sin +)
  whatsappDisplay: '+54 362 498 8405',
  email: 'axisfoot.arg@gmail.com',
  address: 'Av. Rivadavia 178',
  city: 'Resistencia, Chaco, Argentina',
}

export const LEGAL_ENTITY = 'Rpeg Salud Integral S.R.L. · CUIT 33-71901171-9'

// Video de fondo del hero. Cuando exista el archivo, completar las rutas (relativas a /public).
export const HERO_VIDEO = null
// Ejemplo: { mp4: 'videos/hero.mp4', webm: 'videos/hero.webm', poster: 'videos/hero.jpg' }

export const assetUrl = (path) => `${import.meta.env.BASE_URL}${path}`

export const whatsappLink = (message) =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`
