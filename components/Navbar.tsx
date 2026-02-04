import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, User } from 'lucide-react';
import { Button } from './Button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Terrenos', path: '/terrenos' },
    { name: 'Construcción', path: '/construccion' },
    { name: 'Calculadora', path: '/calculadora' },
    { name: 'Nosotros', path: '/nosotros' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-dark py-3 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/logo-symbol.png"
              alt="TEKO"
              className={`h-14 w-auto object-contain transition-all duration-300 ${scrolled ? 'brightness-0 invert' : ''}`}
            />
            <div className="flex flex-col">
              <span className={`text-2xl font-serif font-bold tracking-tight leading-none ${scrolled ? 'text-white' : 'text-teko-navy'}`}>
                TEKO
              </span>
              <span className={`text-[0.6rem] uppercase tracking-widest font-medium ${scrolled ? 'text-white/60' : 'text-teko-navy/60'}`}>
                Bienes Raíces
              </span>
            </div>
          </Link>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-teko-grey ${scrolled ? 'text-white/90' : 'text-teko-navy'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contacto">
              <Button variant={scrolled ? "secondary" : "primary"} size="sm">
                Contacto
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${scrolled ? 'text-white' : 'text-teko-navy'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass-dark border-t border-white/10 shadow-xl animate-in slide-in-from-top-5">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block px-3 py-3 text-base font-medium text-white hover:bg-white/10 rounded-md"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-white/10">
              <Link to="/contacto" className="block">
                <Button fullWidth variant="secondary">Agendar Asesoría</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};