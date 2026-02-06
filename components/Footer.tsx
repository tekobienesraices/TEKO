import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, Mail, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-teko-navy text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img
                src="/logo-vertical-white.png"
                alt="TEKO"
                className="h-40 w-auto object-contain"
              />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Redefiniendo el futuro inmobiliario. Terrenos premium financiados y arquitectura de autor para quienes exigen lo mejor.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/teko.bienesraices" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="https://tiktok.com/@teko.bienesraices" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" /></svg>
              </a>
              <a href="https://facebook.com/tekobienesraices" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Explorar</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link to="/terrenos" className="hover:text-white transition-colors">Catálogo de Terrenos</Link></li>
              <li><Link to="/construccion" className="hover:text-white transition-colors">Constructora TEKO</Link></li>
              <li><Link to="/calculadora" className="hover:text-white transition-colors">Simulador de Cuotas</Link></li>
              <li><Link to="/inversion" className="hover:text-white transition-colors">Inversores</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Guía del Inversor</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link to="/privacidad" className="hover:text-white transition-colors">Política de Privacidad</Link></li>
              <li><Link to="/terminos" className="hover:text-white transition-colors">Términos y Condiciones</Link></li>
              <li><Link to="/cookies" className="hover:text-white transition-colors">Política de Cookies</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contacto</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-center gap-3">
                <Phone size={18} className="flex-shrink-0" />
                <span>+595 974 202 163</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="flex-shrink-0" />
                <span>tekobienesraices@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} TEKO Bienes Raíces. Todos los derechos reservados.</p>
          <p className="mt-2 md:mt-0">Diseñado con excelencia.</p>
        </div>
      </div>
    </footer>
  );
};