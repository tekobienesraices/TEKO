import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator as CalcIcon, Send, ChevronDown, ChevronUp, Sparkles, AlertCircle, Check, Info } from 'lucide-react';
import { Button } from '../components/Button';
import { PRICE_RANGE, FINANCING_CONFIG } from '../data';

// ===========================================
// MODELO DE FINANCIAMIENTO - INTERÉS SIMPLE
// ===========================================
// Tasa anual: 15.6%
// 12 meses: SIN INTERÉS
// 13-72 meses: INTERÉS SIMPLE sobre capital financiado
// Fórmula: Interés = Capital × (tasa_anual × años)
// ===========================================

const INTEREST_CONFIG = {
  zeroInterestMonths: 12,      // 12 meses sin interés
  annualRate: 0.156,           // 15.6% anual
};

interface PaymentScheduleItem {
  month: number;
  type: 'cuota' | 'refuerzo';
  amount: number;
  accumulated: number;
}

export const Calculator: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialPrice = Number(searchParams.get('price')) || PRICE_RANGE.default;

  // State
  const [price, setPrice] = useState(initialPrice);
  const [downPaymentPct, setDownPaymentPct] = useState(FINANCING_CONFIG.minDownPaymentPercent);
  const [useReinforcement, setUseReinforcement] = useState(false); // Apagado por defecto
  const [reinforcementPct, setReinforcementPct] = useState(FINANCING_CONFIG.minReinforcementPercent);
  const [reinforcementPayments, setReinforcementPayments] = useState(FINANCING_CONFIG.defaultReinforcementPayments);
  const [months, setMonths] = useState(60); // Default 60 meses (más accesible)

  // Check if interest applies
  const hasInterest = months > INTEREST_CONFIG.zeroInterestMonths;

  // ===========================================
  // CÁLCULOS - INTERÉS SIMPLE
  // ===========================================
  const calculations = useMemo(() => {
    // 1. Calcular entrega
    const entrega = Math.round(price * downPaymentPct / 100);

    // 2. Restar entrega al precio
    const capitalBase = price - entrega;

    // 3. Calcular refuerzo (opcional)
    const refuerzoTotal = useReinforcement ? Math.round(price * reinforcementPct / 100) : 0;
    const refuerzoPorPago = useReinforcement ? Math.round(refuerzoTotal / reinforcementPayments) : 0;

    // 4. Restar refuerzo si existe
    const capitalFinanciado = capitalBase - refuerzoTotal;

    // 5. Calcular interés SIMPLE (solo si más de 12 meses)
    let interesTotal = 0;
    if (hasInterest) {
      const años = months / 12;
      // Interés Simple: I = C × r × t
      interesTotal = Math.round(capitalFinanciado * INTEREST_CONFIG.annualRate * años);
    }

    // 6. Total financiado = capital + interés
    const totalFinanciado = capitalFinanciado + interesTotal;

    // 7. Calcular cuota mensual con redondeo comercial
    const cuotaSinRedondear = totalFinanciado / months;
    const cuotaMensual = Math.ceil(cuotaSinRedondear / 10000) * 10000; // Redondeo a 10k

    // Ajustar última cuota por diferencia de redondeo
    const sumaCuotasNormales = cuotaMensual * (months - 1);
    const ultimaCuota = totalFinanciado - sumaCuotasNormales;

    // Total a pagar (entrega + refuerzo + cuotas)
    const totalPagar = entrega + refuerzoTotal + totalFinanciado;

    // Diferencia vs contado
    const diferenciaVsContado = totalPagar - price;

    return {
      entrega,
      capitalBase,
      refuerzoTotal,
      refuerzoPorPago,
      capitalFinanciado,
      interesTotal,
      totalFinanciado,
      cuotaMensual,
      ultimaCuota: Math.max(ultimaCuota, 0),
      totalPagar,
      diferenciaVsContado,
      años: months / 12,
      tasaAplicada: hasInterest ? INTEREST_CONFIG.annualRate * (months / 12) : 0
    };
  }, [price, downPaymentPct, useReinforcement, reinforcementPct, reinforcementPayments, months, hasInterest]);

  // Generate payment schedule
  const schedule = useMemo((): PaymentScheduleItem[] => {
    const items: PaymentScheduleItem[] = [];
    let accumulated = calculations.entrega;

    const reinforcementMonths = useReinforcement
      ? Array.from({ length: reinforcementPayments }, (_, i) => (i + 1) * 12)
      : [];

    for (let m = 1; m <= months; m++) {
      if (reinforcementMonths.includes(m)) {
        accumulated += calculations.refuerzoPorPago;
        items.push({
          month: m,
          type: 'refuerzo',
          amount: calculations.refuerzoPorPago,
          accumulated
        });
      }

      const isLastMonth = m === months;
      const cuota = isLastMonth ? calculations.ultimaCuota : calculations.cuotaMensual;
      accumulated += cuota;
      items.push({
        month: m,
        type: 'cuota',
        amount: cuota,
        accumulated
      });
    }

    return items;
  }, [calculations, months, reinforcementPayments, useReinforcement]);

  // Generate WhatsApp message
  const generateWhatsAppMessage = () => {
    const msg = `*TEKO - Mi Plan de Financiación*
    
📍 *Precio del terreno:* Gs. ${price.toLocaleString()}
💰 *Entrega (${downPaymentPct}%):* Gs. ${calculations.entrega.toLocaleString()}
${useReinforcement ? `📈 *Refuerzo (${reinforcementPct}%):* Gs. ${calculations.refuerzoTotal.toLocaleString()} en ${reinforcementPayments} pago(s)` : ''}
🗓️ *Plazo:* ${months} meses
💵 *Cuota mensual:* Gs. ${calculations.cuotaMensual.toLocaleString()}

Me interesa recibir más información sobre este plan.`;

    return encodeURIComponent(msg);
  };

  const formatCurrency = (value: number) => `Gs. ${value.toLocaleString()}`;

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="w-14 h-14 rounded-full bg-gradient-to-br from-teko-navy to-teko-gold text-white flex items-center justify-center mx-auto mb-4 shadow-lg">
            <CalcIcon size={28} />
          </span>
          <h1 className="text-4xl font-serif font-bold text-teko-navy mb-4">
            Armá tu Plan de Financiación
          </h1>
          <p className="text-slate-500 max-w-xl mx-auto">
            Configurá tu inversión en segundos. Plazos flexibles hasta 72 meses.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Controls Panel */}
            <div className="p-8 space-y-8 border-b lg:border-b-0 lg:border-r border-slate-100">
              {/* Price Slider */}
              <div>
                <label className="flex justify-between text-sm font-medium text-slate-700 mb-3">
                  <span>Valor del Terreno</span>
                  <span className="text-xl font-bold text-teko-navy">{formatCurrency(price)}</span>
                </label>
                <input
                  type="range"
                  min={PRICE_RANGE.min}
                  max={PRICE_RANGE.max}
                  step={PRICE_RANGE.step}
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teko-navy"
                />
                <div className="flex justify-between text-xs text-slate-400 mt-2">
                  <span>{formatCurrency(PRICE_RANGE.min)}</span>
                  <span>{formatCurrency(PRICE_RANGE.max)}</span>
                </div>
              </div>

              {/* Down Payment */}
              <div>
                <label className="flex justify-between text-sm font-medium text-slate-700 mb-3">
                  <span>Entrega Inicial ({downPaymentPct}%)</span>
                  <span className="font-bold text-teko-navy">{formatCurrency(calculations.entrega)}</span>
                </label>
                <input
                  type="range"
                  min={FINANCING_CONFIG.minDownPaymentPercent}
                  max={FINANCING_CONFIG.maxDownPaymentPercent}
                  step={5}
                  value={downPaymentPct}
                  onChange={(e) => setDownPaymentPct(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teko-gold"
                />
                <div className="flex justify-between text-xs text-slate-400 mt-2">
                  <span>Mínimo {FINANCING_CONFIG.minDownPaymentPercent}%</span>
                  <span>Máximo {FINANCING_CONFIG.maxDownPaymentPercent}%</span>
                </div>
              </div>

              {/* Reinforcement Toggle */}
              <div className="bg-slate-50 rounded-xl p-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-medium text-slate-700">¿Incluir refuerzos?</span>
                  <button
                    onClick={() => setUseReinforcement(!useReinforcement)}
                    className={`relative w-14 h-8 rounded-full transition-colors ${useReinforcement ? 'bg-teko-gold' : 'bg-slate-300'
                      }`}
                  >
                    <span
                      className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform ${useReinforcement ? 'translate-x-6' : 'translate-x-0'
                        }`}
                    />
                  </button>
                </div>

                <AnimatePresence>
                  {useReinforcement && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="space-y-4 overflow-hidden"
                    >
                      <div>
                        <label className="flex justify-between text-sm text-slate-600 mb-2">
                          <span>Refuerzo ({reinforcementPct}%)</span>
                          <span className="font-bold text-teko-gold">{formatCurrency(calculations.refuerzoTotal)}</span>
                        </label>
                        <input
                          type="range"
                          min={FINANCING_CONFIG.minReinforcementPercent}
                          max={FINANCING_CONFIG.maxReinforcementPercent}
                          step={5}
                          value={reinforcementPct}
                          onChange={(e) => setReinforcementPct(Number(e.target.value))}
                          className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teko-gold"
                        />
                        <p className="text-xs text-slate-400 mt-1">Mínimo 20% del precio</p>
                      </div>

                      <div>
                        <label className="block text-sm text-slate-600 mb-2">Cantidad de pagos</label>
                        <div className="flex gap-2">
                          {[1, 2, 3, 4, 5].map((n) => (
                            <button
                              key={n}
                              onClick={() => setReinforcementPayments(n)}
                              className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${reinforcementPayments === n
                                ? 'bg-teko-gold text-white'
                                : 'bg-white text-slate-600 hover:bg-slate-100'
                                }`}
                            >
                              {n}
                            </button>
                          ))}
                        </div>
                        <p className="text-xs text-slate-400 mt-2">
                          {formatCurrency(calculations.refuerzoPorPago)} por pago
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Term */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-medium text-slate-700">
                    Plazo: <span className="text-teko-navy font-bold">{months} meses</span>
                  </label>
                  {!hasInterest && (
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium flex items-center gap-1">
                      <Check size={12} /> Promoción sin intereses
                    </span>
                  )}
                </div>
                <input
                  type="range"
                  min={12}
                  max={FINANCING_CONFIG.maxTermMonths}
                  step={6}
                  value={months}
                  onChange={(e) => setMonths(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teko-navy"
                />
                <div className="flex justify-between text-xs text-slate-400 mt-2">
                  <span className="text-green-600 font-medium">12 meses (0%)</span>
                  <span>{FINANCING_CONFIG.maxTermMonths} meses</span>
                </div>

                {/* Interest info hidden for sales optimization */}
              </div>
            </div>

            {/* Results Panel */}
            <div className="bg-gradient-to-br from-teko-navy to-slate-800 p-8 text-white relative overflow-hidden">
              {/* Decorative */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-teko-gold/20 rounded-full blur-3xl -mr-32 -mt-32" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/20 rounded-full blur-2xl -ml-24 -mb-24" />

              <div className="relative z-10">
                {/* Monthly Payment Highlight */}
                <motion.div
                  key={calculations.cuotaMensual}
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center mb-8"
                >
                  <span className="block text-slate-400 text-sm uppercase tracking-wider mb-2">Tu cuota mensual</span>
                  <div className="text-5xl md:text-6xl font-serif font-bold text-teko-gold">
                    {formatCurrency(calculations.cuotaMensual)}
                  </div>
                  <span className="text-slate-400 text-sm">durante {months} meses</span>
                </motion.div>

                {/* Summary - Flujo detallado */}
                <div className="space-y-3 mb-6 border-t border-white/10 pt-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Precio del terreno</span>
                    <span className="font-medium">{formatCurrency(price)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Entrega ({downPaymentPct}%)</span>
                    <span className="font-medium text-green-400">- {formatCurrency(calculations.entrega)}</span>
                  </div>
                  {useReinforcement && (
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Refuerzo ({reinforcementPct}%)</span>
                      <span className="font-medium text-green-400">- {formatCurrency(calculations.refuerzoTotal)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-sm border-t border-white/10 pt-2">
                    <span className="text-slate-400">Capital financiado</span>
                    <span className="font-medium">{formatCurrency(calculations.capitalFinanciado)}</span>
                  </div>

                  {/* Interest row - only show if there IS interest (Hidden for sales optimization) */}
                  {/* Total to Pay removed for sales optimization */}
                </div>

                {/* Tip - Always positive */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-6">
                  <div className="flex items-start gap-3">
                    <Sparkles className="text-teko-gold flex-shrink-0 mt-0.5" size={20} />
                    <p className="text-sm text-slate-300">
                      <p className="text-sm text-slate-300">
                        <strong className="text-white">Cuota fija en Guaraníes.</strong> Tu inversión está segura y tu pago mensual no cambia.
                      </p>
                    </p>
                  </div>
                </div>

                {/* Security Badge */}
                <div className="flex items-center justify-center gap-2 mb-6 text-teko-gold/80 text-xs font-bold uppercase tracking-widest border border-teko-gold/30 py-2 rounded-lg bg-teko-gold/5">
                  <Check size={14} /> Título Propio e Inmediato
                </div>

                {/* Actions */}
                <div className="space-y-3">
                  <a
                    href={`https://wa.me/${FINANCING_CONFIG.whatsappNumber}?text=${generateWhatsAppMessage()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button variant="gold" fullWidth size="lg">
                      <Send size={18} className="mr-2" />
                      Lo quiero: Enviar plan por WhatsApp
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer - Simplified and Trust focused */}
      <p className="text-center text-xs text-slate-400 mt-6 max-w-xl mx-auto opacity-60">
        *Calculadora de uso estimativo. Los planes pueden ajustarse a tu medida. Consultá con un asesor para congelar el precio de tu lote hoy mismo.
      </p>

      {/* Back to zones */}
      <div className="text-center mt-8">
        <Link to="/terrenos" className="text-teko-navy hover:text-teko-gold font-medium text-sm inline-flex items-center gap-2">
          ← Ver todos los lotes disponibles
        </Link>
      </div>
    </div>
  );
};