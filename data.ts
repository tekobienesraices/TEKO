import { Property, ConstructionPlan } from './types';

export const properties: Property[] = [
  {
    id: 't-001',
    title: 'Lote Premium San Bernardino',
    location: 'San Bernardino, Cordillera',
    price: 350000000,
    size: 800,
    monthlyPayment: 3500000,
    description: 'Terreno con vista panorámica al Lago Ypacaraí, ideal para desarrollo residencial de lujo. Servicios incluidos.',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800',
    features: ['Vista al Lago', 'Servicios Incluidos', 'Seguridad 24hs', 'Club House'],
    type: 'terreno',
    coordinates: { lat: -25.30, lng: -57.27 },
    status: 'available'
  },
  {
    id: 't-002',
    title: 'Reserva Natural Areguá',
    location: 'Areguá, Central',
    price: 250000000,
    size: 600,
    monthlyPayment: 2500000,
    description: 'Lote interno en barrio cerrado consolidado. Entorno natural privilegiado cerca de Asunción.',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800',
    features: ['Entorno Natural', 'Cerca de Asunción', 'Barrio Cerrado', 'Financiación 60 cuotas'],
    type: 'terreno',
    coordinates: { lat: -25.29, lng: -57.38 },
    status: 'available'
  },
  {
    id: 't-003',
    title: 'Estancia Caacupé',
    location: 'Caacupé, Cordillera',
    price: 420000000,
    size: 1200,
    monthlyPayment: 4200000,
    description: 'En las colinas de Cordillera. Terreno amplio con vistas espectaculares, ideal para casa de campo.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    features: ['Vista a las Colinas', '1200m²', 'Entorno Natural', 'Escritura Inmediata'],
    type: 'terreno',
    coordinates: { lat: -25.38, lng: -57.14 },
    status: 'reserved'
  },
  {
    id: 't-004',
    title: 'Barrio Yacht & Golf Club',
    location: 'Luque, Central',
    price: 580000000,
    size: 1000,
    monthlyPayment: 5800000,
    description: 'Primera línea de golf. El entorno más exclusivo para tu familia cerca del aeropuerto.',
    image: 'https://images.unsplash.com/photo-1592595896616-c37162298647?w=800',
    features: ['Frente al Golf', 'Amenities Premium', 'Seguridad', 'Acceso Pavimentado'],
    type: 'terreno',
    coordinates: { lat: -25.27, lng: -57.49 },
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