'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Check, ArrowRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import type { Zone, Property } from '@/types';
import { Button } from '@/components/Button';

interface Props {
    zone: Zone;
    properties: Property[];
}

export default function ZonaPage({ zone, properties }: Props) {
    const minPrice = properties.length > 0 ? Math.min(...properties.map(p => p.price)) : 0;
    const availableCount = properties.filter(p => p.status === 'available').length;

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 lg:pt-32 lg:pb-24">
                {/* Background with optimized contrast */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={zone.heroImage}
                        alt={zone.name}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-teko-navy/60 backdrop-brightness-[0.8] lg:bg-gradient-to-r lg:from-teko-navy/90 lg:via-teko-navy/60 lg:to-transparent" />
                </div>

                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="inline-flex items-center gap-2 px-4 py-2 bg-teko-gold text-white rounded-full text-xs font-bold uppercase tracking-widest mb-6 shadow-lg">
                                <MapPin size={14} /> {zone.name}
                            </span>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-black text-white mb-6 leading-[1.1] drop-shadow-md">
                                Invertí en la zona de <br />
                                <span className="text-teko-gold">Mayor Crecimiento</span>
                            </h1>
                            <p className="text-lg md:text-xl text-slate-100 mb-10 leading-relaxed max-w-2xl drop-shadow-sm font-medium">
                                {zone.description || 'Asegurá tu pedazo de tierra hoy con cuotas fijas en Guaraníes. Sin bancos, con título inmediato y seguridad jurídica total.'}
                            </p>

                            {/* Price Badge - Compact & Integrated */}
                            <div className="flex flex-wrap items-center gap-6 mb-12">
                                <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-2xl inline-block">
                                    <span className="block text-[10px] uppercase tracking-widest text-teko-gold font-black mb-1">Lotes Desde</span>
                                    <div className="text-3xl md:text-4xl font-black text-white tracking-tight">
                                        Gs. {minPrice.toLocaleString()}
                                    </div>
                                    <div className="text-xs text-slate-300 mt-1 font-semibold">
                                        Financiación a sola firma
                                    </div>
                                </div>
                            </div>

                            {/* Actions Group */}
                            <div className="flex flex-col xs:flex-row items-center gap-4">
                                <Link href={`/calculadora?price=${minPrice}`} className="w-full xs:w-auto">
                                    <Button variant="gold" size="lg" className="w-full text-lg font-black px-10 py-5 rounded-xl shadow-[0_10px_30px_rgba(202,160,77,0.4)]">
                                        Ver Precios y Cuotas
                                        <ArrowRight size={20} className="ml-3" />
                                    </Button>
                                </Link>
                                <a href={zone.mapUrl} target="_blank" rel="noopener noreferrer" className="w-full xs:w-auto">
                                    <Button variant="outline" size="lg" className="w-full bg-white/5 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-teko-navy font-bold py-5 rounded-xl">
                                        Explorar Mapa
                                        <ExternalLink size={18} className="ml-3" />
                                    </Button>
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Highlights Section */}
            <section className="py-16 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {zone.highlights.map((highlight: string, idx: number) => (
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
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-teko-navy mb-2">{prop.title}</h3>
                                    <p className="text-slate-500 text-sm mb-4">{prop.location}</p>

                                    <div className="flex flex-col mb-4">
                                        {prop.originalPrice && (
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="text-slate-400 line-through text-sm">
                                                    Gs. {prop.originalPrice.toLocaleString()}
                                                </span>
                                                <span className="bg-red-500 text-white text-[12px] font-bold px-2 py-1 rounded shadow-sm transform -rotate-2 uppercase tracking-wide">
                                                    AHORRÁS Gs. {(prop.originalPrice - prop.price).toLocaleString()}
                                                </span>
                                            </div>
                                        )}
                                        <span className="text-3xl font-extrabold text-teko-navy tracking-tight">Gs. {prop.price.toLocaleString()}</span>
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
                                        {prop.features.slice(0, 2).map((f: string, i: number) => (
                                            <span key={i} className="px-2 py-1 bg-teko-gold/10 text-teko-gold text-xs rounded-md font-medium">
                                                {f}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-3">
                                        <Link href={`/propiedad/${prop.id}`} className="flex-1">
                                            <Button fullWidth variant="outline" disabled={prop.status === 'reserved'}>
                                                Ver Detalles
                                            </Button>
                                        </Link>
                                        <Link href={`/calculadora?price=${prop.price}`} className="flex-1">
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
                        <Link href={`/calculadora?price=${minPrice}`}>
                            <Button variant="gold" size="lg">
                                Calcular mi cuota
                                <ArrowRight size={18} className="ml-2" />
                            </Button>
                        </Link>
                        <a
                            href={`https://wa.me/595974202163?text=Hola! Me interesa información sobre los lotes en ${zone.name}`}
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
}
