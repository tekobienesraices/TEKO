import { Property, ConstructionPlan, Zone } from './types';

// ==========================================
// ZONAS - Áreas de desarrollo inmobiliario
// ==========================================
export const zones: Zone[] = [
  {
    id: 'costa-salinas',
    name: 'Costa Salinas',
    tagline: 'Asegurá tu futuro en la zona que más crece',
    description: 'Dejá de alquilar y asegurá tu pedazo de tierra hoy. En Costa Salinas te ofrecemos lotes con título inmediato en la zona de mayor crecimiento de Paraguay. Protegé tus ahorros de la inflación con cuotas fijas en Guaraníes. Tu futuro y el de tu familia empiezan con terreno propio.',
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
    excerpt: 'Mientras la inflación erosiona tus ahorros en el banco, el suelo paraguayo se revaloriza a tasas de dos dígitos. Descubrí por qué los expertos llaman a este momento "La Era Dorada" de la inversión en tierra.',
    content: `
      <p class="lead">Si tenés ahorros en guaraníes durmiendo en una caja de ahorro, estás perdiendo dinero cada día. La inflación es el impuesto silencioso que se come tu esfuerzo. Pero existe un refugio que, históricamente en Paraguay, nunca ha fallado: la tierra.</p>

      <h3>1. El Fenómeno de la Expansión Urbana</h3>
      <p>Asunción ya no da abasto. El crecimiento demográfico está empujando las fronteras de la ciudad hacia el departamento Central y Cordillera a una velocidad vertiginosa. Lo que hoy ves como "lejos", en 3 años será "barrio residencial".</p>
      <p>Comprar tierra en zonas de expansión (como Areguá o San Bernardino) no es solo comprar metros cuadrados; es comprar <strong>tiempo futuro a precio de hoy</strong>. Estás adquiriendo un activo que la ciudad inevitablemente necesitará.</p>

      <h3>2. La Matemática de la Plusvalía Orgánica</h3>
      <p>A diferencia de un vehículo que pierde 20% de su valor al salir de la concesionaria, un terreno bien ubicado hace lo contrario. Analicemos los datos de TEKO:</p>
      <ul>
        <li><strong>Año 1:</strong> Comprás en pre-venta (Barrio sin servicios completos).</li>
        <li><strong>Año 2:</strong> Llega la luz y el agua (Tu lote sube 15%).</li>
        <li><strong>Año 3:</strong> Se construyen las primeras 5 casas (Tu lote sube otro 20%).</li>
        <li><strong>Año 5:</strong> El barrio está consolidado. Tu lote vale el doble.</li>
      </ul>
      <p>Esto no es especulación; es desarrollo urbano. Y vos podés ser dueño de esa curva de crecimiento.</p>

      <h3>3. Financiación en Guaraníes: Tu Escudo contra el Dólar</h3>
      <p>Muchos inversores cometen el error de endeudarse en dólares. En TEKO, nuestra filosofía es proteger al trabajador paraguayo. Por eso, nuestros planes son <strong>100% en Guaraníes y a Cuota Fija</strong>.</p>
      <p>¿Qué significa esto? Que si el dólar sube, tu cuota sigue igual. Si hay inflación, tu cuota (en términos reales) vale menos, pero tu terreno vale más. Es la ecuación perfecta para ganar patrimonio.</p>

      <div class="bg-teko-navy/5 p-6 rounded-xl my-8 border-l-4 border-teko-gold">
        <h4 class="text-teko-navy font-bold text-lg mb-2">💡 Consejo de Experto:</h4>
        <p class="mb-0">No esperes a "juntar toda la plata". El tiempo es el factor más importante. Es mejor congelar el precio hoy con una entrega mínima, que esperar 2 años y pagar un 40% más caro por el mismo lote.</p>
      </div>

      <h3>Conclusión: El Momento es Ahora</h3>
      <p>Para el 2030, se estima que el valor de la tierra en el Gran Asunción se habrá duplicado nuevamente. La pregunta no es si la tierra va a subir de precio, la pregunta es: <strong>¿Vas a ser dueño o vas a ver cómo otros se enriquecen?</strong></p>
      <p>En TEKO te lo hacemos fácil. Sin trámites bancarios, sin garantes. Solo tu cédula y las ganas de progresar.</p>
    `,
    date: '15 de Febrero, 2026',
    author: 'Equipo de Inversión TEKO',
    category: 'Inversión Estratégica',
    image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=1200',
    readTime: '8 min de lectura profunda'
  },
  {
    id: 'guia-compra-terreno-cuotas',
    title: 'Guía Definitiva: De Inquilino a Propietario (Sin Morir en el Intento)',
    excerpt: 'Romper el ciclo del alquiler es posible si sabés cómo usar la "Deuda Buena" a tu favor. Te enseñamos la estrategia financiera exacta para tener tu lote propio con tu mismo sueldo actual.',
    content: `
      <p>Hay un mito peligroso en nuestra sociedad: "La deuda es mala". Falso. La deuda de consumo (tarjetas, auto, ropa) es mala. Pero la <strong>Deuda de Inversión</strong> es la única herramienta que permite a una persona común construir riqueza acelerada.</p>

      <h3>Paso 1: Entender el Costo de Oportunidad</h3>
      <p>Supongamos que pagás Gs. 2.000.000 de alquiler. Al final del año, gastaste Gs. 24.000.000. ¿Qué te quedó? Nada. Solo recibos.</p>
      <p>Ahora, imaginá que destinás parte de ese flujo a una cuota de TEKO. Digamos Gs. 900.000. Al final de 5 años, no tenés recibos; tenés un <strong>Título de Propiedad</strong>. Un pedazo de Paraguay que es tuyo, heredable y vendible.</p>

      <h3>Paso 2: La Regla del 30%</h3>
      <p>Los expertos financieros sugieren que tu cuota inmobiliaria no supere el 30% de tus ingresos netos. En TEKO diseñamos nuestros planes para que encajen en salarios reales. Con nuestro sistema de refuerzos anuales (usando tu aguinaldo), podés bajar tu cuota mensual a niveles ridículamente accesibles.</p>

      <h3>Paso 3: Vencer el Miedo al Compromiso</h3>
      <p>"¿Y si me quedo sin trabajo?" Es el miedo #1. Pero pensalo así: Si te quedás sin trabajo, igual tenés que pagar alquiler (y si no pagás, te echan). En cambio, un terreno es capital. Si tenés una urgencia real, podés vender el terreno, recuperar tu capital y probablemente ganar una diferencia por la plusvalía acumulada.</p>

      <h3>Paso 4: La Ubicación lo es Todo</h3>
      <p>No compres "barato" en medio de la nada. Comprá en zonas con <strong>Proyección</strong>.</p>
      <ul>
        <li>¿Hay rutas proyectadas cerca?</li>
        <li>¿Hay comercios abriendo en la zona?</li>
        <li>¿Hay servicios básicos?</li>
      </ul>
      <p>En TEKO no vendemos "yuyales". Vendemos lotes en barrios planificados donde nosotros mismos invertiríamos.</p>

      <div class="bg-green-50 p-6 rounded-xl my-8 border border-green-200">
        <h4 class="text-green-800 font-bold text-lg mb-2">🚀 Hacé la prueba ahora mismo</h4>
        <p class="mb-4 text-green-700">Usá nuestra calculadora interactiva para ver cómo quedaría tu plan de pagos real.</p>
        <a href="/calculadora" class="inline-block bg-green-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-green-700 transition-colors">Ir a la Calculadora</a>
      </div>

      <h3>Tu Futuro Empieza Hoy</h3>
      <p>Nadie se arrepiente de haber comprado tierra hace 10 años. Solo se arrepienten de no haber comprado más. No seas el que dentro de 5 años diga "ojalá hubiera aprovechado".</p>
    `,
    date: '10 de Febrero, 2026',
    author: 'Asesoría Financiera TEKO',
    category: 'Educación Financiera',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200',
    readTime: '10 min de lectura maestra'
  },
  {
    id: 'seguridad-juridica-loteamientos',
    title: 'Los 7 Peligros de Comprar Sin Título (y Cómo Blindar tu Dinero)',
    excerpt: 'El mercado informal está lleno de trampas. "Derecheras", "Cesión de Derechos", "Sin papeles". Te explicamos por qué NUNCA debés poner tu dinero ahí y cómo verificar que una inmobiliaria es seria.',
    content: `
      <p>Lo barato sale caro. Y en bienes raíces, lo barato sin papeles sale carísimo: puede costarte los ahorros de toda tu vida. En Paraguay, lamentablemente, abundan las ofertas de terrenos "con posesión inmediata" pero sin respaldo legal.</p>

      <h3>Peligro #1: La "Cesión de Derechos" no es un Título</h3>
      <p>Muchos vendedores te ofrecen una cesión de derechos de ocupación. <strong>Cuidado.</strong> Eso no te hace dueño de la tierra. La tierra sigue siendo del Estado o de un tercero. Si el verdadero dueño aparece, te desalojan y perdés todo lo construido.</p>

      <h3>Peligro #2: La Doble Venta</h3>
      <p>Sin un registro catastral correcto, un estafador puede vender el mismo "lote" a 5 personas diferentes. Cuando vayas a alambrar, te vas a encontrar con otros 4 "dueños". En TEKO, cada lote tiene su Cuenta Corriente Catastral individualizada.</p>

      <h3>La Garantía TEKO: Tu Tranquilidad es Negociable</h3>
      <p>Nosotros no jugamos con tu seguridad. Nuestra promesa es simple:</p>
      <ol>
        <li><strong>Loteamientos Aprobados:</strong> Todos nuestros proyectos tienen resolución municipal.</li>
        <li><strong>Impuestos al Día:</strong> No te transferimos deudas ocultas.</li>
        <li><strong>Escritura Inmediata:</strong> Si querés pagar al contado, escrituramos ya. Si financiás, escrituramos al terminar de pagar (o al llegar a un porcentaje pactado).</li>
      </ol>

      <h3>Checklist de Seguridad para el Comprador Inteligente</h3>
      <p>Antes de soltar un solo guaraní, exigí esto:</p>
      <ul>
        <li>✅ Plano georreferenciado aprobado por Catastro.</li>
        <li>✅ Resolución de la Municipalidad aprobando el loteamiento.</li>
        <li>✅ Informe de condición de dominio (libre de gravámenes).</li>
        <li>✅ Contrato de compra-venta certificado por escribanía.</li>
      </ul>

      <p>En TEKO, te mostramos toda esta carpeta <strong>antes</strong> de que firmes nada. Porque la confianza se demuestra con papeles, no con palabras.</p>

      <div class="bg-slate-100 p-8 rounded-2xl text-center my-10">
        <h3 class="font-serif font-bold text-teko-navy text-2xl mb-4">¿Querés verificar nuestros papeles?</h3>
        <p class="mb-6">Nuestros asesores legales están disponibles para mostrarte toda la documentación de nuestros loteamientos. Transparencia total.</p>
        <a href="https://wa.me/595983783349?text=Hola,%20quisiera%20agendar%20una%20reunión%20para%20ver%20documentación" class="bg-teko-navy text-white font-bold py-3 px-8 rounded-full hover:bg-slate-800 transition-colors">Hablar con Asesor Legal</a>
      </div>
    `,
    date: '05 de Febrero, 2026',
    author: 'Departamento Legal TEKO',
    category: 'Seguridad Legal',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200',
    readTime: '6 min de lectura vital'
  }
];

// Helper function to get post by ID
export const getPostById = (postId: string): BlogPost | undefined => {
  return blogPosts.find(p => p.id === postId);
};