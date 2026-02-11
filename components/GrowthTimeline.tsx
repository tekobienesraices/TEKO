import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, TrendingUp, Clock, BarChart3 } from 'lucide-react';
import Link from 'next/link';
import { Button } from './Button';

const timelineData = [
    {
        year: '2010',
        title: 'Comprar Antes que Todos',
        desc: 'El secreto de los grandes inversores es simple: llegan primero. En 2010, Costa Salinas era una zona donde la ciudad "estaba por llegar". Identificar el potencial en este punto permitió asegurar el precio más bajo posible, garantizando una ganancia desde el día uno.',
        insight: 'Comprar barato cuando la zona es apenas una proyección es el paso más rentable de cualquier inversión.'
    },
    {
        year: '2015',
        title: 'El Despertar de la Zona',
        desc: 'Para 2015, Costa Salinas empezó a recibir los primeros servicios y caminos trazados. Es el momento donde el terreno deja de ser campo y se convierte en ciudad. Aquí es donde el valor de la tierra empieza a multiplicarse orgánicamente con cada nueva mejora.',
        insight: 'Cada nuevo poste de luz y cada calle abierta en el barrio suma valor inmediato a la inversión inicial.'
    },
    {
        year: '2020',
        title: 'Todos Quieren Vivir Aquí',
        desc: 'En 2020, la zona se llenó de vida con familias y comercios instalados. La demanda en Capiatá explotó y, como los terrenos disponibles se volvieron escasos, el valor en Costa Salinas se disparó. Es la ley de oferta y demanda trabajando a tu favor.',
        insight: 'Al ser dueño de un bien deseado en un barrio ya consolidado, tu visión temprana dio sus frutos.'
    },
    {
        year: '2025',
        title: 'Patrimonio Consolidado',
        desc: 'Hoy, Costa Salinas representa un activo seguro y de alto valor. Con un entorno totalmente urbanizado y títulos listos, el ciclo de valorización se completa. Quien compró antes hoy tiene un patrimonio sólido y heredable para su familia.',
        insight: 'Costa Salinas demuestra que quien tiene la tierra antes que el asfalto, siempre gana.'
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
            '/growth/2020.jpg',
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
                        El Secreto de la Plusvalía
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">
                        ¿Cómo tu terreno <span className="text-teko-gold">gana valor solo?</span>
                    </h2>
                    <p className="text-slate-300 text-lg leading-relaxed">
                        No hace falta ser economista para entenderlo. La ciudad crece hacia afuera, y quien tiene la tierra antes de que llegue el asfalto, gana.
                        <br className="hidden md:block" />
                        <strong className="text-white">Así creció Costa Salinas, Capiatá — y así crece tu inversión:</strong>
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
                                    alt={`Evolución ${currentData.year}: ${currentData.title}`}
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
                                    <span>Costa Salinas · {currentData.year}</span>
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
                                            <p className="text-sm uppercase tracking-wider font-bold">Dato Clave</p>
                                        </div>
                                        <p className="text-lg text-white/90 italic">"{currentData.insight}"</p>
                                    </div>
                                </div>

                                <Link href="/terrenos">
                                    <Button variant="gold" size="lg" className="w-full sm:w-auto shadow-lg shadow-teko-gold/20 hover:shadow-teko-gold/40">
                                        Ver Lotes Disponibles
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

