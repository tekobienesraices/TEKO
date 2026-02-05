import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { MapPin, Check, Ruler, Calendar, Share2, ArrowLeft } from 'lucide-react';
import { properties } from '../data';
import { Button } from '../components/Button';
import { LeadModal } from '../components/LeadModal';
import { GrowthTimeline } from '../components/GrowthTimeline';

export const PropertyDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const property = properties.find(p => p.id === id);
  const [modalOpen, setModalOpen] = useState(false);

  if (!property) return <Navigate to="/terrenos" />;

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Nav Back */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Link to="/terrenos" className="inline-flex items-center text-slate-500 hover:text-teko-navy transition-colors">
          <ArrowLeft size={16} className="mr-2" /> Volver al catálogo
        </Link>
      </div>

      {/* Gallery / Hero */}
      <div className="h-[50vh] md:h-[60vh] relative w-full overflow-hidden">
        <img src={property.image} alt={property.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-teko-navy/90 to-transparent pt-32 pb-10 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-2">{property.title}</h1>
            <div className="flex items-center text-white/90 gap-2 text-lg">
              <MapPin size={20} /> {property.location}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Specs */}
            <div className="flex flex-wrap gap-6 p-6 bg-slate-50 rounded-xl border border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-teko-navy">
                  <Ruler size={20} />
                </div>
                <div>
                  <span className="block text-xs text-slate-400 uppercase">Superficie</span>
                  <span className="font-bold text-teko-navy">{property.size} m²</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-teko-navy">
                  <Calendar size={20} />
                </div>
                <div>
                  <span className="block text-xs text-slate-400 uppercase">Entrega</span>
                  <span className="font-bold text-teko-navy">Inmediata</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-2xl font-serif font-bold text-teko-navy mb-4">Sobre esta propiedad</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                {property.description} Ubicado en una de las zonas con mayor proyección de crecimiento, este lote ofrece el equilibrio perfecto entre naturaleza y conectividad. Ideal para quienes buscan construir no solo una casa, sino un legado familiar.
              </p>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-2xl font-serif font-bold text-teko-navy mb-6">Características y Servicios</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {property.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-slate-700">
                    <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
                      <Check size={12} />
                    </div>
                    {feature}
                  </div>
                ))}
                <div className="flex items-center gap-3 text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
                    <Check size={12} />
                  </div>
                  Seguridad Jurídica (Escritura)
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="h-64 bg-slate-100 rounded-xl flex items-center justify-center border border-slate-200">
              <span className="text-slate-400 flex items-center gap-2">
                <MapPin /> Mapa de ubicación interactivo
              </span>
            </div>
            {/* Growth Evidence */}
            <div className="py-8">
              <h3 className="text-2xl font-serif font-bold text-teko-navy mb-4">Plusvalía Comprobada</h3>
              <p className="text-slate-600 mb-6">
                Invertir en Costa Salinas no es una apuesta, es una certeza. Mirá cómo el tiempo ha multiplicado el valor de la tierra en esta misma zona:
              </p>
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
                <GrowthTimeline />
              </div>
            </div>

          </div>

          {/* Sidebar Sticky */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-white p-6 rounded-2xl shadow-xl border border-slate-100">
              <div className="mb-6">
                <span className="text-slate-500 text-sm">Precio de lista</span>
                <div className="text-4xl font-bold text-teko-navy">Gs. {property.price.toLocaleString()}</div>
              </div>

              <div className="mb-8 p-4 bg-teko-navy/5 rounded-lg border border-teko-navy/10">
                <span className="block text-xs text-teko-navy font-bold uppercase tracking-wide mb-1">Financiación TEKO</span>
                <div className="flex justify-between items-baseline">
                  <span className="text-sm text-slate-600">Cuota desde</span>
                  <span className="text-2xl font-bold text-teko-navy">${property.monthlyPayment}</span>
                </div>
              </div>

              <div className="space-y-3">
                <Button
                  fullWidth
                  size="lg"
                  onClick={() => setModalOpen(true)}
                  className="shadow-teko-navy/20"
                >
                  Consultar Disponibilidad
                </Button>

                <Link to={`/calculadora?price=${property.price}`} className="block">
                  <Button fullWidth variant="secondary">
                    Personalizar Plan de Pagos
                  </Button>
                </Link>

                <Button fullWidth variant="ghost" className="text-slate-400 hover:text-teko-navy">
                  <Share2 size={16} className="mr-2" /> Compartir ficha
                </Button>
              </div>

              <div className="mt-6 text-center">
                <p className="text-xs text-slate-400">
                  Reserva online 100% segura. <br />Garantía de devolución 48hs.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
      <LeadModal isOpen={modalOpen} onClose={() => setModalOpen(false)} title={`Interés: ${property.title}`} source="Property Detail" />
    </div>
  );
};