// Datos de contacto. Reemplazar los marcados con TODO antes de publicar.
export const SITE = {
  name: 'Axis Foot',
  instagram: 'https://www.instagram.com/axisfoot.arg/',
  instagramHandle: '@axisfoot.arg',
  whatsappNumber: '5493510000000', // TODO: número real (formato internacional, sin +)
  whatsappDisplay: '+54 9 351 000 0000', // TODO
  email: 'hola@axisfoot.com.ar', // TODO
  address: 'Tu dirección aquí', // TODO
  city: 'Córdoba, Argentina', // TODO
}

// Video de fondo del hero. Cuando exista el archivo, completar las rutas (relativas a /public).
export const HERO_VIDEO = null
// Ejemplo: { mp4: 'videos/hero.mp4', webm: 'videos/hero.webm', poster: 'videos/hero.jpg' }

export const assetUrl = (path) => `${import.meta.env.BASE_URL}${path}`

export const whatsappLink = (message) =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`
