'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, TrendingUp, Users, CheckCircle } from 'lucide-react';
import { Button } from '@/components/Button';
import Link from 'next/link';

export default function NosotrosPage() {
    return (
        <div className="pt-20 bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 bg-teko-navy overflow-hidden">
                {/* Background Decor */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
                    <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-teko-gold rounded-full blur-[120px]" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-500 rounded-full blur-[150px]" />
                </div>

                <div className="absolute inset-0 opacity-20">
                    <img
                        src="/properties/costa-salinas-drone-1.jpg"
                        alt="Background"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center py-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl mx-auto"
                    >
                        <span className="text-teko-gold font-bold uppercase tracking-widest text-sm mb-4 block">Nuestra Visión</span>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
                            Construyendo el Futuro de Paraguay
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed">
                            En TEKO, no solo vendemos tierra. Democratizamos el acceso a la propiedad privada para que cada familia paraguaya tenga un legado que heredar.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <img
                                src="/images/capiata/municipalidad.jpg"
                                alt="Crecimiento Urbano"
                                className="rounded-2xl shadow-2xl"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-serif font-bold text-teko-navy mb-6">Más que una Inmobiliaria, un Aliado</h2>
                            <p className="text-slate-600 text-lg mb-6">
                                Nacimos con una misión clara: romper las barreras que impiden a las personas acceder a su primer terreno. Creemos que la tierra es la base de la seguridad para tu familia.
                            </p>
                            <p className="text-slate-600 text-lg mb-8">
                                Contra el sistema bancario tradicional que excluye, nosotros proponemos <strong className="font-semibold text-teko-navy">tu propia oportunidad</strong>. Contra la informalidad del mercado, nosotros ofrecemos <strong className="font-semibold text-teko-navy">seguridad jurídica total</strong>.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="text-teko-gold mt-1" size={20} />
                                    <div>
                                        <h4 className="font-bold text-teko-navy">Transparencia Radical</h4>
                                        <p className="text-slate-500 text-sm">Documentación disponible antes de la firma.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="text-teko-gold mt-1" size={20} />
                                    <div>
                                        <h4 className="font-bold text-teko-navy">Financiación Humana</h4>
                                        <p className="text-slate-500 text-sm">Planes adaptados a la realidad del trabajador.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-serif font-bold text-teko-navy">Nuestros Pilares</h2>
                        <div className="w-24 h-1 bg-teko-gold mx-auto mt-4" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-slate-100 text-center">
                            <div className="w-16 h-16 bg-blue-50 text-teko-navy rounded-full flex items-center justify-center mx-auto mb-6">
                                <Shield size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-teko-navy mb-4">Seguridad Jurídica</h3>
                            <p className="text-slate-600">
                                Loteamientos 100% titulados y aprobados. Tu inversión está blindada legalmente desde el primer día.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-slate-100 text-center">
                            <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <TrendingUp size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-teko-navy mb-4">Plusvalía Garantizada</h3>
                            <p className="text-slate-600">
                                Seleccionamos estratégicamente zonas de alto crecimiento urbano para asegurar que tu dinero crezca.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-slate-100 text-center">
                            <div className="w-16 h-16 bg-yellow-50 text-teko-gold rounded-full flex items-center justify-center mx-auto mb-6">
                                <Users size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-teko-navy mb-4">Comunidad</h3>
                            <p className="text-slate-600">
                                Creamos barrios, no solo loteamientos. Espacios pensados para el desarrollo familiar y social.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-teko-navy mb-6">
                        ¿Listo para formar parte de la Familia TEKO?
                    </h2>
                    <p className="text-xl text-slate-600 mb-8">
                        Unite a la nueva generación de propietarios en Paraguay. Hoy es tu turno de construir tu patrimonio.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/terrenos">
                            <Button variant="primary" size="lg">Ver Terrenos Disponibles</Button>
                        </Link>
                        <Link href="/contacto">
                            <Button variant="outline" size="lg">Hablar con un Asesor</Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
