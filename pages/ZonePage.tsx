import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Check, ArrowRight, ExternalLink } from 'lucide-react';
import { zones, getPropertiesByZone } from '../data';
import { Button } from '../components/Button';

export const ZonePage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const zone = zones.find(z => z.id === id);
    const properties = id ? getPropertiesByZone(id) : [];

    if (!zone) {
        return (
            <div className="pt-24 min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-teko-navy mb-4">Zona no encontrada</h1>
                    <Link to="/terrenos">
                        <Button>Ver todas las zonas</Button>
                    </Link>
                </div>
            </div>
        );
    }

    const minPrice = Math.min(...properties.map(p => p.price));
    const availableCount = properties.filter(p => p.status === 'available').length;

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={zone.heroImage}
                        alt={zone.name}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-teko-navy via-teko-navy/60 to-transparent" />
                </div>

                <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm mb-6">
                            <MapPin size={16} />
                            {zone.name}
                        </span>
                        <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
                            {zone.tagline}
                        </h1>
                        <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                            {zone.description}
                        </p>

                        {/* Price highlight */}
                        <div className="inline-block bg-teko-gold text-white px-8 py-4 rounded-2xl mb-8">
                            <span className="block text-sm uppercase tracking-wider opacity-80">Lotes desde</span>
                            <span className="block text-3xl font-bold">Gs. {minPrice.toLocaleString()}</span>
                            <span className="block text-sm mt-1">Con 20% de entrega sos dueño</span>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to={`/calculadora?price=${minPrice}`}>
                                <Button variant="gold" size="lg">
                                    Calcular mi cuota
                                    <ArrowRight size={18} className="ml-2" />
                                </Button>
                            </Link>
                            <a href={zone.mapUrl} target="_blank" rel="noopener noreferrer">
                                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-teko-navy">
                                    Ver ubicación
                                    <ExternalLink size={16} className="ml-2" />
                                </Button>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Highlights Section */}
            <section className="py-16 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {zone.highlights.map((highlight, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm"
                            >
                                <div className="w-10 h-10 rounded-full bg-teko-gold/10 flex items-center justify-center flex-shrink-0">
                                    <Check size={20} className="text-teko-gold" />
                                </div>
                                <span className="font-medium text-teko-navy">{highlight}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Available Properties */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-teko-navy mb-4">
                            Lotes Disponibles en {zone.name}
                        </h2>
                        <p className="text-slate-500">
                            {availableCount} lotes disponibles para inversión inmediata
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {properties.map((prop, idx) => (
                            <motion.div
                                key={prop.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className={`bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 group ${prop.status === 'reserved' ? 'opacity-75' : ''
                                    }`}
                            >
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <img
                                        src={prop.image}
                                        alt={prop.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    {prop.status === 'reserved' && (
                                        <div className="absolute inset-0 bg-teko-navy/70 flex items-center justify-center">
                                            <span className="text-white font-bold text-lg uppercase tracking-wider">Reservado</span>
                                        </div>
                                    )}
                                    {prop.dimensions && (
                                        <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-teko-navy">
                                            {prop.dimensions}m
                                        </span>
                                    )}
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-teko-navy mb-2">{prop.title}</h3>
                                    <p className="text-slate-500 text-sm mb-4">{prop.size} m² • {prop.dimensions}</p>

                                    <div className="flex items-baseline gap-2 mb-4">
                                        <span className="text-2xl font-bold text-teko-navy">Gs. {prop.price.toLocaleString()}</span>
                                    </div>

                                    <div className="bg-slate-50 rounded-lg p-3 mb-4">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-slate-500">Entrega (20%)</span>
                                            <span className="font-bold text-teko-navy">Gs. {Math.round(prop.price * 0.2).toLocaleString()}</span>
                                        </div>
                                        <div className="flex justify-between text-sm mt-1">
                                            <span className="text-slate-500">Cuota desde</span>
                                            <span className="font-bold text-teko-gold">Gs. {prop.monthlyPayment.toLocaleString()}/mes</span>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {prop.features.slice(0, 2).map((f, i) => (
                                            <span key={i} className="px-2 py-1 bg-teko-gold/10 text-teko-gold text-xs rounded-md font-medium">
                                                {f}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-3">
                                        <Link to={`/propiedad/${prop.id}`} className="flex-1">
                                            <Button fullWidth variant="outline" disabled={prop.status === 'reserved'}>
                                                Ver Detalles
                                            </Button>
                                        </Link>
                                        <Link to={`/calculadora?price=${prop.price}`} className="flex-1">
                                            <Button fullWidth variant="primary" disabled={prop.status === 'reserved'}>
                                                Simular
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-teko-navy text-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                        ¿Listo para dar el primer paso?
                    </h2>
                    <p className="text-white/70 text-lg mb-8">
                        Armá tu plan de financiación en segundos. Sin compromiso, sin letra chica.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to={`/calculadora?price=${minPrice}`}>
                            <Button variant="gold" size="lg">
                                Calcular mi cuota
                                <ArrowRight size={18} className="ml-2" />
                            </Button>
                        </Link>
                        <a
                            href={`https://wa.me/595983783349?text=Hola! Me interesa información sobre los lotes en ${zone.name}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button variant="secondary" size="lg">
                                Hablar con un asesor
                            </Button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};
