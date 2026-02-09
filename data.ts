import { Property, ConstructionPlan, Zone } from './types';

// Re-export types for cleaner imports
export type { Property, ConstructionPlan, Zone } from './types';

// ==========================================
// ZONAS - Áreas de desarrollo inmobiliario
// ==========================================
export const zones: Zone[] = [
  {
    id: 'costa-salinas',
    name: 'Costa Salinas',
    tagline: 'Asegurá tu futuro en la zona que más crece',
    description: 'Asegurá tu terreno con cuotas fijas en Guaraníes. Invertí en tierra, protegete de la inflación y construí tu legado hoy mismo.',
    mapUrl: 'https://maps.app.goo.gl/XDMHDZXgcjQy4h3p6',
    heroImage: '/properties/costa-salinas-drone-1.jpg',
    highlights: [
      'Título al instante',
      'Papeles 100% en regla',
      'Entrega mínima y ya es tuyo',
      'Pagá hasta en 6 años'
    ]
  }
];

// ==========================================
// PROPIEDADES - Lotes disponibles
// ==========================================
export const properties: Property[] = [
  // COSTA SALINAS - Lotes
  {
    id: 'cs-001',
    zoneId: 'costa-salinas',
    title: 'Costa Salinas: Tu Inversión Segura',
    location: 'Costa Salinas - Zona de Alto Valor',
    originalPrice: 125000000,
    price: 120000000,
    monthlyPayment: 2590000,
    description: 'La seguridad que buscás para tu capital. En un contexto económico incierto, la tierra es el único refugio que nunca pierde valor. Costa Salinas te ofrece posesión inmediata, documentos al día y la certeza de que tu dinero está creciendo mes a mes. Es hoy.',
    image: '/properties/costa-salinas-drone-1.jpg',
    features: ['Título Inmediato', 'Inversión Blindada', 'Sin Bancos', 'Plusvalía Asegurada'],
    type: 'terreno',
    coordinates: { lat: -25.3203, lng: -57.4434 },
    status: 'available'
  },
  {
    id: 'cs-003',
    zoneId: 'costa-salinas',
    title: 'Costa Salinas: Para tu Familia',
    location: 'Costa Salinas - Barrio Tranquilo',
    originalPrice: 86000000,
    price: 81000000,
    monthlyPayment: 1750000,
    description: 'Imaginá a tus hijos jugando en su propio patio. Costa Salinas es un barrio consolidado, seguro y lleno de vida. Dejá de pagar alquiler y empezá a pagar por lo que será tuyo para siempre. La mejor herencia es un techo propio.',
    image: '/properties/costa-salinas-drone-2.jpg',
    features: ['Barrio Seguro', 'Vecinos Reales', 'Servicios Listos', 'Tu Propio Hogar'],
    type: 'terreno',
    coordinates: { lat: -25.3210, lng: -57.4440 },
    status: 'available'
  }
];

// Helper function to get properties by zone
export const getPropertiesByZone = (zoneId: string): Property[] => {
  return properties.filter(p => p.zoneId === zoneId);
};

// Helper function to get zone by ID
export const getZoneById = (zoneId: string): Zone | undefined => {
  return zones.find(z => z.id === zoneId);
};

// ==========================================
// PLANES DE CONSTRUCCIÓN
// ==========================================
export const constructionPlans: ConstructionPlan[] = [
  {
    id: 'essential',
    name: 'TEKO Essential',
    description: 'Diseño inteligente y funcional. La entrada perfecta a tu hogar propio con terminaciones de calidad.',
    pricePerSqm: 850,
    features: ['Construcción Tradicional', 'Aberturas DVH', 'Pisos Porcelanato', 'Grifería Primera Marca', 'Entrega en 8 meses'],
    image: '/images/render-casa-moderna.jpg'
  },
  {
    id: 'luxury',
    name: 'TEKO Luxury',
    description: 'Arquitectura de vanguardia, espacios amplios y detalles de categoría superior para un estilo de vida exigente.',
    pricePerSqm: 1200,
    features: ['Diseño Personalizado', 'Domótica Integrada', 'Losa Radiante', 'Revestimientos Importados', 'Entrega en 12 meses'],
    image: '/images/ai-designs/design-1.jpg'
  }
];

// ==========================================
// TESTIMONIOS
// ==========================================
export const testimonials = [
  {
    name: "Oportunidad de Inversión",
    role: "Plusvalía Asegurada",
    text: "Al invertir en etapa de lanzamiento, asegurás el precio más bajo posible antes de que la zona se desarrolle por completo."
  },
  {
    name: "Sin Burocracia",
    role: "Flexibilidad Total",
    text: "Financiación propia a sola firma con aprobación inmediata. También emitimos cartas de oferta si preferís gestionar un préstamo bancario (AFD)."
  },
  {
    name: "Patrimonio Seguro",
    role: "Tierra Propia",
    text: "La tierra es el único bien que nunca se deprecia. Protegé tus ahorros de la inflación invirtiendo en ladrillos y tierra."
  }
];

// ==========================================
// PRICE RANGE (for calculator)
// ==========================================
export const PRICE_RANGE = {
  min: 81000000,
  max: 135000000,
  default: 81000000,
  step: 1000000
};

// ==========================================
// FINANCING CONFIG
// ==========================================
export const FINANCING_CONFIG = {
  minDownPaymentPercent: 20,
  maxDownPaymentPercent: 60,
  minReinforcementPercent: 20,
  maxReinforcementPercent: 50,
  maxTermMonths: 72,
  defaultReinforcementPayments: 3,
  whatsappNumber: '595974202163'
};

// ==========================================
// BLOG / GUÍA DEL INVERSOR
// ==========================================
// Blog content has been moved to blogData.ts for better organization
export { blogPosts, getPostById, type BlogPost } from './blogData';