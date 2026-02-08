import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/Button';
import { ArrowRight, CheckCircle, Phone, TrendingUp, Shield, Clock, Calculator } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Lotes en Cuotas en Paraguay 2026 | Financiación Propia sin Banco - TEKO',
    description: 'Comprar lotes en cuotas en Paraguay nunca fue tan fácil. Financiación propia hasta 72 meses, sin bancos, sin Informconf. Terrenos desde Gs. 81.000.000 en Capiatá.',
    keywords: [
        'lotes en cuotas paraguay',
        'terrenos en cuotas',
        'lotes financiados paraguay',
        'comprar lote en cuotas',
        'terrenos financiados sin banco',
        'cuotas corridas terrenos',
        'lotes baratos paraguay',
    ],
    openGraph: {
        title: 'Lotes en Cuotas en Paraguay | TEKO Bienes Raíces',
        description: 'Financiación propia hasta 72 meses. Sin bancos, sin Informconf. Cuotas desde Gs. 900.000/mes.',
        images: ['/hero-sunset.png'],
        url: 'https://www.tekobienesraicespy.com/lotes-cuotas-paraguay',
    },
    alternates: {
        canonical: 'https://www.tekobienesraicespy.com/lotes-cuotas-paraguay',
    },
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Financiación de Lotes en Cuotas',
    provider: {
        '@type': 'RealEstateAgent',
        name: 'TEKO Bienes Raíces',
        telephone: '+595974202163',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Capiatá',
            addressCountry: 'PY',
        },
    },
    description: 'Servicio de financiación propia para compra de lotes y terrenos en Paraguay. Hasta 72 meses, sin bancos ni Informconf.',
    areaServed: 'Paraguay',
    hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Planes de Financiación',
        itemListElement: [
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Product',
                    name: 'Lote Familiar 360m²',
                },
                price: '81000000',
                priceCurrency: 'PYG',
            },
        ],
    },
};

export default function LotesCuotasParaguayPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Hero */}
            <section className="relative bg-gradient-to-br from-teko-navy to-slate-900 min-h-[70vh] flex items-center">
                <div className="absolute inset-0 bg-[url('/hero-sunset.png')] bg-cover bg-center opacity-30" />
                <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 text-center">
                    <span className="inline-block px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold mb-6">
                        Financiación Propia • Sin Bancos
                    </span>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
                        Lotes en Cuotas en Paraguay<br />
                        <span className="text-teko-gold">Sin Banco, Sin Informconf</span>
                    </h1>
                    <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                        La forma más fácil de tener tu terreno propio. Financiación directa hasta 72 meses,
                        cuotas fijas en guaraníes y aprobación en solo 24 horas.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/calculadora">
                            <Button variant="gold" size="lg">
                                <Calculator className="mr-2" size={20} />
                                Calcular Mi Cuota
                            </Button>
                        </Link>
                        <Link href="https://wa.me/595974202163" target="_blank">
                            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-teko-navy">
                                Hablar con un Asesor
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* How it Works */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-serif font-bold text-teko-navy mb-12 text-center">
                        ¿Cómo Funciona la Financiación de Lotes en TEKO?
                    </h2>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { step: '1', title: 'Elegí tu Lote', desc: 'Visitá Costa Salinas y elegí el terreno que más te guste.' },
                            { step: '2', title: 'Presentá Documentos', desc: 'Solo cédula y comprobante de ingreso. Sin Informconf.' },
                            { step: '3', title: 'Aprobación 24hs', desc: 'Recibí la aprobación de tu plan en menos de un día.' },
                            { step: '4', title: 'Empezá a Pagar', desc: 'Cuotas fijas mensuales. Al terminar, el título es tuyo.' },
                        ].map((item) => (
                            <div key={item.step} className="text-center">
                                <div className="w-16 h-16 bg-teko-gold text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                                    {item.step}
                                </div>
                                <h3 className="text-xl font-bold text-teko-navy mb-2">{item.title}</h3>
                                <p className="text-slate-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-serif font-bold text-teko-navy mb-12 text-center">
                        TEKO vs Financiación Bancaria
                    </h2>

                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-teko-navy text-white">
                                    <th className="py-4 px-6 text-left">Característica</th>
                                    <th className="py-4 px-6 text-center bg-teko-gold">TEKO</th>
                                    <th className="py-4 px-6 text-center">Banco Tradicional</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    ['Consulta Informconf', '❌ No consultan', '✅ Obligatorio'],
                                    ['Tiempo de Aprobación', '24 horas', '2-4 semanas'],
                                    ['Requisitos', 'Cédula + Ingreso', 'Garante, Patrimonio, IPS'],
                                    ['Tipo de Cuota', 'Fija en Gs.', 'Variable o en USD'],
                                    ['Intereses', 'Incluidos en precio', '18-25% anual'],
                                    ['Trámites', 'Mínimos', 'Extensos'],
                                ].map(([feature, teko, bank], i) => (
                                    <tr key={i} className={i % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                                        <td className="py-4 px-6 font-medium">{feature}</td>
                                        <td className="py-4 px-6 text-center font-semibold text-green-600">{teko}</td>
                                        <td className="py-4 px-6 text-center text-slate-500">{bank}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-serif font-bold text-teko-navy mb-12 text-center">
                        Planes de Cuotas Disponibles
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-slate-50 rounded-2xl p-8 border-2 border-transparent hover:border-teko-gold transition-colors">
                            <h3 className="text-2xl font-bold text-teko-navy mb-4">Lote Familiar</h3>
                            <div className="text-4xl font-bold text-teko-gold mb-2">Gs. 900.000<span className="text-lg text-slate-500">/mes</span></div>
                            <p className="text-slate-500 mb-6">72 cuotas fijas</p>
                            <ul className="space-y-3 mb-8">
                                {['360 m² de superficie', 'Precio: Gs. 81.000.000', 'Entrega: Gs. 16.200.000 (20%)', 'Servicios disponibles', 'Título listo'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2">
                                        <CheckCircle className="text-green-500" size={18} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link href="https://wa.me/595974202163?text=Quiero%20info%20del%20Lote%20Familiar" target="_blank">
                                <Button variant="primary" fullWidth>Consultar</Button>
                            </Link>
                        </div>

                        <div className="bg-teko-navy rounded-2xl p-8 text-white relative overflow-hidden">
                            <div className="absolute top-4 right-4 bg-teko-gold text-teko-navy px-3 py-1 rounded-full text-sm font-bold">
                                POPULAR
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Lote Inversor</h3>
                            <div className="text-4xl font-bold text-teko-gold mb-2">Gs. 1.333.333<span className="text-lg text-slate-300">/mes</span></div>
                            <p className="text-slate-300 mb-6">72 cuotas fijas</p>
                            <ul className="space-y-3 mb-8">
                                {['450 m² de superficie', 'Precio: Gs. 120.000.000', 'Entrega: Gs. 24.000.000 (20%)', 'Mayor plusvalía', 'Ideal para reventa'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2">
                                        <CheckCircle className="text-teko-gold" size={18} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link href="https://wa.me/595974202163?text=Quiero%20info%20del%20Lote%20Inversor" target="_blank">
                                <Button variant="gold" fullWidth>Consultar</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 bg-slate-50" itemScope itemType="https://schema.org/FAQPage">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-serif font-bold text-teko-navy mb-12 text-center">
                        Preguntas Frecuentes sobre Lotes en Cuotas
                    </h2>

                    <div className="space-y-6">
                        {[
                            {
                                q: '¿Puedo comprar un lote en cuotas sin tener historial crediticio?',
                                a: 'Sí. En TEKO no consultamos Informconf ni requerimos historial bancario. Evaluamos tu capacidad de pago actual con un simple comprobante de ingreso.'
                            },
                            {
                                q: '¿Qué pasa si me atraso en una cuota?',
                                a: 'Tenemos flexibilidad. Si tenés un inconveniente puntual, podemos reorganizar el plan. No perdés lo pagado como en otros sistemas. Siempre buscamos una solución.'
                            },
                            {
                                q: '¿Las cuotas son en guaraníes o en dólares?',
                                a: 'Todas nuestras cuotas son 100% en guaraníes y a tasa fija. Si el dólar sube, tu cuota sigue exactamente igual. Sin sorpresas.'
                            },
                        ].map((faq, i) => (
                            <div key={i} className="bg-white rounded-xl p-6 shadow-sm" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                                <h3 className="text-lg font-bold text-teko-navy mb-3" itemProp="name">{faq.q}</h3>
                                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                                    <p className="text-slate-600" itemProp="text">{faq.a}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-teko-navy">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-serif font-bold text-white mb-4">
                        Empezá Hoy a Pagar tu Terreno
                    </h2>
                    <p className="text-slate-300 mb-8">
                        Cada cuota te acerca más a tu propiedad. No sigas pagando alquiler.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/calculadora">
                            <Button variant="gold" size="lg">
                                <Calculator className="mr-2" size={20} />
                                Simular Mi Plan
                            </Button>
                        </Link>
                        <Link href="https://wa.me/595974202163" target="_blank">
                            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-teko-navy">
                                <Phone className="mr-2" size={20} />
                                Llamar Ahora
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
