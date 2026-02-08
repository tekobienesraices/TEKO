'use client';

import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, ChevronDown, ChevronUp, TrendingDown, ThumbsUp } from 'lucide-react';
import { Button } from '@/components/Button';
import { PRICE_RANGE, FINANCING_CONFIG } from '@/data';

// ===========================================
// CONFIGURACIÓN COMERCIAL
// ===========================================
const INTEREST_CONFIG = {
    zeroInterestMonths: 12,
    annualRate: 0.156,
};

const MapPinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
);

export default function CalculadoraPage() {
    const searchParams = useSearchParams();
    const initialPrice = Number(searchParams.get('price')) || PRICE_RANGE.default;

    // Estado
    const [price, setPrice] = useState(initialPrice);
    const [downPaymentPct, setDownPaymentPct] = useState(FINANCING_CONFIG.minDownPaymentPercent); // Default 20%
    const [useReinforcement, setUseReinforcement] = useState(false);
    const [reinforcementPct, setReinforcementPct] = useState(20); // Min 20% by rules
    const [reinforcementPayments, setReinforcementPayments] = useState(FINANCING_CONFIG.defaultReinforcementPayments);
    const [months, setMonths] = useState(60);
    const [showDetails, setShowDetails] = useState(false);

    // Cálculos Comerciales
    const calculations = useMemo(() => {
        // 1. Entrega
        const entrega = Math.round(price * downPaymentPct / 100);

        // 2. Capital Base
        const capitalBase = price - entrega;

        // 3. Refuerzos (Reducen el capital financiables si aplica)
        const refuerzoTotal = useReinforcement ? Math.round(price * reinforcementPct / 100) : 0;
        const refuerzoPorPago = useReinforcement ? Math.round(refuerzoTotal / reinforcementPayments) : 0;

        // 4. Capital a Financiar (Sobre el cual se calcula interés)
        const capitalFinanciado = capitalBase - refuerzoTotal;

        // 5. Interés Simple (Si plazo > 12)
        let interesTotal = 0;
        const hasInterest = months > INTEREST_CONFIG.zeroInterestMonths;
        if (hasInterest) {
            const años = months / 12;
            interesTotal = Math.round(capitalFinanciado * INTEREST_CONFIG.annualRate * años);
        }

        // 6. Total a financiar en cuotas
        const totalFinanciado = capitalFinanciado + interesTotal;

        // 7. Cuota Mensual
        const cuotaSinRedondear = totalFinanciado / months;
        const cuotaMensual = Math.ceil(cuotaSinRedondear / 10000) * 10000;

        return {
            entrega,
            capitalBase,
            refuerzoTotal,
            refuerzoPorPago,
            capitalFinanciado,
            interesTotal,
            cuotaMensual,
            totalPagar: entrega + refuerzoTotal + totalFinanciado
        };
    }, [price, downPaymentPct, useReinforcement, reinforcementPct, reinforcementPayments, months]);

    // Lógica de "Asesor Virtual"
    const recommendation = useMemo(() => {
        // Si la cuota > 2.5M y no usa refuerzos -> Sugerir refuerzos
        if (calculations.cuotaMensual > 2500000 && !useReinforcement) {
            return {
                type: 'tip',
                icon: <TrendingDown size={18} />,
                text: "💡 Tip de Ahorro: Activá los 'Refuerzos' para bajar tu cuota mensual significativamente."
            };
        }
        // Si usa refuerzos y plazo largo -> Plan Recomendado
        if (useReinforcement && months >= 60) {
            return {
                type: 'success',
                icon: <ThumbsUp size={18} />,
                text: "✨ ¡Excelente elección! Este plan balancea una cuota baja con un plazo cómodo."
            };
        }
        return null;
    }, [calculations.cuotaMensual, useReinforcement, months]);

    const formatCurrency = (val: number) => `Gs. ${val.toLocaleString()}`;

    const generateWhatsAppMessage = () => {
        const msg = `*Hola TEKO, me interesa este Plan de Pago:*\n\n` +
            `📍 *Terreno:* ${formatCurrency(price)}\n` +
            `💰 *Entrega:* ${formatCurrency(calculations.entrega)}\n` +
            `🗓️ *Plazo:* ${months} meses\n` +
            `💵 *Cuota Mensual:* ${formatCurrency(calculations.cuotaMensual)}\n` +
            `${useReinforcement ? `📉 *Refuerzos:* ${reinforcementPayments} pagos de ${formatCurrency(calculations.refuerzoPorPago)}\n` : ''}` +
            `\nQuiero confirmar disponibilidad.`;
        return encodeURIComponent(msg);
    };

    return (
        <div className="pt-24 min-h-screen bg-slate-50">
            <div className="max-w-4xl mx-auto px-4 py-8">

                {/* Header Friendly */}
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-serif font-bold text-teko-navy mb-2">Simulá tu Inversión</h1>
                    <p className="text-slate-500">Ajustá los valores para encontrar la cuota que mejor te quede.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

                    {/* Panel de Configuración (Izquierda) */}
                    <div className="lg:col-span-7 space-y-6">

                        {/* 1. Precio */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                            <label className="flex justify-between text-sm font-medium text-slate-700 mb-4">
                                <span className="flex items-center gap-2"><MapPinIcon /> Valor del Terreno</span>
                                <span className="text-lg font-bold text-teko-navy">{formatCurrency(price)}</span>
                            </label>
                            <input
                                type="range" min={PRICE_RANGE.min} max={PRICE_RANGE.max} step={PRICE_RANGE.step}
                                value={price} onChange={e => setPrice(Number(e.target.value))}
                                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teko-navy"
                            />
                        </div>

                        {/* 2. Entrega */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                            <label className="flex justify-between text-sm font-medium text-slate-700 mb-4">
                                <span>Entrega Inicial ({downPaymentPct}%)</span>
                                <span className="text-lg font-bold text-green-600">{formatCurrency(calculations.entrega)}</span>
                            </label>
                            <input
                                type="range" min="20" max="50" step="5"
                                value={downPaymentPct} onChange={e => setDownPaymentPct(Number(e.target.value))}
                                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-green-600"
                            />
                        </div>

                        {/* 3. Refuerzos (Opcional) */}
                        <div className={`p-6 rounded-2xl border transition-all ${useReinforcement ? 'bg-white border-teko-gold/50 ring-1 ring-teko-gold/20' : 'bg-white border-slate-100'}`}>
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${useReinforcement ? 'bg-teko-gold text-white' : 'bg-slate-100 text-slate-400'}`}>
                                        <TrendingDown size={20} />
                                    </div>
                                    <div>
                                        <span className="block font-medium text-slate-700">Refuerzos Anuales</span>
                                        <span className="text-xs text-slate-500">Pagos extra para bajar tu cuota</span>
                                    </div>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" className="sr-only peer" checked={useReinforcement} onChange={() => setUseReinforcement(!useReinforcement)} />
                                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teko-gold"></div>
                                </label>
                            </div>

                            <AnimatePresence>
                                {useReinforcement && (
                                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden pt-2 border-t border-slate-100 mt-2">
                                        <div className="space-y-4 pt-2">
                                            <div>
                                                <div className="flex justify-between text-sm mb-2">
                                                    <span className="text-slate-600">Monto Total Refuerzo ({reinforcementPct}%)</span>
                                                    <span className="font-bold text-teko-navy">{formatCurrency(calculations.refuerzoTotal)}</span>
                                                </div>
                                                <input
                                                    type="range" min="20" max="40" step="5"
                                                    value={reinforcementPct} onChange={e => setReinforcementPct(Number(e.target.value))}
                                                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teko-gold"
                                                />
                                            </div>
                                            <div className="flex gap-2">
                                                {[1, 2, 3, 4, 5].map(n => (
                                                    <button key={n} onClick={() => setReinforcementPayments(n)}
                                                        className={`flex-1 py-2 text-sm rounded-lg border ${reinforcementPayments === n ? 'bg-teko-gold text-white border-teko-gold' : 'bg-white text-slate-600 border-slate-200'}`}>
                                                        {n} Pago{n > 1 ? 's' : ''}
                                                    </button>
                                                ))}
                                            </div>
                                            <p className="text-xs text-center text-slate-500">
                                                Pagarías {reinforcementPayments} refuerzos de <strong className="text-teko-navy">{formatCurrency(calculations.refuerzoPorPago)}</strong>
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* 4. Plazo */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                            <label className="flex justify-between text-sm font-medium text-slate-700 mb-4">
                                <span>Plazo de Financiación</span>
                                <span className="text-lg font-bold text-teko-navy">{months} cuotas</span>
                            </label>
                            <input
                                type="range" min="12" max="72" step="12"
                                value={months} onChange={e => setMonths(Number(e.target.value))}
                                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teko-navy"
                            />
                            <div className="flex justify-between text-xs text-slate-400 mt-2">
                                <span>1 año</span>
                                <span>6 años</span>
                            </div>
                        </div>

                    </div>

                    {/* Panel de Resultado (Derecha) - Sticky Style */}
                    <div className="lg:col-span-5 space-y-4 sticky top-24">

                        {/* Tarjeta Principal */}
                        <div className="bg-teko-navy text-white rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-teko-gold/20 rounded-full blur-3xl -mr-10 -mt-10"></div>

                            {recommendation && (
                                <div className={`absolute top-4 right-4 text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1 uppercase tracking-wider ${recommendation.type === 'success' ? 'bg-green-500/20 text-green-300' : 'bg-teko-gold/20 text-teko-gold'}`}>
                                    {recommendation.icon}
                                    {recommendation.type === 'success' ? 'Recomendado' : 'Sugerencia'}
                                </div>
                            )}

                            <div className="text-center mt-4">
                                <p className="text-slate-400 text-sm uppercase tracking-widest mb-2">Tu Cuota Mensual</p>
                                <motion.div
                                    key={calculations.cuotaMensual}
                                    initial={{ scale: 0.9, opacity: 0.8 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className="text-5xl font-serif font-bold text-teko-gold mb-2"
                                >
                                    {formatCurrency(calculations.cuotaMensual)}
                                </motion.div>
                                <p className="text-sm text-slate-400">fijas por {months} meses</p>
                            </div>

                            <div className="mt-8 space-y-4 border-t border-white/10 pt-6">
                                <div className="flex justify-between items-center">
                                    <span className="text-slate-300">Entrega Inicial</span>
                                    <span className="font-bold text-xl">{formatCurrency(calculations.entrega)}</span>
                                </div>
                                {useReinforcement && (
                                    <div className="flex justify-between items-center bg-white/5 p-3 rounded-lg border border-white/10">
                                        <span className="text-slate-300 text-sm">Refuerzos ({reinforcementPayments})</span>
                                        <span className="font-bold text-teko-gold">{formatCurrency(calculations.refuerzoPorPago)}</span>
                                    </div>
                                )}
                            </div>

                            <a
                                href={`https://wa.me/${FINANCING_CONFIG.whatsappNumber}?text=${generateWhatsAppMessage()}`}
                                target="_blank" rel="noopener noreferrer"
                                className="block mt-8"
                            >
                                <Button variant="gold" fullWidth size="lg" className="shadow-lg shadow-teko-gold/20">
                                    <Send size={18} className="mr-2" />
                                    Lo quiero ahora
                                </Button>
                            </a>
                        </div>

                        {/* Recomendación / Tip */}
                        {recommendation && (
                            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-white border-l-4 border-teko-gold p-4 rounded-xl shadow-sm text-sm text-slate-600">
                                {recommendation.text}
                            </motion.div>
                        )}

                        {/* Detalles Técnicos (Ocultos por defecto) */}
                        <div className="text-center">
                            <button
                                onClick={() => setShowDetails(!showDetails)}
                                className="text-xs text-slate-400 hover:text-teko-navy flex items-center justify-center gap-1 mx-auto transition-colors"
                            >
                                {showDetails ? 'Ocultar detalles técnicos' : 'Ver detalle financiero completo'}
                                {showDetails ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                            </button>

                            <AnimatePresence>
                                {showDetails && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                                        className="bg-slate-100 rounded-xl p-4 mt-3 text-left overflow-hidden"
                                    >
                                        <div className="space-y-2 text-xs text-slate-600">
                                            <div className="flex justify-between"><span>Precio de Lista:</span> <span>{formatCurrency(price)}</span></div>
                                            <div className="flex justify-between"><span>Capital Base:</span> <span>{formatCurrency(calculations.capitalBase)}</span></div>
                                            <div className="flex justify-between"><span>Interés Total (Simple):</span> <span>{formatCurrency(calculations.interesTotal)}</span></div>
                                            <div className="flex justify-between font-bold text-slate-800 border-t border-slate-200 pt-2 mt-2">
                                                <span>Total Financiado:</span> <span>{formatCurrency(calculations.totalPagar)}</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                    </div>
                </div>

                <div className="text-center mt-12">
                    <Link href="/terrenos" className="text-teko-navy font-medium hover:underline inline-flex items-center gap-2">
                        ← Volver al catálogo de terrenos
                    </Link>
                </div>

            </div>
        </div>
    );
}
