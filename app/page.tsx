'use client';

import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, TrendingUp, Home as HomeIcon, Map, Download, Check } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/Button';
import { LeadModal } from '@/components/LeadModal';
import { SocialBanner } from '@/components/SocialBanner';
import { GrowthTimeline } from '@/components/GrowthTimeline';
import { AIGalleryModal } from '@/components/AIGalleryModal';
import { Sparkles } from 'lucide-react';
import { properties, testimonials } from '@/data';

export default function HomePage() {
    const [modalOpen, setModalOpen] = useState(false);
    const [galleryOpen, setGalleryOpen] = useState(false);
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
                {/* Parallax Background */}
                <motion.div
                    style={{ y: y1 }}
                    className="absolute inset-0 z-0"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-teko-navy/40 via-teko-navy/20 to-slate-50 z-10" />
                    <img
                        src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2560&auto=format&fit=crop"
                        alt="Venta de terrenos en cuotas en Capiatá Paraguay - Vista Aérea"
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                {/* Content */}
                <motion.div
                    style={{ opacity }}
                    className="relative z-20 text-center max-w-4xl px-4 mt-20"
                >
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-medium uppercase tracking-widest mb-6"
                    >
                        Bienes Raíces Premium
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight mb-6"
                    >
                        Tu terreno propio, <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">tu legado en Paraguay</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="text-xl md:text-2xl text-teko-gold mb-4 italic font-medium"
                    >
                        "Tu futuro tiene raíces, empezá a sembrarlo hoy"
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-medium"
                    >
                        Dejá de alquilar y empezá a invertir en tu futuro. Accedé hoy a terrenos titulados en las zonas de mayor crecimiento de Paraguay.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
                    >
                        <Link href="/terrenos" className="w-full sm:w-auto">
                            <Button variant="gold" size="lg" className="w-full shadow-xl shadow-teko-gold/20 hover:shadow-teko-gold/40 transition-shadow py-6 md:py-4">
                                Ver Lotes Disponibles
                            </Button>
                        </Link>
                        <Link href="/guia" className="w-full sm:w-auto">
                            <Button variant="outline" size="lg" className="w-full bg-white/20 backdrop-blur-lg border-white/60 text-white hover:bg-white hover:text-teko-navy font-bold py-6 md:py-4">
                                <Download className="mr-2 h-5 w-5" />
                                Bajá tu guía gratuita
                            </Button>
                        </Link>
                    </motion.div>
                </motion.div>
            </section>

            {/* Quick Actions / Value Proposition */}
            <section className="relative z-30 -mt-20 px-4 pb-20">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { icon: Map, title: "Lotes Listos para Transferir", desc: "Seguridad jurídica total. Tu terreno en Cordillera y Central con título inmediato.", link: "/terrenos" },
                        { icon: HomeIcon, title: "Financiación a Medida", desc: "Propia sin bancos (24hs) o vía Carta de Oferta para tu banco de preferencia.", link: "/calculadora" },
                        { icon: TrendingUp, title: "Inversión Inteligente", desc: "Hacé crecer tu capital en guaraníes con tierra, el activo más seguro.", link: "/blog" }
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <Link href={item.link} className="block group">
                                <div className="glass p-8 rounded-2xl border border-white/50 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full">
                                    <div className="w-12 h-12 bg-teko-navy/5 rounded-xl flex items-center justify-center text-teko-navy mb-6 group-hover:bg-teko-navy group-hover:text-white transition-colors">
                                        <item.icon size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-teko-navy mb-3">{item.title}</h3>
                                    <p className="text-slate-600 mb-6">{item.desc}</p>
                                    <span className="text-sm font-semibold text-teko-navy flex items-center gap-2 group-hover:gap-3 transition-all">
                                        Explorar <ArrowRight size={16} />
                                    </span>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Growth Timeline - Costa Salinas Case Study */}
            <GrowthTimeline />

            {/* Featured Properties */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <span className="text-teko-navy/60 font-semibold uppercase tracking-wider text-sm">Oportunidades</span>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-teko-navy mt-2">Terrenos Destacados</h2>
                        </div>
                        <Link href="/terrenos" className="hidden md:flex items-center gap-2 text-teko-navy font-medium hover:opacity-70 transition-opacity">
                            Ver todo el catálogo <ArrowRight size={20} />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {properties.slice(0, 3).map((prop) => (
                            <motion.div
                                key={prop.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100"
                            >
                                <div className="aspect-[4/3] overflow-hidden">
                                    <img
                                        src={prop.image}
                                        alt={prop.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-teko-navy uppercase">
                                        {prop.status === 'reserved' ? 'Reservado' : 'Disponible'}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-teko-navy mb-2">{prop.title}</h3>
                                    <p className="text-slate-500 text-sm mb-4">{prop.location}</p>
                                    <div className="flex justify-between items-center border-t border-slate-100 pt-4">
                                        <div>
                                            <span className="block text-xs text-slate-400">Inversión Final</span>
                                            {prop.originalPrice && (
                                                <span className="block text-[10px] text-slate-400 line-through">Gs. {prop.originalPrice.toLocaleString()}</span>
                                            )}
                                            <span className="font-bold text-lg text-teko-navy">Gs. {prop.price.toLocaleString()}</span>
                                        </div>
                                        <div className="text-right">
                                            <span className="block text-xs text-slate-400">Entrega Mínima</span>
                                            <span className="font-bold text-lg text-teko-gold">20%</span>
                                        </div>
                                    </div>
                                    <Link href={`/propiedad/${prop.id}`}>
                                        <Button fullWidth variant="outline" className="mt-6 group-hover:bg-teko-navy group-hover:text-white">Ver Detalle</Button>
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-10 text-center md:hidden">
                        <Link href="/terrenos">
                            <Button variant="outline" fullWidth>Ver todo el catálogo</Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Authority / Why TEKO */}
            <section className="py-24 bg-teko-navy text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Más que un terreno,<br />construimos tu legado.</h2>
                            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                                En TEKO no solo te entregamos tierra; te ofrecemos la solución integral para materializar tus sueños. Contamos con un equipo de élite formado por <strong>arquitectos e ingenieros de alto nivel</strong>, listos para diseñar y ejecutar el proyecto que siempre imaginaste. Ya sea una residencia de lujo o una inversión estratégica, nos encargamos de que tu visión se convierta en una realidad arquitectónica de primer nivel.
                            </p>

                            <ul className="space-y-6">
                                {[
                                    "Arquitectura de Élite: Equipo de ingenieros y arquitectos para diseñar el proyecto de tu vida.",
                                    "Visión Integral: Te asesoramos desde la elección del lote hasta la entrega de llaves (Llave en Mano).",
                                    "Financiación del Terreno: Crédito propio a sola firma hasta 72 meses para tu inversión en tierra.",
                                    "Solución Bancaria: Facilitamos Cartas de Oferta para créditos que unifiquen terreno y construcción."
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4">
                                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-teko-gold">
                                            <TrendingUp size={16} />
                                        </div>
                                        <span className="text-lg text-slate-200">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-10 flex flex-col sm:flex-row gap-4">
                                <Button variant="secondary" onClick={() => setModalOpen(true)}>Hablar con un Director</Button>
                                <Button
                                    variant="outline"
                                    className="border-teko-gold text-teko-gold hover:bg-teko-gold hover:text-teko-navy"
                                    onClick={() => setGalleryOpen(true)}
                                >
                                    <Sparkles size={18} className="mr-2" />
                                    Explorar Diseños IA
                                </Button>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-20 blur-xl"></div>
                            <img
                                src="/images/render-casa-moderna.jpg"
                                alt="Futuro Hogar TEKO"
                                className="relative rounded-2xl shadow-2xl border border-white/10"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Slogan Brand Section */}
            <section className="py-24 bg-[#0a1420] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-teko-gold rounded-full blur-[120px] -ml-48 -mt-48" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-[120px] -mr-48 -mb-48" />
                </div>

                <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="space-y-8"
                    >
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight max-w-4xl mx-auto">
                            "Tu futuro tiene raíces, <br />
                            <span className="text-teko-gold">empezá a sembrarlo hoy"</span>
                        </h2>
                        <div className="w-24 h-1 bg-teko-gold mx-auto rounded-full" />
                        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">
                            En TEKO, entendemos que un terreno es más que tierra; es el cimiento de tu legado y la seguridad de tu familia.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Value Guarantees (Formerly Testimonials) */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-serif font-bold text-center text-teko-navy mb-16">Garantías de Valor</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((t, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="bg-white p-8 rounded-xl shadow-sm border border-slate-100"
                            >
                                <div className="w-12 h-12 bg-teko-gold/10 rounded-full flex items-center justify-center text-teko-gold mb-6">
                                    <Check size={24} />
                                </div>
                                <p className="text-slate-600 italic mb-6">"{t.text}"</p>
                                <div>
                                    <h4 className="font-bold text-teko-navy">{t.name}</h4>
                                    <span className="text-xs text-slate-400 uppercase tracking-wide">{t.role}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section for GEO (Generative Engine Optimization) */}
            <section className="py-20 bg-white border-t border-slate-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-teko-navy mb-4">Preguntas Frecuentes</h2>
                        <p className="text-slate-500">Todo lo que necesitás saber para invertir con seguridad en TEKO.</p>
                    </div>

                    <div className="space-y-6">
                        {[
                            {
                                a: "Simplificamos todo. Solo necesitás tu Cédula de Identidad y un comprobante de ingreso. En TEKO no importa si estás en Informconf para nuestra financiación propia, y también emitimos cartas de oferta para créditos bancarios (AFD/otros)."
                            },
                            {
                                q: "¿Ofrecen financiación?",
                                a: "Podés financiar tu terreno hasta en 72 meses. Además, si elegís cancelar tu lote en 12 meses, el plan es totalmente sin intereses."
                            },
                            {
                                q: "¿Dónde están ubicados los terrenos?",
                                a: "Actualmente disponemos de ubicaciones estratégicas y de alta plusvalía exclusivamente en la ciudad de Capiatá."
                            },
                            {
                                q: "¿Tienen oficina física?",
                                a: "Operamos con un modelo 100% digital para reducir costos y trasladar ese ahorro al precio final de tu lote. Coordinamos visitas guiadas presenciales a todos los terrenos cuando lo desees."
                            }
                        ].map((faq, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-slate-50 rounded-2xl p-6 md:p-8 hover:bg-slate-100 transition-colors"
                                itemScope
                                itemProp="mainEntity"
                                itemType="https://schema.org/Question"
                            >
                                <h3 className="text-lg font-bold text-teko-navy mb-3 flex items-start gap-3" itemProp="name">
                                    <span className="text-teko-gold text-xl">Q.</span> {faq.q}
                                </h3>
                                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                                    <p className="text-slate-600 pl-8 leading-relaxed" itemProp="text">{faq.a}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Ebook Lead Magnet */}
            <section className="py-20 bg-gradient-to-br from-teko-navy to-slate-800 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-teko-gold/20 rounded-full blur-3xl -mr-48 -mt-48" />
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        {/* Valid for Mobile & Desktop: Text content logic */}
                        <div className="order-1 lg:order-1 text-center lg:text-left">
                            <span className="inline-block px-4 py-1 bg-teko-gold/20 text-teko-gold text-sm font-medium rounded-full mb-4">
                                Recurso Gratuito
                            </span>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                                Comprá con Claridad,<br />Invertí con Seguridad
                            </h2>
                            <p className="text-slate-300 mb-6 mx-auto lg:mx-0 max-w-md lg:max-w-none">
                                Bajá gratis nuestra guía con los secretos para no equivocarte al comprar tu lote.
                                Sin letras chicas, directo al punto.
                            </p>

                            {/* Desktop Button - Hidden on Mobile */}
                            <div className="hidden lg:block">
                                <Link href="/guia">
                                    <Button variant="gold" size="lg">
                                        <Download size={20} className="mr-2" />
                                        Descargar Guía Gratis
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        {/* Image & Mobile Button */}
                        <div className="flex flex-col items-center order-2 lg:order-2">
                            <img
                                src="/ebook-cover.png"
                                alt="Guía TEKO"
                                className="max-w-[250px] drop-shadow-2xl mb-8 lg:mb-0"
                            />

                            {/* Mobile Button - Visible only on Mobile */}
                            <div className="lg:hidden w-full max-w-[250px]">
                                <Link href="/guia">
                                    <Button variant="gold" size="lg" fullWidth>
                                        <Download size={20} className="mr-2" />
                                        Descargar Guía Gratis
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Media Banner */}
            <SocialBanner />

            {/* CTA Bottom */}
            <section className="py-20 bg-white border-t border-slate-100">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-serif font-bold text-teko-navy mb-6">¿Listo para dar el primer paso?</h2>
                    <p className="text-slate-600 mb-10 text-lg">
                        La mejor inversión es la tierra. El mejor momento es ahora.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button size="lg" onClick={() => setModalOpen(true)}>Agendar Asesoría Gratuita</Button>
                        <Link href="/calculadora">
                            <Button size="lg" variant="outline">Simular Financiación</Button>
                        </Link>
                    </div>
                </div>
            </section>

            <LeadModal isOpen={modalOpen} onClose={() => setModalOpen(false)} source="Home Bottom CTA" />
            <AIGalleryModal isOpen={galleryOpen} onClose={() => setGalleryOpen(false)} />
        </div>
    );
}
