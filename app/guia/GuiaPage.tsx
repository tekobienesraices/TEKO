'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Check, ArrowRight, Shield, BookOpen, Target, Loader2, CheckCircle, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/Button';

// Google Apps Script Web App URL
const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || '';

export default function GuiaPage() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        try {
            // Send lead data to Google Apps Script (non-blocking for download)
            fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name,
                    email,
                    phone,
                    interest: 'Guía Inversión',
                    source: 'Ebook Landing Page',
                    timestamp: new Date().toISOString()
                }),
                mode: 'no-cors' // Google Apps Script requires no-cors
            }).catch(console.error); // Log error but don't block download

            // Small delay to feel robust
            await new Promise(resolve => setTimeout(resolve, 800));

            setSubmitted(true);

            // Auto-download the PDF
            setTimeout(() => {
                const link = document.createElement('a');
                link.href = '/guia-teko.pdf';
                link.download = 'Guia-TEKO-Inverti-con-Claridad.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }, 1000);
        } catch (err) {
            // Even if backend fails, let them download
            setSubmitted(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    const benefits = [
        { icon: Shield, title: 'Blindaje Legal', desc: 'Descubre los 3 documentos críticos que la mayoría olvida pedir y que garantizan que tu terreno no tenga dueños ocultos.' },
        { icon: Target, title: 'Ceros en tu Cuenta', desc: 'Revelamos los 4 "gastos invisibles" que disparan el precio final si no los calculas desde el primer día.' },
        { icon: BookOpen, title: 'Ojo de Inversor', desc: 'Lo que las fotos nunca muestran: El checklist profesional para detectar terrenos con problemas de inundación o barrancos.' },
    ];

    const chapters = [
        'El error #1 al elegir zona: Por qué lo más barato hoy puede ser impagable mañana.',
        'Presupuesto Pro: Cómo hacer los números para que tu inversión crezca mes a mes.',
        'La trampa de las fotos: Qué observar físicamente para no comprar un problema.',
        'Auditoría Legal: Los papeles reales que aseguran tu patrimonio (y cómo verificarlos).',
        'Contratos sin Trucos: 5 cláusulas que debes exigir antes de entregar un solo guaraní.',
        'El día después: Pasos críticos para blindar tu propiedad ante Registros Públicos.',
    ];

    return (
        <div className="pt-24 min-h-screen bg-gradient-to-b from-slate-50 to-white">
            {/* Hero */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <span className="inline-block px-4 py-1 bg-teko-gold/10 text-teko-gold text-sm font-bold rounded-full mb-4">
                            Recurso Gratuito
                        </span>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-teko-navy mb-6 leading-tight">
                            Lo que la mayoría <span className="text-teko-gold">no te cuenta</span> antes de comprar un terreno
                        </h1>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed font-medium">
                            No pongas en riesgo tus ahorros. Hemos analizado a fondo el mercado inmobiliario en Paraguay para que sepas exactamente qué preguntar, qué mirar y qué firmar.
                        </p>

                        <div className="space-y-4 mb-8">
                            {benefits.map((b, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-start gap-4"
                                >
                                    <div className="w-12 h-12 bg-teko-navy/5 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <b.icon size={24} className="text-teko-navy" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-teko-navy">{b.title}</h3>
                                        <p className="text-slate-500 text-sm">{b.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Form Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white rounded-3xl shadow-2xl p-8 border border-slate-100"
                    >
                        <div className="text-center mb-8">
                            <img
                                src="/ebook-cover.png"
                                alt="Guía TEKO"
                                className="max-w-[180px] mx-auto drop-shadow-lg mb-6"
                            />
                            <h2 className="text-2xl font-bold text-teko-navy">Acceso Instantáneo</h2>
                            <p className="text-slate-500 text-sm mt-2">Recibe la guía ahora y blinda tu inversión.</p>
                        </div>

                        {!submitted ? (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                                        Tu Nombre
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teko-gold focus:border-transparent transition-all"
                                        placeholder="Juan Pérez"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                                        Tu Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teko-gold focus:border-transparent transition-all"
                                        placeholder="juan@ejemplo.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                                        Tu WhatsApp
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        required
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teko-gold focus:border-transparent transition-all"
                                        placeholder="0981234567"
                                    />
                                </div>
                                {error && (
                                    <p className="text-red-500 text-sm">{error}</p>
                                )}
                                <Button fullWidth variant="gold" size="lg" type="submit" disabled={isSubmitting}>
                                    {isSubmitting ? (
                                        <><Loader2 size={20} className="animate-spin mr-2" /> Preparando tu guía...</>
                                    ) : (
                                        <><Download size={20} className="mr-2" /> Descargar Ahora</>
                                    )}
                                </Button>
                                <p className="text-xs text-center text-slate-400 mt-4 flex items-center justify-center gap-2">
                                    <ShieldCheck size={14} />
                                    Tus datos están protegidos. Al descargar, aceptás recibir comunicaciones de TEKO.
                                </p>
                            </form>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-8"
                            >
                                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle size={32} />
                                </div>
                                <h3 className="text-2xl font-serif font-bold text-teko-navy mb-2">¡Felicitaciones!</h3>
                                <p className="text-slate-500 mb-6">
                                    Tu guía se descargará automáticamente. Si no comienza, hacé clic abajo:
                                </p>
                                <a
                                    href="/guia-teko.pdf"
                                    download="Guia-TEKO-Inverti-con-Claridad.pdf"
                                    className="block w-full mb-6"
                                >
                                    <Button variant="gold" fullWidth size="lg" className="animate-pulse hover:animate-none">
                                        <Download size={20} className="mr-2" />
                                        Descargar PDF Ahora
                                    </Button>
                                </a>
                                <Link href="/terrenos">
                                    <Button variant="outline">
                                        Ver Terrenos Disponibles
                                        <ArrowRight size={18} className="ml-2" />
                                    </Button>
                                </Link>
                            </motion.div>
                        )}
                    </motion.div>
                </div>
            </section>

            {/* Chapter Preview */}
            <section className="py-20 bg-teko-navy text-white">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-serif font-bold mb-4">Secretos de un Inversor Inteligente</h2>
                        <p className="text-slate-300">Un vistazo rápido a las claves que encontrarás dentro:</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {chapters.map((chapter, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="flex items-start gap-4 bg-white/5 p-4 rounded-xl border border-white/10"
                            >
                                <div className="w-8 h-8 bg-teko-gold text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                                    {idx + 1}
                                </div>
                                <span className="text-slate-200">{chapter}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-3xl font-serif font-bold text-teko-navy mb-4">
                        ¿Listo para dar el primer paso?
                    </h2>
                    <p className="text-slate-500 mb-8">
                        Mientras estudiás la guía, explorá nuestros terrenos disponibles.
                    </p>
                    <Link href="/terrenos">
                        <Button variant="primary" size="lg">
                            Ver Terrenos
                            <ArrowRight size={18} className="ml-2" />
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
