'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { constructionPlans } from '@/data';
import type { ConstructionPlan } from '@/types';
import { Button } from '@/components/Button';
import { LeadModal } from '@/components/LeadModal';
import { CheckCircle2, Hammer, Key, Clock } from 'lucide-react';

export default function ConstruccionPage() {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="bg-teko-navy text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/render-casa-moderna.jpg')] bg-cover bg-center opacity-20"></div>
                <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
                    <h1 className="text-5xl md:text-7xl font-serif font-black mb-6 tracking-tight">Tu casa propia, <br /><span className="text-teko-gold">sin burocracia</span></h1>
                    <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
                        Sistema Llave en Mano Premium. Desde el plano hasta la entrega de llaves, nosotros lideramos el proceso para que vos solo proyectes tu futuro.
                    </p>
                </div>
            </section>

            {/* Process Steps */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-serif font-bold text-teko-navy">Proceso Constructivo TEKO</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { icon: Hammer, title: "1. Arquitectura a Medida", text: "Personalizamos cada espacio con arquitectos de primer nivel." },
                            { icon: CheckCircle2, title: "2. Gestión Integral", text: "Nos ocupamos de todos los permisos y planos municipales." },
                            { icon: Clock, title: "3. Construcción Real", text: "Obra optimizada con reportes semanales de avance vía WhatsApp." },
                            { icon: Key, title: "4. Entrega de Llaves", text: "Tu hogar listo para habitar, con garantía de calidad TEKO." }
                        ].map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2 }}
                                className="text-center p-6"
                            >
                                <div className="w-16 h-16 mx-auto bg-white rounded-2xl shadow-md flex items-center justify-center text-teko-navy mb-6 transform rotate-3 hover:rotate-0 transition-all">
                                    <step.icon size={32} />
                                </div>
                                <h3 className="font-bold text-xl mb-3">{step.title}</h3>
                                <p className="text-slate-600 text-sm">{step.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Models */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {constructionPlans.map((plan: ConstructionPlan) => (
                            <div key={plan.id} className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100 flex flex-col">
                                <div className="h-64 relative">
                                    <img src={plan.image} alt={plan.name} className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                                        <h3 className="text-3xl font-serif font-bold text-white">{plan.name}</h3>
                                    </div>
                                </div>
                                <div className="p-8 flex-1 flex flex-col">
                                    <p className="text-slate-600 mb-8 flex-1">{plan.description}</p>

                                    <div className="space-y-3 mb-8">
                                        {plan.features.map((f: string, i: number) => (
                                            <div key={i} className="flex items-center gap-3">
                                                <CheckCircle2 size={16} className="text-teko-navy" />
                                                <span className="text-sm font-medium text-slate-700">{f}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                                        <div>
                                            <span className="block text-xs text-slate-400">Precio construcción</span>
                                            <span className="font-bold text-xl text-teko-navy">USD {plan.pricePerSqm} <span className="text-sm font-normal text-slate-400">/ m²</span></span>
                                        </div>
                                        <Button onClick={() => setModalOpen(true)}>Cotizar {plan.name}</Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <LeadModal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="Cotizar Construcción" source="Construction Page" />
        </div>
    );
}
