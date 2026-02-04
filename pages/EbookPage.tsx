import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Download, ShieldCheck, BookOpen, Calculator, FileText, Loader2, CheckCircle } from 'lucide-react';
import { Button } from '../components/Button';

const benefits = [
    { icon: BookOpen, title: 'Conocé el terreno antes de pisarlo', desc: 'Qué verificar antes de visitar' },
    { icon: Calculator, title: 'Hacé los números como un inversor', desc: 'Calculá rentabilidad real' },
    { icon: FileText, title: 'Revisá todo lo legal', desc: 'Documentos que no pueden faltar' },
    { icon: ShieldCheck, title: 'Cerrá con confianza', desc: 'Evitá errores costosos' },
];

const problems = [
    'No saber qué papeles revisar',
    'No hacer los números reales',
    'Elegir por impulso',
    'Firmar sin entender el contrato',
];

interface FormData {
    nombre: string;
    email: string;
    telefono: string;
}

export const EbookPage: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({ nombre: '', email: '', telefono: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        try {
            // Send to Edge Function
            const response = await fetch(import.meta.env.VITE_SUPABASE_FUNCTION_URL || '/api/send-ebook', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    source: 'Ebook Landing Page',
                    timestamp: new Date().toISOString()
                })
            });

            if (!response.ok) throw new Error('Error al enviar');

            setIsSuccess(true);
            setFormData({ nombre: '', email: '', telefono: '' });
        } catch (err) {
            setError('Hubo un error. Por favor intentá de nuevo o contactanos por WhatsApp.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-b from-slate-50 to-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-block px-4 py-1 bg-teko-gold/10 text-teko-gold text-sm font-medium rounded-full mb-6">
                                Guía Gratuita
                            </span>
                            <h1 className="text-4xl md:text-5xl font-serif font-bold text-teko-navy mb-6 leading-tight">
                                Comprá con Claridad,<br />
                                <span className="text-teko-gold">Invertí con Seguridad</span>
                            </h1>
                            <p className="text-lg text-slate-600 mb-8">
                                Una decisión importante necesita claridad. Esta guía te muestra paso a paso cómo evaluar,
                                negociar y cerrar la compra de tu terreno sin cometer errores costosos.
                            </p>

                            <div className="space-y-3 mb-8">
                                {problems.map((problem, idx) => (
                                    <div key={idx} className="flex items-center gap-3 text-slate-600">
                                        <span className="w-6 h-6 rounded-full bg-red-100 text-red-500 flex items-center justify-center text-sm">✗</span>
                                        <span>{problem}</span>
                                    </div>
                                ))}
                            </div>

                            <p className="text-teko-navy font-medium">
                                Esta guía existe para que no te pase. 👇
                            </p>
                        </motion.div>

                        {/* Ebook Image + Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex flex-col items-center"
                        >
                            <img
                                src="/ebook-cover.png"
                                alt="Guía TEKO - Comprá con Claridad"
                                className="max-w-xs w-full drop-shadow-2xl mb-8"
                            />

                            {/* Form */}
                            {isSuccess ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center w-full max-w-md"
                                >
                                    <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                                    <h3 className="text-xl font-bold text-green-800 mb-2">¡Listo!</h3>
                                    <p className="text-green-700">
                                        Revisá tu correo. Tu guía está en camino.
                                    </p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 w-full max-w-md">
                                    <h3 className="font-bold text-teko-navy text-lg mb-4 text-center">
                                        Recibí la guía gratis
                                    </h3>

                                    <div className="space-y-4">
                                        <div>
                                            <input
                                                type="text"
                                                name="nombre"
                                                placeholder="Tu nombre"
                                                value={formData.nombre}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-teko-gold focus:ring-2 focus:ring-teko-gold/20 outline-none transition-all"
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Tu email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-teko-gold focus:ring-2 focus:ring-teko-gold/20 outline-none transition-all"
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="tel"
                                                name="telefono"
                                                placeholder="Tu teléfono"
                                                value={formData.telefono}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-teko-gold focus:ring-2 focus:ring-teko-gold/20 outline-none transition-all"
                                            />
                                        </div>
                                    </div>

                                    {error && (
                                        <p className="text-red-500 text-sm mt-3">{error}</p>
                                    )}

                                    <Button
                                        type="submit"
                                        variant="gold"
                                        fullWidth
                                        size="lg"
                                        className="mt-4"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            <><Loader2 size={20} className="animate-spin mr-2" /> Enviando...</>
                                        ) : (
                                            <><Download size={20} className="mr-2" /> Descargar Gratis</>
                                        )}
                                    </Button>

                                    <p className="text-xs text-slate-400 mt-4 text-center flex items-center justify-center gap-2">
                                        <ShieldCheck size={14} />
                                        Tus datos están protegidos
                                    </p>
                                </form>
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* What's Inside */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-serif font-bold text-teko-navy mb-4">
                            Qué encontrarás dentro
                        </h2>
                        <p className="text-slate-500 max-w-xl mx-auto">
                            Una guía práctica con todo lo que necesitás saber antes de comprar tu terreno.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {benefits.map((benefit, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100"
                            >
                                <div className="w-12 h-12 rounded-xl bg-teko-gold/10 flex items-center justify-center mb-4">
                                    <benefit.icon size={24} className="text-teko-gold" />
                                </div>
                                <h3 className="font-bold text-teko-navy mb-2">{benefit.title}</h3>
                                <p className="text-sm text-slate-500">{benefit.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Free */}
            <section className="py-20">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-serif font-bold text-teko-navy mb-6">
                        ¿Por qué es gratis?
                    </h2>
                    <p className="text-lg text-slate-600 mb-8">
                        Estamos en fase de lanzamiento de TEKO y queremos ayudar a la mayor cantidad de personas posible.
                        Por eso decidimos compartir esta guía de forma gratuita.
                    </p>
                    <p className="text-slate-500">
                        Muy pronto será exclusiva para clientes. <strong>Aprovechá ahora.</strong>
                    </p>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 bg-teko-navy text-white">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-serif font-bold text-center mb-12">
                        Preguntas Frecuentes
                    </h2>

                    <div className="space-y-6">
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                            <h3 className="font-bold text-lg mb-2">¿Es realmente gratis?</h3>
                            <p className="text-white/70">
                                Sí, 100% gratis. Solo necesitamos tu email para enviártela.
                            </p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                            <h3 className="font-bold text-lg mb-2">¿Cuánto tiempo tarda en llegar?</h3>
                            <p className="text-white/70">
                                Inmediatamente. Recibirás la guía en tu email en segundos.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
