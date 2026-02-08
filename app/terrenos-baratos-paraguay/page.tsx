import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/Button';
import { ArrowRight, CheckCircle, Phone, TrendingUp, Shield, MapPin, DollarSign } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Terrenos Baratos en Paraguay 2026 | Desde Gs. 225.000/m² - TEKO',
    description: 'Los terrenos más baratos de Paraguay con la mejor calidad. Lotes desde Gs. 81.000.000 en Capiatá con financiación propia. Sin bancos ni Informconf. ¡Visitá Costa Salinas!',
    keywords: [
        'terrenos baratos paraguay',
        'lotes baratos paraguay',
        'terrenos economicos paraguay',
        'comprar terreno barato',
        'terrenos accesibles',
        'lotes precios bajos',
        'terrenos central paraguay',
    ],
    openGraph: {
        title: 'Terrenos Baratos en Paraguay | TEKO Bienes Raíces',
        description: 'Los mejores precios del mercado. Lotes desde Gs. 225.000/m² con financiación.',
        images: ['/images/capiata/capiata-progreso-1.jpg'],
        url: 'https://www.tekobienesraicespy.com/terrenos-baratos-paraguay',
    },
    alternates: {
        canonical: 'https://www.tekobienesraicespy.com/terrenos-baratos-paraguay',
    },
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Terrenos Baratos en Paraguay',
    description: 'Listado de terrenos económicos disponibles en Paraguay',
    itemListElement: [
        {
            '@type': 'ListItem',
            position: 1,
            item: {
                '@type': 'Product',
                name: 'Lote Familiar Costa Salinas',
                description: 'Terreno de 360m² en Capiatá con servicios',
                offers: {
                    '@type': 'Offer',
                    price: '81000000',
                    priceCurrency: 'PYG',
                    availability: 'https://schema.org/InStock',
                },
            },
        },
        {
            '@type': 'ListItem',
            position: 2,
            item: {
                '@type': 'Product',
                name: 'Lote Inversor Costa Salinas',
                description: 'Terreno de 450m² en Capiatá con servicios',
                offers: {
                    '@type': 'Offer',
                    price: '120000000',
                    priceCurrency: 'PYG',
                    availability: 'https://schema.org/InStock',
                },
            },
        },
    ],
    numberOfItems: 2,
};

export default function TerrenosBaratosParaguayPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Hero */}
            <section className="relative bg-gradient-to-br from-green-900 to-teko-navy min-h-[60vh] flex items-center">
                <div className="absolute inset-0 bg-[url('/images/capiata/capiata-progreso-1.jpg')] bg-cover bg-center opacity-20" />
                <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 text-center">
                    <span className="inline-block px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold mb-6">
                        💰 Mejores Precios del Mercado
                    </span>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
                        Terrenos Baratos en Paraguay<br />
                        <span className="text-green-400">Desde Gs. 225.000/m²</span>
                    </h1>
                    <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                        Encontrá el terreno más económico del Gran Asunción sin sacrificar calidad.
                        Lotes con título, servicios y financiación propia.
                    </p>
                    <Link href="/terrenos">
                        <Button variant="gold" size="lg">
                            Ver Terrenos Disponibles
                            <ArrowRight className="ml-2" size={20} />
                        </Button>
                    </Link>
                </div>
            </section>

            {/* Price Comparison */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-serif font-bold text-teko-navy mb-4 text-center">
                        Comparativa de Precios: ¿Dónde Conviene Comprar?
                    </h2>
                    <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
                        Analizamos los precios del m² en las principales zonas del Gran Asunción para que tomes la mejor decisión.
                    </p>

                    <div className="bg-slate-50 rounded-2xl overflow-hidden shadow-xl">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-teko-navy text-white">
                                    <th className="py-4 px-6 text-left">Zona</th>
                                    <th className="py-4 px-6 text-center">Precio/m²</th>
                                    <th className="py-4 px-6 text-center">Lote 360m²</th>
                                    <th className="py-4 px-6 text-center hidden md:table-cell">Valorización</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-green-50 border-2 border-green-500">
                                    <td className="py-4 px-6 font-bold text-green-700">
                                        <div className="flex items-center gap-2">
                                            <span>🏆</span>
                                            Costa Salinas, Capiatá (TEKO)
                                        </div>
                                    </td>
                                    <td className="py-4 px-6 text-center font-bold text-green-700">Gs. 225.000</td>
                                    <td className="py-4 px-6 text-center font-bold text-green-700">Gs. 81.000.000</td>
                                    <td className="py-4 px-6 text-center text-green-600 hidden md:table-cell">+18%/año</td>
                                </tr>
                                {[
                                    ['Centro Capiatá', 'Gs. 400.000', 'Gs. 144.000.000', '+12%/año'],
                                    ['Luque', 'Gs. 500.000', 'Gs. 180.000.000', '+10%/año'],
                                    ['San Lorenzo', 'Gs. 600.000', 'Gs. 216.000.000', '+8%/año'],
                                    ['Fernando de la Mora', 'Gs. 750.000', 'Gs. 270.000.000', '+6%/año'],
                                    ['Lambaré', 'Gs. 900.000', 'Gs. 324.000.000', '+5%/año'],
                                ].map(([zona, precio, total, val], i) => (
                                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                                        <td className="py-4 px-6">{zona}</td>
                                        <td className="py-4 px-6 text-center">{precio}</td>
                                        <td className="py-4 px-6 text-center">{total}</td>
                                        <td className="py-4 px-6 text-center hidden md:table-cell text-slate-500">{val}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <p className="text-center text-slate-600 mt-6">
                        <strong>Conclusión:</strong> Costa Salinas ofrece el mejor precio por m² con la mayor proyección de valorización.
                    </p>
                </div>
            </section>

            {/* Why Cheap Doesn't Mean Bad */}
            <section className="py-20 bg-teko-navy text-white">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-serif font-bold mb-12 text-center">
                        Barato NO Significa Mala Calidad
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Shield,
                                title: 'Título 100% Legal',
                                desc: 'Todos nuestros terrenos tienen documentación en regla. Sin cesión de derechos ni problemas legales.',
                            },
                            {
                                icon: TrendingUp,
                                title: 'Alta Plusvalía',
                                desc: 'Capiatá tiene la mayor valorización del Gran Asunción: 15-20% anual comprobado.',
                            },
                            {
                                icon: MapPin,
                                title: 'Ubicación Estratégica',
                                desc: 'A 25 minutos de Asunción por Ruta 2. Zona residencial con servicios en desarrollo.',
                            },
                        ].map((item, i) => (
                            <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                                <item.icon className="text-teko-gold mb-4" size={40} />
                                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                <p className="text-slate-300">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Available Lots */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-serif font-bold text-teko-navy mb-12 text-center">
                        Terrenos Disponibles Ahora
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-2xl overflow-hidden shadow-lg border-2 border-green-500">
                            <div className="bg-green-500 text-white py-2 text-center font-bold">
                                🔥 MEJOR PRECIO
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-teko-navy mb-2">Lote Familiar</h3>
                                <p className="text-slate-500 mb-4">Costa Salinas, Capiatá</p>
                                <div className="text-4xl font-bold text-green-600 mb-6">
                                    Gs. 81.000.000
                                    <span className="text-sm text-slate-500 block font-normal">360 m² • Gs. 225.000/m²</span>
                                </div>
                                <ul className="space-y-2 mb-6">
                                    {['Título listo para transferir', 'ANDE y agua disponibles', 'Calles trazadas', 'Financiación 72 meses'].map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 text-slate-600">
                                            <CheckCircle className="text-green-500" size={18} />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="bg-green-50 rounded-lg p-4 mb-6">
                                    <p className="text-center text-green-700 font-semibold">
                                        Cuota: Gs. 900.000/mes
                                    </p>
                                </div>
                                <Link href="https://wa.me/595974202163?text=Quiero%20info%20del%20Lote%20Familiar%20barato" target="_blank">
                                    <Button variant="gold" fullWidth>
                                        Consultar Ahora
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                            <div className="bg-teko-navy text-white py-2 text-center font-bold">
                                🎯 MAYOR PLUSVALÍA
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-teko-navy mb-2">Lote Inversor</h3>
                                <p className="text-slate-500 mb-4">Costa Salinas, Capiatá</p>
                                <div className="text-4xl font-bold text-teko-navy mb-6">
                                    Gs. 120.000.000
                                    <span className="text-sm text-slate-500 block font-normal">450 m² • Gs. 266.666/m²</span>
                                </div>
                                <ul className="space-y-2 mb-6">
                                    {['Título listo para transferir', 'ANDE y agua disponibles', 'Mayor superficie', 'Ideal para reventa'].map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 text-slate-600">
                                            <CheckCircle className="text-teko-gold" size={18} />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="bg-slate-50 rounded-lg p-4 mb-6">
                                    <p className="text-center text-teko-navy font-semibold">
                                        Cuota: Gs. 1.333.333/mes
                                    </p>
                                </div>
                                <Link href="https://wa.me/595974202163?text=Quiero%20info%20del%20Lote%20Inversor" target="_blank">
                                    <Button variant="primary" fullWidth>
                                        Consultar Ahora
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-green-600">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-serif font-bold text-white mb-4">
                        ¿Buscás el Terreno Más Barato de Paraguay?
                    </h2>
                    <p className="text-green-100 mb-8">
                        Encontralo en TEKO. Precios accesibles, calidad garantizada, financiación flexible.
                    </p>
                    <Link href="https://wa.me/595974202163" target="_blank">
                        <Button variant="gold" size="lg">
                            <Phone className="mr-2" size={20} />
                            Consultar por WhatsApp
                        </Button>
                    </Link>
                </div>
            </section>
        </>
    );
}
