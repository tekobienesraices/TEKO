'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MapPin, Check, Ruler, Calendar, Share2, ArrowLeft, ExternalLink } from 'lucide-react';
import type { Property, Zone } from '@/types';
import { Button } from '@/components/Button';
import { LeadModal } from '@/components/LeadModal';
import { GrowthTimeline } from '@/components/GrowthTimeline';

interface Props {
    property: Property;
    zone?: Zone;
}

export default function PropiedadPage({ property, zone }: Props) {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div className="pt-0 min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
                <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teko-navy/80 to-transparent" />
                <div className="absolute bottom-10 left-0 w-full">
                    <div className="max-w-7xl mx-auto px-4">
                        <Link href="/terrenos" className="inline-flex items-center text-white/80 hover:text-white mb-6 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full transition-all text-sm font-medium">
                            <ArrowLeft size={16} className="mr-2" /> Volver al catálogo
                        </Link>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white tracking-tight">{property.title}</h1>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-10">
                        {/* Specs */}
                        <div className="flex flex-wrap gap-6 p-6 bg-slate-50 rounded-xl border border-slate-100">

                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-teko-navy">
                                    <Calendar size={20} />
                                </div>
                                <div>
                                    <span className="block text-xs text-slate-400 uppercase">Entrega</span>
                                    <span className="font-bold text-teko-navy">Inmediata</span>
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <div>
                            <h3 className="text-2xl font-serif font-bold text-teko-navy mb-4">Sobre esta propiedad</h3>
                            <div className="flex flex-wrap items-center gap-4 mb-6">
                                <span className="px-4 py-1.5 bg-teko-navy text-white rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                                    {property.status === 'reserved' ? 'Reservado' : 'Disponible'}
                                </span>
                                <span className="flex items-center gap-1.5 text-slate-500 font-semibold">
                                    <MapPin size={18} className="text-teko-gold" /> {property.location}
                                </span>
                            </div>
                            <p className="text-slate-600 leading-relaxed text-lg">
                                {property.description} Ubicado en una de las zonas con mayor proyección de crecimiento, este lote ofrece el equilibrio perfecto entre naturaleza y conectividad. Ideal para quienes buscan construir no solo una casa, sino un legado familiar.
                            </p>
                        </div>

                        {/* Features */}
                        <div>
                            <h3 className="text-2xl font-serif font-bold text-teko-navy mb-6">Características y Servicios</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {property.features.map((feature: string, idx: number) => (
                                    <div key={idx} className="flex items-center gap-3 text-slate-700">
                                        <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
                                            <Check size={12} />
                                        </div>
                                        {feature}
                                    </div>
                                ))}
                                <div className="flex items-center gap-3 text-slate-700">
                                    <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
                                        <Check size={12} />
                                    </div>
                                    Seguridad Jurídica (Escritura)
                                </div>
                            </div>
                        </div>

                        {/* Gallery Section (New) */}
                        {property.gallery && property.gallery.length > 0 && (
                            <div className="space-y-6">
                                <h3 className="text-2xl font-serif font-bold text-teko-navy">Galería de Imágenes</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {property.gallery.map((img, idx) => (
                                        <div key={idx} className="relative aspect-video rounded-2xl overflow-hidden border border-slate-200 shadow-md group cursor-pointer">
                                            <img
                                                src={img}
                                                alt={`${property.title} - Vista ${idx + 1}`}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Map Preview */}
                        <div className="space-y-4">
                            <h3 className="text-2xl font-serif font-bold text-teko-navy mb-4">Ubicación Estratégica</h3>
                            <div className="relative group rounded-2xl overflow-hidden border-2 border-slate-100 shadow-xl aspect-video bg-slate-100 flex items-center justify-center">
                                {/* Background Decoration */}
                                <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-slate-200" />

                                {/* Visual Content */}
                                <div className="relative z-10 text-center p-8">
                                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-teko-navy shadow-lg mx-auto mb-4 group-hover:scale-110 transition-transform duration-500">
                                        <MapPin size={32} />
                                    </div>
                                    <h4 className="text-xl font-bold text-teko-navy mb-2">Mapa Interactivo</h4>
                                    <p className="text-slate-500 mb-6 max-w-sm mx-auto">
                                        Explorá el entorno, servicios cercanos y accesos principales directamente en Google Maps.
                                    </p>

                                    <a
                                        href={zone?.mapUrl || '#'}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Button variant="gold" className="shadow-lg">
                                            Ver en Google Maps
                                            <ExternalLink size={18} className="ml-2" />
                                        </Button>
                                    </a>
                                </div>

                                {/* Coordinates Badge */}
                                <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-lg text-[10px] font-mono text-slate-500 border border-slate-200 shadow-sm">
                                    {property.coordinates.lat}, {property.coordinates.lng}
                                </div>
                            </div>
                        </div>

                        {/* Growth Evidence */}
                        <div className="py-8">
                            <h3 className="text-2xl font-serif font-bold text-teko-navy mb-4">Plusvalía Comprobada</h3>
                            <p className="text-slate-600 mb-6">
                                Invertir en Costa Salinas no es una apuesta, es una certeza. Mirá cómo el tiempo ha multiplicado el valor de la tierra en esta misma zona:
                            </p>
                            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
                                <GrowthTimeline />
                            </div>
                        </div>

                    </div>

                    {/* Sidebar Sticky */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-28 bg-white p-6 rounded-2xl shadow-xl border border-slate-100">
                            <div className="mb-6">
                                <span className="text-slate-500 text-sm">Precio de lista</span>
                                {property.originalPrice && (
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-lg text-slate-400 line-through">Gs. {property.originalPrice.toLocaleString()}</span>
                                        <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                                            Oferta 5M OFF
                                        </span>
                                    </div>
                                )}
                                <div className="text-4xl font-bold text-teko-navy">Gs. {property.price.toLocaleString()}</div>
                            </div>

                            <div className="mb-8 p-4 bg-teko-navy/5 rounded-lg border border-teko-navy/10">
                                <span className="block text-xs text-teko-navy font-bold uppercase tracking-wide mb-1">Financiación TEKO</span>
                                <div className="flex justify-between items-baseline">
                                    <span className="text-sm text-slate-600">Cuota desde</span>
                                    <span className="text-2xl font-bold text-teko-navy">Gs. {property.monthlyPayment.toLocaleString()}</span>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <Button
                                    fullWidth
                                    size="lg"
                                    onClick={() => setModalOpen(true)}
                                    className="shadow-teko-navy/20"
                                >
                                    Consultar Disponibilidad
                                </Button>

                                <Link href={`/calculadora?price=${property.price}`} className="block">
                                    <Button fullWidth variant="secondary">
                                        Personalizar Plan de Pagos
                                    </Button>
                                </Link>

                                <Button fullWidth variant="ghost" className="text-slate-400 hover:text-teko-navy">
                                    <Share2 size={16} className="mr-2" /> Compartir ficha
                                </Button>
                            </div>

                            <div className="mt-6 text-center">
                                <p className="text-xs text-slate-400">
                                    Reserva online 100% segura. <br />Garantía de devolución 48hs.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <LeadModal isOpen={modalOpen} onClose={() => setModalOpen(false)} title={`Interés: ${property.title}`} source="Property Detail" />
        </div>
    );
}
