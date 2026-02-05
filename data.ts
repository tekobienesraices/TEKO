import { Property, ConstructionPlan, Zone } from './types';

// ==========================================
// ZONAS - Áreas de desarrollo inmobiliario
// ==========================================
export const zones: Zone[] = [
  {
    id: 'costa-salinas',
    name: 'Costa Salinas',
    tagline: 'Donde el atardecer es tuyo',
    description: 'Un enclave privilegiado con vistas espectaculares y acceso directo a la naturaleza. Lotes premium con documentación al día y financiación directa. A minutos de todo, lejos del ruido.',
    mapUrl: 'https://maps.app.goo.gl/3eiR8YMugtKjJLZp7',
    heroImage: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&h=800&fit=crop',
    highlights: [
      'Escritura inmediata',
      'Documentación 100% al día',
      '20% de entrega y sos dueño',
      'Financiación hasta 72 cuotas'
    ]
  },
  {
    id: 'naranjaty',
    name: 'Naranjaty',
    tagline: 'Tu inversión, tu futuro',
    description: 'El nuevo polo de desarrollo inmobiliario. Terrenos amplios en zona de alta valorización con todos los servicios. Ideal para familias que buscan calidad de vida sin alejarse de la ciudad.',
    mapUrl: 'https://maps.app.goo.gl/8gL4JtWeL1ajhRjT9',
    heroImage: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&h=800&fit=crop',
    highlights: [
      'Zona de alta valorización',
      'Acceso pavimentado',
      'Servicios básicos disponibles',
      'Comunidad en crecimiento'
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
    title: 'Costa Salinas: Eje Comercial Premium',
    location: 'Costa Salinas - Zona de Alta Visibilidad',
    price: 85000000,
    size: 360,
    dimensions: '12x30',
    monthlyPayment: 950000,
    description: 'Un activo inmobiliario estratégico. Posicionado sobre el eje principal de circulación, este lote garantiza la máxima plusvalía por exposición comercial. Ideal para inversores que buscan rentabilidad de doble dígito mediante el desarrollo de locales comerciales o unidades de renta. La infraestructura está lista para soportar el crecimiento demográfico que viste en la línea de tiempo.',
    image: '/properties/costa-salinas-drone-1.jpg',
    features: ['Ubicación Estratégica', 'Apto para Comercio', 'Máxima Exposición', 'Escritura Inmediata'],
    type: 'terreno',
    coordinates: { lat: -25.30, lng: -57.27 },
    status: 'available'
  },
  {
    id: 'cs-002',
    zoneId: 'costa-salinas',
    title: 'Costa Salinas: Residencial',
    location: 'Costa Salinas - Sector Consolidado',
    price: 78000000,
    size: 360,
    dimensions: '12x30',
    monthlyPayment: 890000,
    description: 'Protección de capital en su forma más pura. Ubicado en un sector de alta densidad residencial ya consolidada, este lote ofrece la seguridad de un entorno familiar y la tranquilidad de una inversión que no deja de valorizarse. El equilibrio perfecto para construir un hogar o mantener tierra en una zona donde la oferta ya es escasa.',
    image: '/properties/costa-salinas-drone-2.jpg',
    features: ['Entorno Familiar', 'Servicios Listos', 'Alta Demanda Directa', 'Documentación Premium'],
    type: 'terreno',
    coordinates: { lat: -25.31, lng: -57.28 },
    status: 'available'
  },
  // NARANJATY - Lotes
  {
    id: 'nj-001',
    zoneId: 'naranjaty',
    title: 'Lote Familiar NJ-01',
    location: 'Naranjaty',
    price: 81000000,
    size: 360,
    dimensions: '12x30',
    monthlyPayment: 900000,
    description: 'Perfecto para familias. Zona tranquila con vecinos consolidados. Cerca de escuelas y servicios esenciales.',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800',
    features: ['Zona familiar', 'Servicios cercanos', 'Documentación al día', 'Financiación flexible'],
    type: 'terreno',
    coordinates: { lat: -25.35, lng: -57.30 },
    status: 'available'
  },
  {
    id: 'nj-002',
    zoneId: 'naranjaty',
    title: 'Lote Céntrico NJ-02',
    location: 'Naranjaty',
    price: 105000000,
    size: 420,
    dimensions: '14x30',
    monthlyPayment: 1167000,
    description: 'Ubicación céntrica dentro del loteamiento. Acceso directo a la calle principal. Ideal para comercio o vivienda.',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800',
    features: ['Ubicación céntrica', 'Acceso principal', 'Versatilidad de uso', 'Alta demanda'],
    type: 'terreno',
    coordinates: { lat: -25.36, lng: -57.31 },
    status: 'available'
  },
  {
    id: 'nj-003',
    zoneId: 'naranjaty',
    title: 'Lote Amplio NJ-03',
    location: 'Naranjaty',
    price: 125000000,
    size: 480,
    dimensions: '16x30',
    monthlyPayment: 1389000,
    description: 'Para quienes buscan espacio. Terreno amplio con posibilidad de subdivisión futura o construcción de casa grande con jardín.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    features: ['Mayor superficie', 'Posible subdivisión', 'Ideal inversión', 'Documentación al día'],
    type: 'terreno',
    coordinates: { lat: -25.34, lng: -57.29 },
    status: 'reserved'
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
    image: 'https://picsum.photos/600/400?random=10'
  },
  {
    id: 'luxury',
    name: 'TEKO Luxury',
    description: 'Arquitectura de vanguardia, espacios amplios y detalles de categoría superior para un estilo de vida exigente.',
    pricePerSqm: 1200,
    features: ['Diseño Personalizado', 'Domótica Integrada', 'Losa Radiante', 'Revestimientos Importados', 'Entrega en 12 meses'],
    image: 'https://picsum.photos/600/400?random=11'
  }
];

// ==========================================
// TESTIMONIOS
// ==========================================
export const testimonials = [
  {
    name: "Carlos M.",
    role: "Propietario en Costa Salinas",
    text: "Con solo el 20% de entrega ya tenía mi lote. El proceso fue transparente y la documentación impecable."
  },
  {
    name: "Ana y Pedro",
    role: "Familia en Naranjaty",
    text: "Buscábamos un lugar tranquilo para criar a nuestros hijos. Naranjaty superó nuestras expectativas."
  },
  {
    name: "Sofía L.",
    role: "Inversionista",
    text: "La financiación sin intereses fue clave. Mi terreno ya se valorizó un 30% en menos de un año."
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
  whatsappNumber: '595983783349'
};

// ==========================================
// BLOG / GUÍA DEL INVERSOR
// ==========================================
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  image: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'plusvalia-paraguay-2026',
    title: '5 zonas con mayor plusvalía en Paraguay para el 2026',
    excerpt: 'Descubrí dónde están las oportunidades de inversión más rentables en el mercado inmobiliario paraguayo actual.',
    content: 'Paraguay se ha consolidado como un destino atractivo para inversores locales y extranjeros. Con una economía estable y beneficios fiscales competitivos, el sector inmobiliario lidera las proyecciones de crecimiento. Las 5 zonas destacadas incluyen San Bernardino por su exclusividad, Areguá por su cercanía estratégica, y nuevos polos de desarrollo en Cordillera.',
    date: '15 de Febrero, 2026',
    author: 'Equipo TEKO',
    category: 'Inversión',
    image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800',
    readTime: '6 min'
  },
  {
    id: 'guia-compra-terreno-cuotas',
    title: 'Cómo comprar tu primer terreno a cuotas siendo joven',
    excerpt: 'Una guía paso a paso para dar el primer paso hacia tu patrimonio sin descapitalizarte.',
    content: 'Comprar un terreno es la decisión financiera más importante de tu vida temprana. En este artículo te explicamos cómo funcionan los préstamos inmobiliarios y por qué la financiación propia de TEKO es la mejor opción para jóvenes que buscan capitalizarse cuota a cuota, sin requisitos bancarios complejos.',
    date: '10 de Febrero, 2026',
    author: 'Asesoría TEKO',
    category: 'Educación',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800',
    readTime: '5 min'
  },
  {
    id: 'seguridad-juridica-loteamientos',
    title: 'Seguridad jurídica: ¿Qué papeles pedir al comprar un lote?',
    excerpt: 'Evitá estafas y dolores de cabeza. Te contamos todo sobre la escritura inmediata y los títulos de propiedad.',
    content: 'Al momento de adquirir un loteamiento en Paraguay, es vital verificar la cuenta corriente catastral, la resolución municipal de loteamiento y la disponibilidad de escritura inmediata. En TEKO, garantizamos que cada propiedad cuenta con respaldo legal total para tu tranquilidad.',
    date: '05 de Febrero, 2026',
    author: 'Legal TEKO',
    category: 'Legal',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800',
    readTime: '8 min'
  }
];

// Helper function to get post by ID
export const getPostById = (postId: string): BlogPost | undefined => {
  return blogPosts.find(p => p.id === postId);
};