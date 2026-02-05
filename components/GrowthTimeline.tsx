import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, TrendingUp, Clock, Map } from 'lucide-react';
import { Button } from './Button';

const timelineData = [
    {
        year: '2010',
        image: '/growth/2010.jpg',
        title: 'El Inicio: Visión Temprana',
        desc: 'Un terreno raw (virgen), invisible para la mayoría. Solo los inversores con visión detectaron el potencial de la nueva infraestructura proyectada.',
        insight: 'El momento de mayor riesgo percibido, pero de retorno exponencial.'
    },
    {
        year: '2015',
        image: '/growth/2015.jpg',
        title: 'Desarrollo: La Primera Ola',
        desc: 'Apertura de caminos y llegada de los primeros servicios básicos. "Costa Salinas" comienza a sonar en el mercado.',
        stat: 'Valor del m²: $15 USD',
        insight: 'Quien compró en 2010 ya triplicó su capital en 5 años (300% ROI).'
    },
    {
        year: '2020',
        image: '/growth/2020.jpg',
        title: 'Consolidación: El Boom Demográfico',
        desc: 'La mancha urbana alcanza la zona. Construcción de casas quintas, comercios y aumento masivo de la demanda.',
        stat: 'Valor del m²: $35 USD',
        insight: 'La tierra se vuelve escasa. El mercado valida la zona como premium.'
    },
    {
        year: '2025',
        image: '/growth/2025.jpg',
        title: 'Actualidad: Zona Consolidada',
        desc: 'Hoy, Costa Salinas es una realidad tangible. Una zona vibrante con alta calidad de vida. Y esto recién empieza.',
        stat: 'Valor del m²: $55+ USD',
        insight: 'Tu oportunidad no es "haber comprado antes". Es entender que el ciclo se repite.'
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
                        Análisis de Plusvalía Real
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">
                        El Poder del <span className="text-teko-gold">Tiempo en Tierra</span>
                    </h2>
                    <p className="text-slate-300 text-lg leading-relaxed">
                        No te contamos historias, te mostramos datos. Así evolucionó Costa Salinas en los últimos 15 años.
                        <br className="hidden md:block" />
                        <strong className="text-white">Lo que para muchos era "solo pasto", para nuestros inversores fue su mejor negocio.</strong>
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
                                    src={currentData.image}
                                    alt={`Evolución Costa Salinas ${currentData.year}`}
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

                            {/* Year Stamp */}
                            <div className="absolute top-6 right-6">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentIndex}
                                        initial={{ y: -20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: 20, opacity: 0 }}
                                        className="bg-white/10 backdrop-blur-md border border-white/20 text-white font-black text-4xl px-6 py-2 rounded-xl"
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
                                    aria-label={`Ver año ${item.year}`}
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
                                    <span>Fase {currentIndex + 1} de 4</span>
                                </div>

                                <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                                    {currentData.title}
                                </h3>

                                <p className="text-slate-300 text-lg leading-relaxed mb-8 border-l-4 border-teko-gold/30 pl-6">
                                    {currentData.desc}
                                </p>

                                <div className="mt-8 mb-10">
                                    <div className="bg-teko-gold/10 rounded-xl p-6 border border-teko-gold/20">
                                        <p className="text-teko-gold text-sm mb-2 uppercase tracking-wider font-bold">Lección de Inversor</p>
                                        <p className="text-lg text-white/90 italic">"{currentData.insight}"</p>
                                    </div>
                                </div>

                                <Button variant="gold" size="lg" className="w-full sm:w-auto shadow-lg shadow-teko-gold/20 hover:shadow-teko-gold/40">
                                    Ver Oportunidades en Costa Salinas
                                </Button>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};
