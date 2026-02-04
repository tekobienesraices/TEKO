import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, MapPin, Mail, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-teko-navy text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-tr-lg rounded-bl-lg bg-gradient-to-tr from-white to-teko-grey"></div>
              <span className="text-xl font-serif font-bold">TEKO</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Redefiniendo el futuro inmobiliario. Terrenos premium financiados y arquitectura de autor para quienes exigen lo mejor.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
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
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>Av. del Libertador 1000, Piso 12<br />Buenos Aires, Argentina</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="flex-shrink-0" />
                <span>+54 9 11 1234-5678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="flex-shrink-0" />
                <span>hola@tekorealestate.com</span>
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