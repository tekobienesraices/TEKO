import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, TrendingUp, Clock, BarChart3 } from 'lucide-react';
import Link from 'next/link';
import { Button } from './Button';

const timelineData = [
    {
        year: 'Fase 1',
        title: 'Lanzamiento: Oportunidad Cero',
        desc: 'Identificamos tierra virgen con alto potencial de expansión. El mercado aún no lo ve, pero nuestros indicadores urbanísticos señalan este momento como el punto de entrada óptimo.',
        insight: 'El inversor visionario compra potencial, no solo metros cuadrados. Aquí es donde se captura el mayor margen.'
    },
    {
        year: 'Fase 2',
        title: 'Desarrollo: El Motor de Valor',
        desc: 'Iniciamos obras de infraestructura y apertura de calles. La zona cobra vida y la demanda natural comienza a despertar. Tu inversión empieza a materializarse.',
        insight: 'La transformación física del terreno suele disparar la primera curva de plusvalía en el corto plazo.'
    },
    {
        year: 'Fase 3',
        title: 'Consolidación: Efecto Multiplicador',
        desc: 'Primeras construcciones y llegada de servicios. El entorno residencial se valida y el precio del m² se ajusta al mercado consolidado.',
        insight: 'La densidad poblacional y la actividad comercial cercana blindan el valor de tu tierra contra la inflación.'
    },
    {
        year: 'Fase 4',
        title: 'Madurez: Patrimonio Líquido',
        desc: 'Una comunidad vibrante y establecida. Tu lote ya no es una promesa, es un activo de alta demanda, listo para construir, vender o heredar.',
        insight: 'El ciclo se completa. Convertiste una visión temprana en un patrimonio sólido y transferible.'
    }
];

export const GrowthTimeline: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextStep = () => {
        setCurrentIndex((prev) => (prev === timelineData.length - 1 ? 0 : prev + 1));
    };

    const prevStep = () => {
        setCurrentIndex((prev) => (prev === 0 ? timelineData.length - 1 : prev - 1));
    };

    const currentData = timelineData[currentIndex];

    // Images for different phases (generic/conceptual)
    const getPhaseImage = (index: number) => {
        const images = [
            '/growth/2010.jpg', // Keep existing path but treat as generic
            '/growth/2015.jpg',
            '/growth-2020.jpg',
            '/growth/2025.jpg'
        ];
        return images[index] || images[0];
    };

    return (
        <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-teko-gold rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-teko-navy rounded-full blur-[150px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teko-gold/20 text-teko-gold font-bold text-sm uppercase tracking-wider mb-6"
                    >
                        <TrendingUp size={16} />
                        Modelo de Plusvalía
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">
                        El Ciclo de Valor <span className="text-teko-gold">de tu Inversión</span>
                    </h2>
                    <p className="text-slate-300 text-lg leading-relaxed">
                        En TEKO no vendemos "lotes", vendemos un modelo de crecimiento patrimonial.
                        Entendemos los ciclos del mercado para que vos entres en el momento justo.
                        <br className="hidden md:block" />
                        <strong className="text-white">Así es como tu dinero crece con nosotros paso a paso.</strong>
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Image Viewer */}
                    <div className="relative group">
                        <div className="absolute inset-0 bg-teko-gold/10 rounded-3xl transform rotate-3 scale-105 blur-xl transition-all duration-500 group-hover:bg-teko-gold/20" />
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-[4/3]">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={currentIndex}
                                    src={getPhaseImage(currentIndex)}
                                    alt={`Fase ${currentIndex + 1}: ${currentData.title}`}
                                    initial={{ opacity: 0, scale: 1.1 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="w-full h-full object-cover"
                                />
                            </AnimatePresence>

                            {/* Overlay Controls */}
                            <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button
                                    onClick={prevStep}
                                    className="p-3 rounded-full bg-black/50 hover:bg-teko-gold text-white backdrop-blur-md transition-all transform hover:scale-110"
                                >
                                    <ChevronLeft size={24} />
                                </button>
                                <button
                                    onClick={nextStep}
                                    className="p-3 rounded-full bg-black/50 hover:bg-teko-gold text-white backdrop-blur-md transition-all transform hover:scale-110"
                                >
                                    <ChevronRight size={24} />
                                </button>
                            </div>

                            {/* Phase Badge */}
                            <div className="absolute top-6 right-6">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentIndex}
                                        initial={{ y: -20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: 20, opacity: 0 }}
                                        className="bg-white/10 backdrop-blur-md border border-white/20 text-white font-black text-xl md:text-2xl px-6 py-2 rounded-xl"
                                    >
                                        {currentData.year}
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Timeline thumbnails */}
                        <div className="flex justify-center gap-3 mt-6">
                            {timelineData.map((item, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentIndex(idx)}
                                    className={`w-16 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-teko-gold w-24' : 'bg-white/20 hover:bg-white/40'
                                        }`}
                                    aria-label={`Ver ${item.year}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Evolution Info */}
                    <div className="lg:pl-8">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4 }}
                            >
                                <div className="flex items-center gap-3 text-teko-gold font-bold mb-4">
                                    <Clock size={20} />
                                    <span>Evolución: Paso {currentIndex + 1}</span>
                                </div>

                                <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                                    {currentData.title}
                                </h3>

                                <p className="text-slate-300 text-lg leading-relaxed mb-8 border-l-4 border-teko-gold/30 pl-6">
                                    {currentData.desc}
                                </p>

                                <div className="mt-8 mb-10">
                                    <div className="bg-teko-gold/10 rounded-xl p-6 border border-teko-gold/20">
                                        <div className="flex items-center gap-2 text-teko-gold mb-2">
                                            <BarChart3 size={18} />
                                            <p className="text-sm uppercase tracking-wider font-bold">Visión de Mercado</p>
                                        </div>
                                        <p className="text-lg text-white/90 italic">"{currentData.insight}"</p>
                                    </div>
                                </div>

                                <Link href="/terrenos">
                                    <Button variant="gold" size="lg" className="w-full sm:w-auto shadow-lg shadow-teko-gold/20 hover:shadow-teko-gold/40">
                                        Ver Proyectos en Fase 1
                                    </Button>
                                </Link>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

