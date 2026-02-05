import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Check, Sparkles } from 'lucide-react';
import { zones, properties, getPropertiesByZone } from '../data';
import { Button } from '../components/Button';

export const Catalog: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-b from-slate-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-teko-navy mb-4">
            Invertí en tu Futuro
          </h1>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-full font-bold text-sm uppercase tracking-wider mb-6 animate-pulse">
            <Sparkles size={16} />
            Descuento Especial: Gs. 5.000.000 OFF en todos los lotes
          </div>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Lotes premium en zonas de alta valorización. Aprovechá nuestra bonificación exclusiva por tiempo limitado.
          </p>
        </div>
      </div>

      {/* Zone Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {zones.map((zone, idx) => {
            const zoneProperties = getPropertiesByZone(zone.id);
            const minPrice = Math.min(...zoneProperties.map(p => p.price));
            const availableCount = zoneProperties.filter(p => p.status === 'available').length;

            return (
              <motion.div
                key={zone.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15 }}
                viewport={{ once: true }}
                className="group relative rounded-3xl overflow-hidden shadow-xl"
              >
                {/* Background Image */}
                <div className="aspect-[4/3] relative">
                  <img
                    src={zone.heroImage}
                    alt={zone.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teko-navy via-teko-navy/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                  <div className="mb-auto">
                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                      <MapPin size={14} />
                      {availableCount} lotes disponibles
                    </span>
                  </div>

                  <div>
                    <h2 className="text-3xl font-serif font-bold mb-2">{zone.name}</h2>
                    <p className="text-white/80 mb-4">{zone.tagline}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {zone.highlights.slice(0, 3).map((highlight, i) => (
                        <span key={i} className="inline-flex items-center gap-1 text-xs bg-white/10 backdrop-blur-sm px-2 py-1 rounded-full">
                          <Check size={12} className="text-teko-gold" />
                          {highlight}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-end justify-between">
                      <div>
                        <span className="block text-sm text-white/60">Lotes desde</span>
                        <span className="text-2xl font-bold text-teko-gold">Gs. {minPrice.toLocaleString()}</span>
                      </div>
                      <Link to={`/zona/${zone.id}`}>
                        <Button variant="gold" size="lg">
                          Explorar
                          <ArrowRight size={18} className="ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="bg-teko-navy py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <span className="block text-4xl font-serif font-bold text-teko-gold">{properties.length}</span>
              <span className="text-white/60">Lotes Totales</span>
            </div>
            <div>
              <span className="block text-4xl font-serif font-bold text-teko-gold">{zones.length}</span>
              <span className="text-white/60">Zonas Premium</span>
            </div>
            <div>
              <span className="block text-4xl font-serif font-bold text-teko-gold">20%</span>
              <span className="text-white/60">Entrega Inicial</span>
            </div>
            <div>
              <span className="block text-4xl font-serif font-bold text-teko-gold">72</span>
              <span className="text-white/60">Cuotas Máx.</span>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-20 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-teko-navy mb-4">
            ¿No sabés cuál elegir?
          </h2>
          <p className="text-slate-500 mb-8">
            Usá nuestra calculadora para armar tu plan de financiación personalizado y encontrá el lote perfecto para tu presupuesto.
          </p>
          <Link to="/calculadora">
            <Button variant="primary" size="lg">
              Abrir Calculadora
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};