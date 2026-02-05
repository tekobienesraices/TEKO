import { Property, ConstructionPlan, Zone } from './types';

// ==========================================
// ZONAS - Áreas de desarrollo inmobiliario
// ==========================================
export const zones: Zone[] = [
  {
    id: 'costa-salinas',
    name: 'Costa Salinas',
    tagline: 'Reserva de Patrimonio en el Eje Residencial más Dinámico',
    description: 'Costa Salinas es una oportunidad de posicionamiento estratégico en el mercado inmobiliario. Localizado en un punto de expansión urbana comprobada, este desarrollo ofrece el equilibrio perfecto entre seguridad jurídica y proyección habitacional. Un enclave diseñado para proteger el capital familiar mediante tierra con plusvalía orgánica superior al mercado.',
    mapUrl: 'https://maps.app.goo.gl/3eiR8YMugtKjJLZp7',
    heroImage: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&h=800&fit=crop',
    highlights: [
      'Escritura inmediata',
      'Documentación 100% al día',
      '20% de entrega y sos dueño',
      'Financiación hasta 72 cuotas'
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
    title: 'Costa Salinas: Residencial Alta Gama',
    location: 'Costa Salinas - Zona de Alta Valorización',
    originalPrice: 125000000,
    price: 120000000,
    size: 450,
    dimensions: '15x30',
    monthlyPayment: 1333333,
    description: 'Un activo inmobiliario con proyección habitacional de primer nivel. Ubicado estratégicamente para capturar el crecimiento sostenido de la zona, este lote es el refugio ideal para quienes buscan solidez patrimonial. Su posicionamiento garantiza una plusvalía acelerada, siendo el terreno perfecto para proyectar una residencia moderna en una comunidad que no para de crecer.',
    image: '/properties/costa-salinas-drone-1.jpg',
    features: ['Ubicación Estratégica', 'Plusvalía Acelerada', 'Entorno en Crecimiento', 'Descuento Especial'],
    type: 'terreno',
    coordinates: { lat: -25.30, lng: -57.27 },
    status: 'available'
  },
  {
    id: 'cs-003',
    zoneId: 'costa-salinas',
    title: 'Costa Salinas: Residencial Consolidado',
    location: 'Costa Salinas - Sector Familiar',
    originalPrice: 86000000,
    price: 81000000,
    size: 360,
    dimensions: '12x30',
    monthlyPayment: 900000,
    description: 'Seguridad y patrimonio familiar en su estado más sólido. Ubicado en un sector con vecindario ya establecido, este lote ofrece la tranquilidad de un entorno consolidado y la certeza de una inversión que protege tus ahorros. El espacio ideal para un legado familiar.',
    image: '/properties/costa-salinas-drone-2.jpg',
    features: ['Vecindario Consolidado', 'Servicios Listos', 'Alta Demanda', 'Descuento Familiar'],
    type: 'terreno',
    coordinates: { lat: -25.31, lng: -57.28 },
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