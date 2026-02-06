import { Property, ConstructionPlan, Zone } from './types';

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
    heroImage: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&h=800&fit=crop',
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
    size: 450,
    dimensions: '15x30',
    monthlyPayment: 1333333,
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
    size: 360,
    dimensions: '12x30',
    monthlyPayment: 900000,
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
    title: 'Por qué la Tierra en Paraguay es la Mejor Inversión de la Década (Análisis 2026)',
    excerpt: 'Mientras la inflación erosiona tus ahorros en el banco, el suelo paraguayo se revaloriza a tasas de dos dígitos. Descubrí por qué los expertos llaman a este momento "La Era Dorada".',
    content: `<p class="lead">Si tenés ahorros en guaraníes durmiendo en una caja de ahorro, estás perdiendo dinero cada día. La inflación es el impuesto silencioso. Pero existe un refugio: la tierra.</p>
      <h3>1. El Fenómeno de la Expansión Urbana</h3>
      <p>Asunción ya no da abasto. El crecimiento demográfico empuja las fronteras hacia Central y Cordillera. Lo que hoy ves como "lejos", en 3 años será "barrio residencial".</p>
      <h3>2. La Matemática de la Plusvalía</h3>
      <ul><li><strong>Año 1:</strong> Comprás en pre-venta</li><li><strong>Año 2:</strong> Llega luz y agua (+15%)</li><li><strong>Año 3:</strong> Primeras casas (+20%)</li><li><strong>Año 5:</strong> Barrio consolidado (valor duplicado)</li></ul>
      <h3>3. Financiación en Guaraníes</h3>
      <p>Cuotas 100% en Guaraníes a tasa fija. Si el dólar sube, tu cuota sigue igual.</p>`,
    date: '15 de Febrero, 2026',
    author: 'Equipo TEKO',
    category: 'Inversión',
    image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=1200',
    readTime: '8 min'
  },
  {
    id: 'guia-compra-terreno-cuotas',
    title: 'Guía Definitiva: De Inquilino a Propietario (Sin Bancos)',
    excerpt: 'Romper el ciclo del alquiler es posible. Te enseñamos la estrategia financiera exacta para tener tu lote propio con tu mismo sueldo actual.',
    content: `<p>Hay un mito: "La deuda es mala". Falso. La Deuda de Inversión es la herramienta que permite construir riqueza.</p>
      <h3>El Costo de Oportunidad</h3>
      <p>Pagás Gs. 2.000.000 de alquiler = Gs. 24.000.000/año. ¿Qué te quedó? Nada. Con TEKO, Gs. 900.000/mes = Título de Propiedad.</p>
      <h3>La Regla del 30%</h3>
      <p>Tu cuota no debe superar el 30% de ingresos. Con refuerzos anuales (aguinaldo), bajás la cuota mensual.</p>`,
    date: '10 de Febrero, 2026',
    author: 'Asesoría TEKO',
    category: 'Educación Financiera',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200',
    readTime: '10 min'
  },
  {
    id: 'seguridad-juridica-loteamientos',
    title: 'Los 7 Peligros de Comprar Sin Título (Protegé tu Dinero)',
    excerpt: 'El mercado informal está lleno de trampas. Te explicamos por qué NUNCA debés comprar sin papeles y cómo verificar que una inmobiliaria es seria.',
    content: `<h3>Peligro #1: Cesión de Derechos NO es Título</h3>
      <p>Muchos venden cesión de derechos. Eso no te hace dueño. Si el verdadero dueño aparece, te desalojan.</p>
      <h3>La Garantía TEKO</h3>
      <ol><li>Loteamientos Aprobados por municipalidad</li><li>Impuestos al Día</li><li>Escritura Inmediata al pagar</li></ol>`,
    date: '05 de Febrero, 2026',
    author: 'Dto. Legal TEKO',
    category: 'Seguridad Legal',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200',
    readTime: '6 min'
  },
  {
    id: 'terrenos-cuotas-capiata-2026',
    title: 'Terrenos en Cuotas en Capiatá 2026: Guía Completa de Zonas y Precios',
    excerpt: 'Capiatá se consolida como el destino #1 para familias que buscan lotes accesibles. Analizamos las mejores zonas, precios del metro cuadrado y proyección de valorización.',
    content: `<p class="lead">Capiatá ha experimentado un crecimiento exponencial en los últimos años, posicionándose como la alternativa ideal para quienes buscan terrenos accesibles sin alejarse demasiado de Asunción.</p>
      <h3>¿Por qué Capiatá?</h3>
      <ul><li>A solo 15 km del centro de Asunción</li><li>Excelente conectividad por Ruta 2</li><li>Servicios básicos en expansión</li><li>Precios 40% más accesibles que Lambaré</li></ul>
      <h3>Zonas con Mayor Proyección</h3>
      <p><strong>Costa Salinas:</strong> Zona residencial consolidándose, ideal para familias. Lotes desde Gs. 81.000.000.</p>
      <h3>Financiación Directa</h3>
      <p>En TEKO ofrecemos planes hasta 72 meses sin bancos, sin Informconf, con cuotas fijas en guaraníes.</p>`,
    date: '01 de Febrero, 2026',
    author: 'Research TEKO',
    category: 'Análisis de Mercado',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200',
    readTime: '7 min'
  },
  {
    id: 'como-comprar-terreno-sin-banco',
    title: 'Cómo Comprar Terreno sin Banco en Paraguay: Guía Paso a Paso 2026',
    excerpt: 'Olvidate de los trámites bancarios interminables. Descubrí cómo acceder a tu terreno propio con financiamiento directo, sin garantes y con aprobación en 24 horas.',
    content: `<p class="lead">El sistema bancario tradicional exige requisitos que la mayoría de trabajadores paraguayos no pueden cumplir. Pero existe otra forma.</p>
      <h3>Requisitos para Financiamiento Directo TEKO</h3>
      <ul><li>Cédula de Identidad vigente</li><li>Comprobante de ingreso (boleta de sueldo o factura)</li><li>20% de entrega inicial</li></ul>
      <h3>Proceso en 3 Pasos</h3>
      <ol><li><strong>Elegí tu lote:</strong> Visitá nuestro catálogo online</li><li><strong>Simulá tu plan:</strong> Usá nuestra calculadora interactiva</li><li><strong>Reservá:</strong> Con tu entrega inicial, el lote es tuyo</li></ol>
      <p><strong>No importa si estás en Informconf.</strong> Evaluamos tu capacidad de pago real, no un score crediticio.</p>`,
    date: '28 de Enero, 2026',
    author: 'Equipo Comercial TEKO',
    category: 'Financiación',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200',
    readTime: '5 min'
  },
  {
    id: 'lotes-financiados-central-cordillera',
    title: 'Lotes Financiados en Central y Cordillera: Mapa de Oportunidades 2026',
    excerpt: 'Los departamentos de Central y Cordillera concentran las mejores oportunidades de inversión inmobiliaria. Te mostramos dónde comprar y por qué.',
    content: `<p class="lead">La expansión del Gran Asunción hacia Central y Cordillera es inevitable. Los inversores inteligentes están posicionándose ahora.</p>
      <h3>Departamento Central</h3>
      <p>Capiatá, Itauguá, Areguá y San Bernardino lideran el ranking de valorización.</p>
      <h3>Departamento Cordillera</h3>
      <p>Caacupé, Piribebuy y Altos ofrecen terrenos con vistas extraordinarias y potencial turístico.</p>
      <h3>Factores de Valorización</h3>
      <ul><li>Nuevas rutas y autopistas</li><li>Desarrollo comercial en expansión</li><li>Migración de familias buscando calidad de vida</li></ul>`,
    date: '25 de Enero, 2026',
    author: 'Análisis TEKO',
    category: 'Mercado Inmobiliario',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200',
    readTime: '8 min'
  },
  {
    id: 'inversion-terreno-vs-departamento',
    title: 'Terreno vs Departamento: Dónde Invertir tu Dinero en Paraguay 2026',
    excerpt: 'Analizamos con números reales cuál inversión genera mayor retorno: comprar un terreno para construir o un departamento listo. Los resultados te sorprenderán.',
    content: `<p class="lead">La eterna pregunta del inversor paraguayo. Veamos los números fríos.</p>
      <h3>Escenario A: Departamento de 2 habitaciones</h3>
      <ul><li>Inversión: USD 85.000</li><li>Renta mensual: USD 400</li><li>Retorno anual: 5.6%</li><li>Valorización: 3-5% anual</li></ul>
      <h3>Escenario B: Terreno en zona de expansión</h3>
      <ul><li>Inversión: USD 15.000</li><li>Valorización año 1-3: 15-25% anual</li><li>Potencial de venta: 100% ganancia en 5 años</li></ul>
      <h3>Conclusión</h3>
      <p>Para inversores con capital limitado, el terreno ofrece mayor retorno porcentual y menor riesgo de vacancia.</p>`,
    date: '20 de Enero, 2026',
    author: 'Inversiones TEKO',
    category: 'Estrategia Inversión',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200',
    readTime: '6 min'
  },
  {
    id: 'mejores-zonas-invertir-paraguay-2026',
    title: 'Las 10 Mejores Zonas para Invertir en Paraguay 2026 (Ranking Actualizado)',
    excerpt: 'Basados en datos de plusvalía, desarrollo de infraestructura y proyección urbana, te presentamos el ranking definitivo de zonas para invertir este año.',
    content: `<p class="lead">No todos los terrenos son iguales. La ubicación determina el 80% de tu rentabilidad futura.</p>
      <h3>Top 10 Zonas 2026</h3>
      <ol><li><strong>Costa Salinas (Capiatá):</strong> +18% plusvalía anual promedio</li><li><strong>Areguá Centro:</strong> Turismo + residencial = combo ganador</li><li><strong>San Bernardino:</strong> El clásico que nunca falla</li><li><strong>Luque (zona aeropuerto):</strong> Desarrollo comercial explosivo</li><li><strong>Mariano Roque Alonso:</strong> Hub logístico emergente</li></ol>
      <h3>Criterios de Evaluación</h3>
      <ul><li>Accesibilidad vial</li><li>Proyectos de infraestructura pública</li><li>Servicios básicos disponibles</li><li>Seguridad del barrio</li></ul>`,
    date: '15 de Enero, 2026',
    author: 'Research TEKO',
    category: 'Rankings',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200',
    readTime: '9 min'
  },
  {
    id: 'construir-casa-en-terreno-propio',
    title: 'Cuánto Cuesta Construir una Casa en Paraguay 2026: Guía de Precios por m²',
    excerpt: 'Desde Gs. 850.000 hasta Gs. 2.500.000 por metro cuadrado. Te explicamos qué incluye cada rango y cómo planificar tu construcción paso a paso.',
    content: `<p class="lead">Tener el terreno es el primer paso. Ahora veamos cómo transformarlo en tu hogar.</p>
      <h3>Rangos de Construcción 2026</h3>
      <ul><li><strong>Económico (Gs. 850.000-1.200.000/m²):</strong> Construcción tradicional, terminaciones estándar</li><li><strong>Medio (Gs. 1.200.000-1.800.000/m²):</strong> Mejor calidad de materiales, diseño personalizado</li><li><strong>Premium (Gs. 1.800.000+/m²):</strong> Arquitectura de autor, materiales importados</li></ul>
      <h3>TEKO Construcciones</h3>
      <p>Ofrecemos planes de construcción llave en mano con financiación incluida. Consultá nuestros planes Essential y Luxury.</p>`,
    date: '10 de Enero, 2026',
    author: 'TEKO Construcciones',
    category: 'Construcción',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200',
    readTime: '7 min'
  },
  {
    id: 'primera-casa-propia-jovenes-paraguay',
    title: 'Tu Primera Casa Propia: Guía para Jóvenes que Ganan el Mínimo en Paraguay',
    excerpt: 'Sí, es posible. Con estrategia y disciplina, podés dejar de alquilar y empezar a construir patrimonio aunque ganes el salario mínimo.',
    content: `<p class="lead">El 67% de los jóvenes paraguayos creen que jamás podrán tener casa propia. Están equivocados.</p>
      <h3>La Estrategia del Hormiguero</h3>
      <p>No necesitás juntar todo el dinero. Necesitás empezar HOY con lo que tenés.</p>
      <h3>Plan de Acción</h3>
      <ol><li><strong>Mes 1-6:</strong> Ahorrá Gs. 500.000/mes para tu entrega inicial</li><li><strong>Mes 7:</strong> Reservá tu lote con Gs. 3.000.000</li><li><strong>Mes 8+:</strong> Cuotas de Gs. 900.000 (similar a un alquiler)</li></ol>
      <h3>El Resultado</h3>
      <p>En 5 años, en vez de recibos de alquiler, tenés un título de propiedad. Esa es la diferencia.</p>`,
    date: '05 de Enero, 2026',
    author: 'Comunidad TEKO',
    category: 'Para Jóvenes',
    image: 'https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?w=1200',
    readTime: '6 min'
  },
  {
    id: 'errores-comprar-terreno-paraguay',
    title: 'Los 5 Errores que Destruyen tu Inversión en Terrenos (Y Cómo Evitarlos)',
    excerpt: 'Cada año, cientos de paraguayos pierden dinero por cometer estos errores evitables. Aprendé de la experiencia ajena y protegé tu capital.',
    content: `<h3>Error #1: Comprar por Precio, No por Ubicación</h3>
      <p>Un terreno "barato" en medio de la nada puede costarte 10 años de espera sin valorización.</p>
      <h3>Error #2: No Verificar Documentación</h3>
      <p>La cesión de derechos NO es escritura. Exigí todos los papeles antes de pagar.</p>
      <h3>Error #3: Endeudarse en Dólares</h3>
      <p>Si tus ingresos son en guaraníes, tu deuda debe ser en guaraníes. Punto.</p>
      <h3>Error #4: No Considerar Costos Adicionales</h3>
      <p>Impuestos, transferencias, cerramientos. Calculá un 10% extra para imprevistos.</p>
      <h3>Error #5: Esperar el "Momento Perfecto"</h3>
      <p>El momento perfecto fue hace 5 años. El segundo mejor momento es AHORA.</p>`,
    date: '01 de Enero, 2026',
    author: 'Asesoría TEKO',
    category: 'Consejos',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200',
    readTime: '5 min'
  },
  {
    id: 'heredar-terreno-hijos-paraguay',
    title: 'Cómo Dejar un Terreno a tus Hijos: Guía de Sucesión en Paraguay',
    excerpt: 'La tierra es la mejor herencia. Pero sin planificación legal, puede convertirse en una pesadilla familiar. Te explicamos cómo proteger tu legado.',
    content: `<p class="lead">Un terreno bien titulado es la herencia más sólida que podés dejar. Pero el proceso de sucesión debe planificarse.</p>
      <h3>Opciones Legales</h3>
      <ul><li><strong>Testamento:</strong> Determinás exactamente quién recibe qué</li><li><strong>Donación en vida:</strong> Transferís ahora y evitás conflictos futuros</li><li><strong>Sucesión natural:</strong> Herederos legales reciben según la ley</li></ul>
      <h3>Consejo TEKO</h3>
      <p>Si comprás un terreno pensando en tus hijos, poné el título a nombre de ellos desde el inicio. Evitás trámites futuros.</p>`,
    date: '28 de Diciembre, 2025',
    author: 'Legal TEKO',
    category: 'Planificación',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200',
    readTime: '6 min'
  }
];

// Helper function to get post by ID
export const getPostById = (postId: string): BlogPost | undefined => {
  return blogPosts.find(p => p.id === postId);
};