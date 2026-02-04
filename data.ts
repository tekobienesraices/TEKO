import { Property, ConstructionPlan } from './types';

export const properties: Property[] = [
  {
    id: 't-001',
    title: 'Lote Premium Altos del Lago',
    location: 'Córdoba, Villa General Belgrano',
    price: 45000,
    size: 800,
    monthlyPayment: 450,
    description: 'Terreno con vista panorámica a las sierras, ideal para desarrollo residencial de lujo. Servicios subterráneos incluidos.',
    image: 'https://picsum.photos/800/600?random=1',
    features: ['Vista a las Sierras', 'Servicios Subterráneos', 'Seguridad 24hs', 'Club House'],
    type: 'terreno',
    coordinates: { lat: -31.97, lng: -64.56 },
    status: 'available'
  },
  {
    id: 't-002',
    title: 'Reserva Natural Norte',
    location: 'Tigre, Buenos Aires',
    price: 32000,
    size: 600,
    monthlyPayment: 320,
    description: 'Lote interno en barrio cerrado consolidado. Acceso directo a laguna artificial.',
    image: 'https://picsum.photos/800/600?random=2',
    features: ['Acceso a Laguna', 'Canchas de Tenis', 'Cerca de Accesos', 'Financiación 60 cuotas'],
    type: 'terreno',
    coordinates: { lat: -34.42, lng: -58.58 },
    status: 'available'
  },
  {
    id: 't-003',
    title: 'Estancia El Silencio',
    location: 'Mendoza, Luján de Cuyo',
    price: 55000,
    size: 1200,
    monthlyPayment: 550,
    description: 'En el corazón de la ruta del vino. Terreno amplio apto para construcción residencial y pequeños viñedos.',
    image: 'https://picsum.photos/800/600?random=3',
    features: ['Zona Vitivinícola', '1200m2', 'Entorno Natural', 'Escritura Inmediata'],
    type: 'terreno',
    coordinates: { lat: -33.05, lng: -68.87 },
    status: 'reserved'
  },
  {
    id: 't-004',
    title: 'Barrio Golf Exclusive',
    location: 'Pilar, Buenos Aires',
    price: 75000,
    size: 1000,
    monthlyPayment: 750,
    description: 'Primera línea de golf. El entorno más exclusivo para tu familia.',
    image: 'https://picsum.photos/800/600?random=4',
    features: ['Frente al Golf', 'Amenities Premium', 'Triple Cerco', 'Acceso Pavimentado'],
    type: 'terreno',
    coordinates: { lat: -34.45, lng: -58.91 },
    status: 'available'
  }
];

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

export const testimonials = [
  {
    name: "Carlos M.",
    role: "Inversionista",
    text: "La transparencia financiera de TEKO es única. Pude proyectar mi inversión con claridad desde el día uno."
  },
  {
    name: "Ana y Pedro",
    role: "Propietarios TEKO Essential",
    text: "Construir nuestra casa parecía imposible hasta que encontramos el sistema llave en mano de TEKO."
  },
  {
    name: "Sofía L.",
    role: "Compradora Lote",
    text: "El proceso de financiación fue súper ágil. En menos de una semana ya tenía mi lote reservado."
  }
];