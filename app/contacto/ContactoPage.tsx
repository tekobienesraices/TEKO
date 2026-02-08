'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/Button';

export default function ContactoPage() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, this would send data to a backend
        // For now, we'll open WhatsApp with the message
        const text = `Hola, soy ${formState.name}. Mi correo es ${formState.email}. ${formState.message}`;
        window.open(`https://wa.me/595974202163?text=${encodeURIComponent(text)}`, '_blank');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    const faqs = [
        {
            question: "¿Necesito estar en Informconf limpio para comprar?",
            answer: "No. En TEKO ofrecemos financiación propia. No miramos tu Informconf, solo validamos tu capacidad de pago real."
        },
        {
            question: "¿Cuáles son los requisitos mínimos?",
            answer: "Solo necesitás tu Cédula de Identidad y un comprobante de ingresos (certificado de trabajo, boleta de IPS o IVA)."
        },
        {
            question: "¿Puedo visitar los terrenos los fines de semana?",
            answer: "¡Sí! Realizamos visitas guiadas todos los sábados y domingos. Agendá tu visita al WhatsApp."
        },
        {
            question: "¿Cuándo me entregan el terreno?",
            answer: "La posesión es inmediata al firmar el contrato y realizar la entrega inicial. Podés empezar a usarlo desde el día 1."
        }
    ];

    return (
        <div className="pt-20 bg-slate-50 min-h-screen">
            {/* Hero Section */}
            <section className="bg-teko-navy text-white py-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-teko-gold/10 rounded-full blur-3xl -mr-48 -mt-48" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Estamos para Ayudarte</h1>
                        <p className="text-xl text-slate-300">
                            Tu futuro terreno está a una conversación de distancia. Contáctanos por el medio que prefieras.
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Contact Info & Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h2 className="text-3xl font-serif font-bold text-teko-navy mb-8">Envianos un Mensaje</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                            <a href="https://wa.me/595974202163" target="_blank" rel="noopener noreferrer"
                                className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all group">
                                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-colors">
                                    <MessageCircle size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500 font-medium">WhatsApp</p>
                                    <p className="text-teko-navy font-bold">+595 974 202 163</p>
                                </div>
                            </a>

                            <a href="mailto:tekobienesraices@gmail.com"
                                className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all group">
                                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500 font-medium">Email</p>
                                    <p className="text-teko-navy font-bold">tekobienesraices@gmail.com</p>
                                </div>
                            </a>
                        </div>

                        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                            <div className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Nombre Completo</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formState.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teko-gold focus:border-transparent transition-all"
                                        placeholder="Juan Pérez"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Teléfono</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            required
                                            value={formState.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teko-gold focus:border-transparent transition-all"
                                            placeholder="0981..."
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formState.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teko-gold focus:border-transparent transition-all"
                                            placeholder="juan@ejemplo.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Mensaje</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        required
                                        value={formState.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teko-gold focus:border-transparent transition-all"
                                        placeholder="Estoy interesado en..."
                                    ></textarea>
                                </div>

                                <Button fullWidth variant="primary" type="submit" className="flex items-center gap-2 justify-center">
                                    <Send size={18} />
                                    Enviar Mensaje
                                </Button>
                            </div>
                        </form>
                    </motion.div>

                    {/* Map & FAQ */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="space-y-8"
                    >
                        {/* Map */}
                        <div className="bg-white p-2 rounded-2xl shadow-sm border border-slate-100">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115426.505085798!2d-57.653696899999995!3d-25.2899479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945da7c8d968bca1%3A0xe5a9e3a6c2fc43d!2sAsunci%C3%B3n!5e0!3m2!1ses-419!2spy!4v1707240000000!5m2!1ses-419!2spy"
                                width="100%"
                                height="300"
                                style={{ border: 0, borderRadius: '1rem' }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Ubicación TEKO"
                            ></iframe>
                            <div className="p-4 flex items-start gap-4">
                                <MapPin className="text-teko-gold mt-1" size={20} />
                                <div>
                                    <h3 className="font-bold text-teko-navy">Oficina Central (Showroom)</h3>
                                    <p className="text-slate-600 text-sm">Av. Mariscal López esq. San Martín, Asunción</p>
                                    <p className="text-slate-500 text-xs mt-1">(Referencial para reuniones)</p>
                                </div>
                            </div>
                        </div>

                        {/* FAQ */}
                        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                            <div className="p-6 bg-teko-navy text-white">
                                <h3 className="font-serif font-bold text-xl">Preguntas Frecuentes</h3>
                            </div>
                            <div className="p-6 space-y-4">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="border-b border-slate-100 last:border-0 pb-4 last:pb-0">
                                        <h4 className="font-bold text-teko-navy mb-2 flex items-center gap-2">
                                            <span className="text-teko-gold">•</span> {faq.question}
                                        </h4>
                                        <p className="text-slate-600 text-sm pl-4">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
