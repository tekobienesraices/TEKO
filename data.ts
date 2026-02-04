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
    title: 'Lote Premium CS-01',
    location: 'Costa Salinas',
    price: 81000000,
    size: 360,
    dimensions: '12x30',
    monthlyPayment: 900000,
    description: 'Lote ideal para construcción de vivienda unifamiliar. Ubicación privilegiada dentro del loteamiento con excelente orientación.',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800',
    features: ['Documentación al día', '20% de entrega', 'Financiación directa', 'Escritura inmediata'],
    type: 'terreno',
    coordinates: { lat: -25.30, lng: -57.27 },
    status: 'available'
  },
  {
    id: 'cs-002',
    zoneId: 'costa-salinas',
    title: 'Lote Esquina CS-02',
    location: 'Costa Salinas',
    price: 98000000,
    size: 400,
    dimensions: '15x26',
    monthlyPayment: 1089000,
    description: 'Lote en esquina con doble frente. Mayor visibilidad y opciones de diseño arquitectónico. Ubicación estratégica.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    features: ['Lote esquina', 'Doble frente', 'Documentación al día', 'Entrega inmediata'],
    type: 'terreno',
    coordinates: { lat: -25.31, lng: -57.28 },
    status: 'available'
  },
  {
    id: 'cs-003',
    zoneId: 'costa-salinas',
    title: 'Lote Vista Panorámica CS-03',
    location: 'Costa Salinas',
    price: 135000000,
    size: 500,
    dimensions: '20x25',
    monthlyPayment: 1500000,
    description: 'El lote más exclusivo de Costa Salinas. Vista panorámica inigualable, ideal para casa de campo o inversión premium.',
    image: 'https://images.unsplash.com/photo-1592595896616-c37162298647?w=800',
    features: ['Vista panorámica', 'Lote premium', 'Mayor superficie', 'Ubicación exclusiva'],
    type: 'terreno',
    coordinates: { lat: -25.29, lng: -57.26 },
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