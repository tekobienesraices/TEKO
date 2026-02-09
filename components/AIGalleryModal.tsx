import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, ArrowRight, BrainCircuit, AlertCircle } from 'lucide-react';
import { Button } from './Button';

interface AIGalleryModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const aiDesigns = [
    { src: '/images/ai-designs/design-1.jpg', label: 'Residencia Alpha - Modernismo Tropical' },
    { src: '/images/ai-designs/design-2.png', label: 'Concepto Minimalista - Integración Paisajística' },
    { src: '/images/ai-designs/design-3.png', label: 'Lujo Contemporáneo - Espacios de Alta Gama' }
];

export const AIGalleryModal: React.FC<AIGalleryModalProps> = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-teko-navy/90 backdrop-blur-md"
                    />

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        className="relative w-full max-w-5xl bg-white rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-6 md:p-8 bg-slate-50 border-b flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-2xl bg-teko-gold/20 flex items-center justify-center text-teko-gold">
                                    <BrainCircuit size={28} />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-serif font-bold text-teko-navy">TEKO AI Vision™</h2>
                                    <p className="text-slate-500 text-sm">Conceptos arquitectónicos generados por IA para tu terreno</p>
                                </div>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-slate-200 rounded-full transition-colors text-slate-400 hover:text-teko-navy"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="flex-1 overflow-y-auto p-6 md:p-10">
                            <div className="max-w-3xl mb-12">
                                <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                                    Servicio Innovador 2026
                                </span>
                                <h3 className="text-3xl font-serif font-bold text-teko-navy mb-4">
                                    La forma más rápida de visualizar tu inversión.
                                </h3>
                                <p className="text-slate-600 text-lg leading-relaxed">
                                    En TEKO utilizamos inteligencia artificial de vanguardia para que no tengas que imaginar.
                                    <strong> Transformamos tus requerimientos en conceptos visuales realistas en etapa temprana</strong>,
                                    permitiéndote explorar estilos y volúmenes antes de que nuestros arquitectos inicien el proyecto ejecutivo.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {aiDesigns.map((design, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="group cursor-pointer"
                                    >
                                        <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-lg border border-slate-100 relative">
                                            <img
                                                src={design.src}
                                                alt={design.label}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-teko-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                            <div className="absolute bottom-4 left-4 right-4 translate-y-4 group-hover:translate-y-0 transition-transform">
                                                <p className="text-white font-medium text-sm">{design.label}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}

                                <div className="aspect-[4/5] rounded-2xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center p-8 text-center bg-slate-50/50">
                                    <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-teko-gold mb-4">
                                        <Sparkles size={20} />
                                    </div>
                                    <p className="text-slate-500 text-sm font-medium mb-4">
                                        ¿Querés ver cómo quedaría tu idea en uno de nuestros lotes?
                                    </p>
                                    <Button variant="gold" size="sm" fullWidth onClick={() => { onClose(); }}>
                                        Solicitar Mi Diseño IA
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="p-6 bg-teko-navy text-white flex flex-col md:flex-row items-center justify-between gap-4">
                            <div className="flex items-center gap-2 text-sm text-slate-300">
                                <AlertCircle size={16} className="text-teko-gold" />
                                <span>*Estos diseños son muestras conceptuales generadas por IA para inspiración inicial.</span>
                            </div>
                            <Button variant="secondary" onClick={onClose}>
                                Agendar con un Arquitecto
                                <ArrowRight size={18} className="ml-2" />
                            </Button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
