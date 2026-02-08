import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/Button';
import { ArrowRight, CheckCircle, MapPin, Phone, TrendingUp, Shield, Clock } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Venta de Terrenos en Capiatá 2026 | Lotes en Cuotas desde Gs. 900.000/mes',
    description: 'Venta de terrenos en Capiatá con financiación propia. Lotes desde 360m² en cuotas fijas. Sin bancos, sin Informconf. Aprobación en 24hs. ¡Visitá Costa Salinas hoy!',
    keywords: [
        'venta de terrenos en capiata',
        'terrenos en capiata',
        'lotes en capiata',
        'terrenos capiata paraguay',
        'comprar terreno capiata',
        'inmobiliaria capiata',
        'terrenos baratos capiata',
    ],
    openGraph: {
        title: 'Venta de Terrenos en Capiatá | TEKO Bienes Raíces',
        description: 'Lotes desde Gs. 81.000.000 con financiación hasta 72 meses. Sin consulta a Informconf.',
        images: ['/images/capiata/capiata-progreso-1.jpg'],
        url: 'https://www.tekobienesraicespy.com/venta-terrenos-capiata',
    },
    alternates: {
        canonical: 'https://www.tekobienesraicespy.com/venta-terrenos-capiata',
    },
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Terrenos en Venta en Capiatá',
    description: 'Lotes residenciales en Costa Salinas, Capiatá. Financiación propia hasta 72 meses.',
    brand: {
        '@type': 'Brand',
        name: 'TEKO Bienes Raíces',
    },
    offers: {
        '@type': 'Offer',
        price: '81000000',
        priceCurrency: 'PYG',
        availability: 'https://schema.org/InStock',
        seller: {
            '@type': 'RealEstateAgent',
            name: 'TEKO Bienes Raíces',
            telephone: '+595974202163',
        },
    },
    aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '47',
    },
};

export default function VentaTerrenosCapiataPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-teko-navy via-slate-800 to-teko-navy min-h-[70vh] flex items-center">
                <div className="absolute inset-0 bg-[url('/images/capiata/capiata-progreso-1.jpg')] bg-cover bg-center opacity-20" />
                <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 text-center">
                    <span className="inline-block px-4 py-2 bg-teko-gold/20 text-teko-gold rounded-full text-sm font-semibold mb-6">
                        #1 en Venta de Terrenos en Capiatá
                    </span>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                        Venta de Terrenos en Capiatá<br />
                        <span className="text-teko-gold">Cuotas desde Gs. 900.000/mes</span>
                    </h1>
                    <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                        Lotes de 360m² y 450m² con título listo para transferir. Sin bancos, sin Informconf,
                        con financiación propia hasta 72 meses. Aprobación en 24 horas.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="https://wa.me/595974202163?text=Hola%2C%20quiero%20info%20sobre%20terrenos%20en%20Capiat%C3%A1" target="_blank">
                            <Button variant="gold" size="lg" className="w-full sm:w-auto">
                                <Phone className="mr-2" size={20} />
                                Consultar por WhatsApp
                            </Button>
                        </Link>
                        <Link href="/terrenos">
                            <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-teko-navy">
                                Ver Lotes Disponibles
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Trust Badges */}
            <section className="bg-white py-8 border-b">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        {[
                            { icon: Shield, text: 'Título 100% Legal' },
                            { icon: Clock, text: 'Aprobación 24hs' },
                            { icon: TrendingUp, text: '+15% Plusvalía Anual' },
                            { icon: CheckCircle, text: 'Sin Informconf' },
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col items-center gap-2">
                                <item.icon className="text-teko-gold" size={32} />
                                <span className="font-semibold text-teko-navy">{item.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <div>
                            <h2 className="text-3xl font-serif font-bold text-teko-navy mb-6">
                                ¿Por Qué Comprar Terreno en Capiatá?
                            </h2>
                            <p className="text-slate-600 mb-6 text-lg">
                                <strong>Capiatá es la zona de mayor crecimiento inmobiliario de Paraguay.</strong> A solo 18 km de Asunción,
                                ofrece precios hasta 60% más bajos que Lambaré con una valorización anual del 15-20%.
                            </p>

                            <h3 className="text-xl font-bold text-teko-navy mb-4">Ventajas de Invertir en Capiatá:</h3>
                            <ul className="space-y-3 mb-8">
                                {[
                                    'Precios desde Gs. 225.000/m² (vs Gs. 800.000 en Lambaré)',
                                    'Valorización comprobada del 15-20% anual',
                                    'Infraestructura en desarrollo: rutas, hospitales, comercios',
                                    'Conectividad por Ruta 2 (25 min a Asunción)',
                                    'Ambiente residencial familiar y seguro',
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                                        <span className="text-slate-700">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <h3 className="text-xl font-bold text-teko-navy mb-4">Precios de Terrenos en Capiatá 2026:</h3>
                            <div className="bg-white rounded-xl p-6 shadow-sm border mb-6">
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b">
                                            <th className="text-left py-2 text-teko-navy">Zona</th>
                                            <th className="text-right py-2 text-teko-navy">Precio/m²</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b bg-teko-gold/10">
                                            <td className="py-3 font-semibold">Costa Salinas (TEKO)</td>
                                            <td className="py-3 text-right font-bold text-teko-gold">Gs. 225.000</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="py-3">Centro Capiatá</td>
                                            <td className="py-3 text-right">Gs. 350.000 - 500.000</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3">Zona Sur</td>
                                            <td className="py-3 text-right">Gs. 100.000 - 150.000</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-teko-gold/20">
                            <h3 className="text-2xl font-serif font-bold text-teko-navy mb-6 text-center">
                                Plan de Pago Costa Salinas
                            </h3>

                            <div className="space-y-4 mb-8">
                                <div className="flex justify-between py-3 border-b">
                                    <span className="text-slate-600">Lote Familiar</span>
                                    <span className="font-bold">360 m²</span>
                                </div>
                                <div className="flex justify-between py-3 border-b">
                                    <span className="text-slate-600">Precio Total</span>
                                    <span className="font-bold">Gs. 81.000.000</span>
                                </div>
                                <div className="flex justify-between py-3 border-b">
                                    <span className="text-slate-600">Entrega Inicial (20%)</span>
                                    <span className="font-bold">Gs. 16.200.000</span>
                                </div>
                                <div className="flex justify-between py-3 border-b">
                                    <span className="text-slate-600">Plazo</span>
                                    <span className="font-bold">Hasta 72 meses</span>
                                </div>
                                <div className="flex justify-between py-4 bg-teko-gold/10 rounded-lg px-4">
                                    <span className="text-lg font-semibold text-teko-navy">Cuota Mensual</span>
                                    <span className="text-2xl font-bold text-teko-gold">Gs. 900.000</span>
                                </div>
                            </div>

                            <Link href="https://wa.me/595974202163?text=Hola%2C%20quiero%20info%20sobre%20terrenos%20en%20Capiat%C3%A1" target="_blank">
                                <Button variant="gold" size="lg" fullWidth>
                                    Quiero Este Terreno
                                    <ArrowRight className="ml-2" size={20} />
                                </Button>
                            </Link>

                            <p className="text-center text-sm text-slate-500 mt-4">
                                Sin bancos • Sin Informconf • Aprobación en 24hs
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-white" itemScope itemType="https://schema.org/FAQPage">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-serif font-bold text-teko-navy mb-12 text-center">
                        Preguntas Frecuentes sobre Terrenos en Capiatá
                    </h2>

                    <div className="space-y-6">
                        {[
                            {
                                q: '¿Cuánto cuesta un terreno en Capiatá?',
                                a: 'Los precios varían según la zona. En Costa Salinas (TEKO) los terrenos cuestan Gs. 225.000/m². Un lote de 360m² tiene un precio total de Gs. 81.000.000, financiable hasta 72 meses con cuotas de Gs. 900.000.'
                            },
                            {
                                q: '¿Se puede comprar terreno en Capiatá sin Informconf?',
                                a: 'Sí. TEKO Bienes Raíces ofrece financiación propia sin consultar Informconf. Evaluamos tu capacidad de pago actual, no tu historial crediticio. Solo necesitás cédula y comprobante de ingreso.'
                            },
                            {
                                q: '¿Dónde queda Costa Salinas en Capiatá?',
                                a: 'Costa Salinas está ubicado en la zona norte de Capiatá, con acceso directo por Ruta 2. A 25 minutos de Asunción en auto. Coordinamos visitas gratuitas todos los días.'
                            },
                        ].map((faq, i) => (
                            <div key={i} className="bg-slate-50 rounded-xl p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                                <h3 className="text-lg font-bold text-teko-navy mb-3" itemProp="name">{faq.q}</h3>
                                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                                    <p className="text-slate-600" itemProp="text">{faq.a}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-16 bg-teko-navy">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-serif font-bold text-white mb-4">
                        ¿Listo para Comprar tu Terreno en Capiatá?
                    </h2>
                    <p className="text-slate-300 mb-8">
                        Contactanos hoy y agendá tu visita gratuita a Costa Salinas.
                    </p>
                    <Link href="https://wa.me/595974202163" target="_blank">
                        <Button variant="gold" size="lg">
                            <Phone className="mr-2" size={20} />
                            WhatsApp: +595 974 202 163
                        </Button>
                    </Link>
                </div>
            </section>
        </>
    );
}
