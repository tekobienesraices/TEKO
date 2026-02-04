import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Filter, SlidersHorizontal } from 'lucide-react';
import { properties } from '../data';
import { Button } from '../components/Button';

export const Catalog: React.FC = () => {
  const [filterPrice, setFilterPrice] = useState<number>(100000);
  const [filterSize, setFilterSize] = useState<number>(0);
  
  const filteredProps = useMemo(() => {
    return properties.filter(p => p.price <= filterPrice && p.size >= filterSize);
  }, [filterPrice, filterSize]);

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-serif font-bold text-teko-navy mb-4">Terrenos Disponibles</h1>
          <p className="text-slate-500 max-w-2xl">
            Explorá nuestra selección de lotes premium. Todos cuentan con escritura inmediata y opciones de financiación TEKO Flex.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Filters Sidebar */}
          <div className="w-full lg:w-64 flex-shrink-0 space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 sticky top-28">
              <div className="flex items-center gap-2 mb-6 text-teko-navy">
                <SlidersHorizontal size={20} />
                <h3 className="font-bold text-lg">Filtros</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Precio Máximo: ${filterPrice.toLocaleString()}
                  </label>
                  <input 
                    type="range" 
                    min="20000" 
                    max="100000" 
                    step="5000"
                    value={filterPrice}
                    onChange={(e) => setFilterPrice(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teko-navy"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Superficie Mínima: {filterSize} m²
                  </label>
                  <input 
                    type="range" 
                    min="0" 
                    max="2000" 
                    step="100"
                    value={filterSize}
                    onChange={(e) => setFilterSize(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teko-navy"
                  />
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <p className="text-xs text-slate-400 mb-4">
                    Mostrando {filteredProps.length} propiedades
                  </p>
                  <Button 
                    fullWidth 
                    variant="ghost" 
                    size="sm"
                    onClick={() => { setFilterPrice(100000); setFilterSize(0); }}
                  >
                    Limpiar Filtros
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredProps.map((prop, idx) => (
                <motion.div
                  key={prop.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-slate-100 group"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img 
                      src={prop.image} 
                      alt={prop.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <p className="text-white font-bold text-lg">{prop.location}</p>
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-teko-navy">{prop.title}</h3>
                        <p className="text-slate-500 text-sm">{prop.size} m² totales</p>
                      </div>
                      <div className="text-right">
                        <span className="block text-xl font-bold text-teko-navy">${prop.price.toLocaleString()}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {prop.features.slice(0, 3).map((f, i) => (
                        <span key={i} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-md">
                          {f}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <Link to={`/propiedad/${prop.id}`} className="flex-1">
                        <Button fullWidth variant="outline">Ver Detalles</Button>
                      </Link>
                      <Link to={`/calculadora?price=${prop.price}`} className="flex-1">
                         <Button fullWidth variant="secondary">Cuota</Button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {filteredProps.length === 0 && (
              <div className="text-center py-20">
                <p className="text-slate-400 text-lg">No encontramos terrenos con esos criterios.</p>
                <Button 
                  variant="ghost" 
                  className="mt-4"
                  onClick={() => { setFilterPrice(100000); setFilterSize(0); }}
                >
                  Ver todos
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};