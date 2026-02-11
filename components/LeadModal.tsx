import React from 'react';
import { useForm } from 'react-hook-form';
import { X, CheckCircle } from 'lucide-react';
import { Button } from './Button';
import { LeadForm } from '../types';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  ctaText?: string;
  source?: string;
  successTitle?: string;
  successMessage?: string;
}

export const LeadModal: React.FC<LeadModalProps> = ({
  isOpen,
  onClose,
  title = "Recibir Asesoría",
  subtitle = "Completa tus datos para recibir información exclusiva y planes de financiación.",
  ctaText = "Recibir Información",
  source,
  successTitle = "¡Gracias!",
  successMessage = "Un asesor premium se contactará contigo a la brevedad vía WhatsApp."
}) => {
  const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful }, reset } = useForm<LeadForm>();

  const onSubmit = async (data: LeadForm) => {
    try {
      const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz3mtA8VT0DeUO9XO2OdHWbSDrVV8nK96iaIQAT6QQUrsU9TL1utemNjQ96VObk1dQk/exec';

      await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, source })
      });
    } catch (error) {
      console.error('Error submitting lead:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 overflow-hidden">

        {/* Close Button */}
        <button
          onClick={() => { reset(); onClose(); }}
          className="absolute top-4 right-4 text-slate-400 hover:text-teko-navy transition-colors"
        >
          <X size={24} />
        </button>

        {isSubmitSuccessful ? (
          <div className="flex flex-col items-center text-center py-8 animate-in zoom-in duration-300">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
              <CheckCircle size={32} />
            </div>
            <h3 className="text-2xl font-serif font-bold text-teko-navy mb-2">{successTitle}</h3>
            <p className="text-slate-600">{successMessage}</p>
            <Button className="mt-6" onClick={() => { reset(); onClose(); }}>Cerrar</Button>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <h3 className="text-2xl font-serif font-bold text-teko-navy mb-2">{title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{subtitle}</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-700 uppercase tracking-wide mb-1">Nombre Completo</label>
                <input
                  {...register("name", { required: true })}
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-teko-navy focus:ring-0 transition-colors"
                  placeholder="Ej. Juan Pérez"
                />
                {errors.name && <span className="text-xs text-red-500">Este campo es requerido</span>}
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 uppercase tracking-wide mb-1">WhatsApp</label>
                <input
                  {...register("phone", { required: true })}
                  type="tel"
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-teko-navy focus:ring-0 transition-colors"
                  placeholder="0981234567"
                />
                {errors.phone && <span className="text-xs text-red-500">Requerido para contacto</span>}
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 uppercase tracking-wide mb-1">Email (opcional)</label>
                <input
                  {...register("email")}
                  type="email"
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-teko-navy focus:ring-0 transition-colors"
                  placeholder="tu@email.com"
                />
              </div>

              <div className="hidden">
                {/* Hidden field for simpler forms, but good for tracking */}
                <input {...register("interest")} value="comprar" />
              </div>

              <Button
                type="submit"
                fullWidth
                disabled={isSubmitting}
                className="mt-4 bg-gradient-to-r from-teko-navy to-slate-800"
              >
                {isSubmitting ? 'Enviando...' : ctaText}
              </Button>

              <p className="text-xs text-center text-slate-400 mt-4">
                Tus datos están protegidos. No enviamos spam.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
};