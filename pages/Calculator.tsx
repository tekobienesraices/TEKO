import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calculator as CalcIcon, Send } from 'lucide-react';
import { Button } from '../components/Button';
import { LeadModal } from '../components/LeadModal';

export const Calculator: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialPrice = Number(searchParams.get('price')) || 350000000;

  const [price, setPrice] = useState(initialPrice);
  const [downPaymentPct, setDownPaymentPct] = useState(30);
  const [months, setMonths] = useState(60);
  const [modalOpen, setModalOpen] = useState(false);

  // Simple calculation logic (linear for display purposes)
  // In reality, this would likely be an amortization formula or adjusted for inflation/CAC
  const downPaymentAmount = (price * downPaymentPct) / 100;
  const financedAmount = price - downPaymentAmount;
  // Adding a dummy 1% monthly interest for realism in the "Total" but keeping it simple
  const monthlyRate = 0.01;
  // Formula: M = P [ i(1 + i)^n ] / [ (1 + i)^n – 1 ]
  const monthlyPayment = financedAmount * (monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
  const totalFinanced = monthlyPayment * months;

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-center mb-12">
          <span className="w-12 h-12 rounded-full bg-teko-navy text-white flex items-center justify-center mx-auto mb-4 shadow-lg">
            <CalcIcon size={24} />
          </span>
          <h1 className="text-4xl font-serif font-bold text-teko-navy mb-4">Simulador de Inversión</h1>
          <p className="text-slate-500 max-w-xl mx-auto">
            Diseñá el plan de pagos que mejor se adapte a tu flujo de caja. En TEKO, la flexibilidad es parte del contrato.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
          <div className="grid grid-cols-1 md:grid-cols-2">

            {/* Controls */}
            <div className="p-8 md:p-10 space-y-8">
              <div>
                <label className="flex justify-between text-sm font-medium text-slate-700 mb-2">
                  <span>Valor del Terreno</span>
                  <span className="font-bold text-teko-navy">Gs. {price.toLocaleString()}</span>
                </label>
                <input
                  type="range"
                  min="200000000"
                  max="600000000"
                  step="10000000"
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teko-navy"
                />
              </div>

              <div>
                <label className="flex justify-between text-sm font-medium text-slate-700 mb-2">
                  <span>Anticipo ({downPaymentPct}%)</span>
                  <span className="font-bold text-teko-navy">Gs. {downPaymentAmount.toLocaleString()}</span>
                </label>
                <input
                  type="range"
                  min="10"
                  max="60"
                  step="5"
                  value={downPaymentPct}
                  onChange={(e) => setDownPaymentPct(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teko-navy"
                />
                <div className="flex justify-between text-xs text-slate-400 mt-2">
                  <span>Mínimo 10%</span>
                  <span>Máximo 60%</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-4">Plazo de Financiación</label>
                <div className="grid grid-cols-3 gap-3">
                  {[12, 24, 36, 48, 60, 84].map((m) => (
                    <button
                      key={m}
                      onClick={() => setMonths(m)}
                      className={`py-2 rounded-lg text-sm font-medium transition-all ${months === m
                        ? 'bg-teko-navy text-white shadow-md'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                    >
                      {m} Meses
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Result */}
            <div className="bg-teko-navy p-8 md:p-10 text-white flex flex-col justify-center relative overflow-hidden">
              {/* Decorative gradients */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl -ml-16 -mb-16"></div>

              <div className="relative z-10">
                <motion.div
                  key={monthlyPayment} // Triggers animation on change
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-8"
                >
                  <span className="block text-slate-400 text-sm uppercase tracking-wider mb-1">Cuota Estimada Mensual</span>
                  <div className="text-5xl font-serif font-bold tracking-tight">
                    Gs. {Math.round(monthlyPayment).toLocaleString()}
                  </div>
                </motion.div>

                <div className="space-y-4 mb-8 border-t border-white/10 pt-6 text-sm text-slate-300">
                  <div className="flex justify-between">
                    <span>Monto a Financiar</span>
                    <span className="text-white font-medium">Gs. {financedAmount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Financiado (aprox)</span>
                    <span className="text-white font-medium">Gs. {Math.round(totalFinanced).toLocaleString()}</span>
                  </div>
                </div>

                <Button
                  variant="secondary"
                  fullWidth
                  size="lg"
                  onClick={() => setModalOpen(true)}
                  className="shadow-xl"
                >
                  <Send size={18} className="mr-2" /> Recibir Plan por WhatsApp
                </Button>
                <p className="text-[10px] text-center text-slate-500 mt-4 leading-tight">
                  Calculadora informativa. Sujeto a aprobación crediticia y disponibilidad. Las tasas pueden variar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LeadModal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="Guardar Simulación" source="Calculator" />
    </div>
  );
};