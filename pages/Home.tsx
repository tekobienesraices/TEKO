import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, TrendingUp, Home as HomeIcon, Map } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { LeadModal } from '../components/LeadModal';
import { properties, testimonials } from '../data';

export const Home: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <motion.div 
          style={{ y: y1 }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-teko-navy/40 via-teko-navy/20 to-slate-50 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2700&auto=format&fit=crop" 
            alt="Luxury Home" 
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Content */}
        <motion.div 
          style={{ opacity }}
          className="relative z-20 text-center max-w-4xl px-4 mt-20"
        >
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-medium uppercase tracking-widest mb-6"
          >
            Bienes Raíces Premium
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight mb-6"
          >
            Construí tu futuro <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">desde hoy</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto"
          >
            Accedé a terrenos exclusivos con financiación propia y hacé realidad tu casa a medida con nuestro sistema de construcción integral.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/terrenos">
              <Button size="lg" className="min-w-[200px]">Ver Terrenos</Button>
            </Link>
            <Link to="/calculadora">
              <Button variant="secondary" size="lg" className="min-w-[200px]">Calcular Cuota</Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Branching UX - Quick Actions */}
      <section className="relative z-30 -mt-20 px-4 pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Map, title: "Comprar Terreno", desc: "Ubicaciones estratégicas con alta plusvalía.", link: "/terrenos" },
            { icon: HomeIcon, title: "Construir mi Casa", desc: "Arquitectura de autor llave en mano.", link: "/construccion" },
            { icon: TrendingUp, title: "Invertir Capital", desc: "Retorno asegurado en ladrillos.", link: "/inversion" }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link to={item.link} className="block group">
                <div className="glass p-8 rounded-2xl border border-white/50 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-teko-navy/5 rounded-xl flex items-center justify-center text-teko-navy mb-6 group-hover:bg-teko-navy group-hover:text-white transition-colors">
                    <item.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-teko-navy mb-3">{item.title}</h3>
                  <p className="text-slate-600 mb-6">{item.desc}</p>
                  <span className="text-sm font-semibold text-teko-navy flex items-center gap-2 group-hover:gap-3 transition-all">
                    Explorar <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-teko-navy/60 font-semibold uppercase tracking-wider text-sm">Oportunidades</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-teko-navy mt-2">Terrenos Destacados</h2>
            </div>
            <Link to="/terrenos" className="hidden md:flex items-center gap-2 text-teko-navy font-medium hover:opacity-70 transition-opacity">
              Ver todo el catálogo <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.slice(0, 3).map((prop) => (
              <motion.div
                key={prop.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={prop.image} 
                    alt={prop.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-teko-navy uppercase">
                    {prop.status === 'reserved' ? 'Reservado' : 'Disponible'}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-teko-navy mb-2">{prop.title}</h3>
                  <p className="text-slate-500 text-sm mb-4">{prop.location}</p>
                  <div className="flex justify-between items-center border-t border-slate-100 pt-4">
                    <div>
                      <span className="block text-xs text-slate-400">Precio Total</span>
                      <span className="font-bold text-lg">${prop.price.toLocaleString()}</span>
                    </div>
                    <div className="text-right">
                      <span className="block text-xs text-slate-400">Cuota desde</span>
                      <span className="font-bold text-lg text-teko-navy">${prop.monthlyPayment}</span>
                    </div>
                  </div>
                  <Link to={`/propiedad/${prop.id}`}>
                    <Button fullWidth variant="outline" className="mt-6 group-hover:bg-teko-navy group-hover:text-white">Ver Detalle</Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-10 text-center md:hidden">
            <Link to="/terrenos">
              <Button variant="outline" fullWidth>Ver todo el catálogo</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Authority / Why TEKO */}
      <section className="py-24 bg-teko-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Más que un terreno,<br/>un proyecto de vida.</h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                En TEKO combinamos la solidez de la tierra con la flexibilidad financiera que necesitás. No somos intermediarios, somos desarrolladores comprometidos con el crecimiento de tu patrimonio.
              </p>
              
              <ul className="space-y-6">
                {[
                  "Financiación propia en cuotas fijas.",
                  "Escritura inmediata en todos nuestros desarrollos.",
                  "Equipo de arquitectos para tu proyecto ejecutivo.",
                  "Seguimiento de obra en tiempo real via App."
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-green-400">
                      <TrendingUp size={16} />
                    </div>
                    <span className="text-lg text-slate-200">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <Button variant="secondary" onClick={() => setModalOpen(true)}>Hablar con un Director</Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-20 blur-xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1556912173-3db996ea8c3f?q=80&w=2670&auto=format&fit=crop" 
                alt="TEKO Team" 
                className="relative rounded-2xl shadow-2xl border border-white/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-center text-teko-navy mb-16">Historias TEKO</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-white p-8 rounded-xl shadow-sm border border-slate-100"
              >
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map(s => <div key={s} className="w-4 h-4 text-yellow-400 fill-current">★</div>)}
                </div>
                <p className="text-slate-600 italic mb-6">"{t.text}"</p>
                <div>
                  <h4 className="font-bold text-teko-navy">{t.name}</h4>
                  <span className="text-xs text-slate-400 uppercase tracking-wide">{t.role}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold text-teko-navy mb-6">¿Listo para dar el primer paso?</h2>
          <p className="text-slate-600 mb-10 text-lg">
            La mejor inversión es la tierra. El mejor momento es ahora.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" onClick={() => setModalOpen(true)}>Agendar Asesoría Gratuita</Button>
            <Link to="/calculadora">
              <Button size="lg" variant="outline">Simular Financiación</Button>
            </Link>
          </div>
        </div>
      </section>

      <LeadModal isOpen={modalOpen} onClose={() => setModalOpen(false)} source="Home Bottom CTA" />
    </div>
  );
};