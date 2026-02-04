import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator as CalcIcon, Send, ChevronDown, ChevronUp, Sparkles, AlertCircle, Check } from 'lucide-react';
import { Button } from '../components/Button';
import { PRICE_RANGE, FINANCING_CONFIG } from '../data';

// Interest configuration
const INTEREST_CONFIG = {
  zeroInterestMonths: 12,      // 12 meses sin interés
  monthlyRate: 0.013,          // 1.3% mensual
  annualRate: 0.156            // 15.6% anual
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
  const [useReinforcement, setUseReinforcement] = useState(true);
  const [reinforcementPct, setReinforcementPct] = useState(FINANCING_CONFIG.minReinforcementPercent);
  const [reinforcementPayments, setReinforcementPayments] = useState(FINANCING_CONFIG.defaultReinforcementPayments);
  const [months, setMonths] = useState(12); // Default to 12 months (0% interest)
  const [showSchedule, setShowSchedule] = useState(false);

  // Check if interest applies
  const hasInterest = months > INTEREST_CONFIG.zeroInterestMonths;

  // Calculations
  const calculations = useMemo(() => {
    const downPayment = Math.round(price * downPaymentPct / 100);
    const reinforcement = useReinforcement ? Math.round(price * reinforcementPct / 100) : 0;
    const saldoFinanciado = price - downPayment - reinforcement;
    const reinforcementPerPayment = useReinforcement ? Math.round(reinforcement / reinforcementPayments) : 0;

    let cuotaMensual: number;
    let totalFinanciado: number;
    let interesTotal: number;

    if (months <= INTEREST_CONFIG.zeroInterestMonths) {
      // 12 meses o menos: SIN INTERÉS
      cuotaMensual = Math.ceil(saldoFinanciado / months / 10000) * 10000;
      totalFinanciado = cuotaMensual * months;
      interesTotal = 0;
    } else {
      // Más de 12 meses: CON INTERÉS (fórmula de amortización)
      // M = P [ i(1 + i)^n ] / [ (1 + i)^n – 1 ]
      const i = INTEREST_CONFIG.monthlyRate;
      const n = months;
      const P = saldoFinanciado;

      const factor = Math.pow(1 + i, n);
      cuotaMensual = Math.ceil(P * (i * factor) / (factor - 1) / 10000) * 10000;
      totalFinanciado = cuotaMensual * months;
      interesTotal = totalFinanciado - saldoFinanciado;
    }

    // Adjust last payment for rounding
    const lastPaymentAdjustment = hasInterest
      ? totalFinanciado - (cuotaMensual * (months - 1))
      : saldoFinanciado - (cuotaMensual * (months - 1));

    const totalPaid = downPayment + reinforcement + totalFinanciado;
    const differenceVsCash = totalPaid - price;

    return {
      downPayment,
      reinforcement,
      saldoFinanciado,
      cuotaMensual,
      totalFinanciado,
      interesTotal,
      lastPaymentAdjustment: Math.max(lastPaymentAdjustment, cuotaMensual),
      reinforcementPerPayment,
      totalPaid,
      differenceVsCash,
      reinforcementPayments: useReinforcement ? reinforcementPayments : 0
    };
  }, [price, downPaymentPct, useReinforcement, reinforcementPct, reinforcementPayments, months, hasInterest]);

  // Generate payment schedule
  const schedule = useMemo((): PaymentScheduleItem[] => {
    const items: PaymentScheduleItem[] = [];
    let accumulated = calculations.downPayment;

    const reinforcementMonths = useReinforcement
      ? Array.from({ length: reinforcementPayments }, (_, i) => (i + 1) * 12)
      : [];

    for (let m = 1; m <= months; m++) {
      if (reinforcementMonths.includes(m)) {
        accumulated += calculations.reinforcementPerPayment;
        items.push({
          month: m,
          type: 'refuerzo',
          amount: calculations.reinforcementPerPayment,
          accumulated
        });
      }

      const isLastMonth = m === months;
      const cuota = isLastMonth ? calculations.lastPaymentAdjustment : calculations.cuotaMensual;
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
    const interestText = hasInterest
      ? `📊 *Tasa:* 1.3% mensual (15.6% anual)`
      : `✅ *Sin interés* (hasta 12 cuotas)`;

    const msg = `*TEKO - Mi Plan de Financiación*
    
📍 *Precio del terreno:* Gs. ${price.toLocaleString()}
💰 *Entrega (${downPaymentPct}%):* Gs. ${calculations.downPayment.toLocaleString()}
${useReinforcement ? `📈 *Refuerzo (${reinforcementPct}%):* Gs. ${calculations.reinforcement.toLocaleString()} en ${reinforcementPayments} pagos` : ''}
📊 *Saldo a financiar:* Gs. ${calculations.saldoFinanciado.toLocaleString()}
🗓️ *Plazo:* ${months} meses
${interestText}
💵 *Cuota mensual:* Gs. ${calculations.cuotaMensual.toLocaleString()}
💰 *Total a pagar:* Gs. ${calculations.totalPaid.toLocaleString()}

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
            Configurá tu inversión en segundos. <strong>12 cuotas sin interés</strong> o hasta 72 meses con tasa fija.
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
                  <span className="font-bold text-teko-navy">{formatCurrency(calculations.downPayment)}</span>
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
                  <span className="font-medium text-slate-700">¿Incluir refuerzos anuales?</span>
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
                          <span className="font-bold text-teko-gold">{formatCurrency(calculations.reinforcement)}</span>
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
                          {formatCurrency(calculations.reinforcementPerPayment)} por pago anual
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Term - WITH INTEREST INDICATOR */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-medium text-slate-700">
                    Plazo: <span className="text-teko-navy font-bold">{months} meses</span>
                  </label>
                  {hasInterest ? (
                    <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full font-medium">
                      Con interés
                    </span>
                  ) : (
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium flex items-center gap-1">
                      <Check size={12} /> Sin interés
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

                {/* Interest explanation */}
                {hasInterest && (
                  <div className="mt-3 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                    <div className="flex items-start gap-2">
                      <AlertCircle size={16} className="text-amber-600 flex-shrink-0 mt-0.5" />
                      <p className="text-xs text-amber-700">
                        A partir de 13 cuotas se aplica una tasa de <strong>1.3% mensual</strong> (15.6% anual).
                        Para 0% de interés, elegí 12 meses.
                      </p>
                    </div>
                  </div>
                )}
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

                {/* Summary */}
                <div className="space-y-3 mb-6 border-t border-white/10 pt-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Entrega inicial</span>
                    <span className="font-medium">{formatCurrency(calculations.downPayment)}</span>
                  </div>
                  {useReinforcement && (
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Refuerzo total</span>
                      <span className="font-medium">{formatCurrency(calculations.reinforcement)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Saldo financiado</span>
                    <span className="font-medium">{formatCurrency(calculations.saldoFinanciado)}</span>
                  </div>

                  {/* Interest row - only show if there IS interest */}
                  {hasInterest && (
                    <div className="flex justify-between text-sm">
                      <span className="text-amber-400">Interés (1.3% mensual)</span>
                      <span className="font-medium text-amber-400">+ {formatCurrency(calculations.interesTotal)}</span>
                    </div>
                  )}

                  <div className="flex justify-between text-sm border-t border-white/10 pt-3">
                    <span className="text-slate-400">Total a pagar</span>
                    <span className="font-bold text-lg">{formatCurrency(calculations.totalPaid)}</span>
                  </div>
                </div>

                {/* Tip - Dynamic based on interest */}
                <div className={`backdrop-blur-sm rounded-xl p-4 mb-6 ${hasInterest ? 'bg-amber-500/20' : 'bg-green-500/20'}`}>
                  <div className="flex items-start gap-3">
                    {hasInterest ? (
                      <>
                        <AlertCircle className="text-amber-400 flex-shrink-0 mt-0.5" size={20} />
                        <p className="text-sm text-slate-300">
                          <strong className="text-amber-400">Tasa fija 1.3% mensual.</strong> Si preferís sin interés, elegí 12 cuotas y ahorrate {formatCurrency(calculations.interesTotal)}.
                        </p>
                      </>
                    ) : (
                      <>
                        <Sparkles className="text-green-400 flex-shrink-0 mt-0.5" size={20} />
                        <p className="text-sm text-slate-300">
                          <strong className="text-green-400">¡Sin intereses!</strong> Pagás lo mismo que de contado dividido en 12 cuotas.
                        </p>
                      </>
                    )}
                  </div>
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
                      Enviar plan por WhatsApp
                    </Button>
                  </a>

                  <button
                    onClick={() => setShowSchedule(!showSchedule)}
                    className="w-full flex items-center justify-center gap-2 text-slate-400 hover:text-white text-sm py-2 transition-colors"
                  >
                    Ver cronograma completo
                    {showSchedule ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Schedule */}
          <AnimatePresence>
            {showSchedule && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="border-t border-slate-100 overflow-hidden"
              >
                <div className="p-6 max-h-96 overflow-y-auto">
                  <h3 className="font-bold text-teko-navy mb-4">Cronograma de Pagos</h3>
                  <div className="bg-slate-50 rounded-lg p-4">
                    <div className="grid grid-cols-4 gap-4 text-xs font-medium text-slate-500 mb-2 pb-2 border-b border-slate-200">
                      <span>Mes</span>
                      <span>Tipo</span>
                      <span className="text-right">Monto</span>
                      <span className="text-right">Acumulado</span>
                    </div>
                    <div className="divide-y divide-slate-100">
                      <div className="grid grid-cols-4 gap-4 py-2 text-sm">
                        <span className="font-medium">0</span>
                        <span className="text-teko-gold font-medium">Entrega</span>
                        <span className="text-right">{formatCurrency(calculations.downPayment)}</span>
                        <span className="text-right font-medium">{formatCurrency(calculations.downPayment)}</span>
                      </div>
                      {schedule.slice(0, 24).map((item, idx) => (
                        <div key={idx} className={`grid grid-cols-4 gap-4 py-2 text-sm ${item.type === 'refuerzo' ? 'bg-teko-gold/5' : ''}`}>
                          <span className="font-medium">{item.month}</span>
                          <span className={item.type === 'refuerzo' ? 'text-teko-gold font-medium' : 'text-slate-600'}>
                            {item.type === 'refuerzo' ? 'Refuerzo' : 'Cuota'}
                          </span>
                          <span className="text-right">{formatCurrency(item.amount)}</span>
                          <span className="text-right font-medium">{formatCurrency(item.accumulated)}</span>
                        </div>
                      ))}
                      {schedule.length > 24 && (
                        <div className="py-3 text-center text-slate-400 text-sm">
                          ... y {schedule.length - 24} pagos más hasta completar {months} meses
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Disclaimer */}
        <p className="text-center text-xs text-slate-400 mt-6 max-w-xl mx-auto">
          Calculadora informativa. Los valores son estimativos. Financiación hasta 12 cuotas sin interés, a partir de 13 cuotas aplica 1.3% mensual (15.6% anual). Consulte condiciones vigentes.
        </p>

        {/* Back to zones */}
        <div className="text-center mt-8">
          <Link to="/terrenos" className="text-teko-navy hover:text-teko-gold font-medium text-sm inline-flex items-center gap-2">
            ← Ver todos los lotes disponibles
          </Link>
        </div>
      </div>
    </div>
  );
};