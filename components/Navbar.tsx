'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { Button } from './Button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Terrenos', path: '/terrenos' },
    { name: 'Inversión', path: '/blog' },
    { name: 'Calculadora', path: '/calculadora' },
    { name: 'Nosotros', path: '/' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md py-3 shadow-md' : isHome ? 'bg-transparent py-6' : 'bg-white/95 backdrop-blur-md py-4 shadow-md'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo-horizontal.png"
              alt="TEKO Bienes Raíces"
              width={160}
              height={64}
              priority
              className={`h-16 w-auto object-contain transition-all duration-300 cursor-pointer ${!scrolled && isHome ? 'brightness-0 invert' : ''}`}
            />
          </Link>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`text-sm font-medium transition-colors hover:text-teko-gold ${!scrolled && isHome ? 'text-white/90' : 'text-teko-navy'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/contacto">
              <Button variant={!scrolled && isHome ? "gold" : "primary"} size="sm" className="font-bold tracking-tight px-6">
                Contacto
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${!scrolled && isHome ? 'text-white' : 'text-teko-navy'}`}
              aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
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
                href={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-base font-medium text-white hover:bg-white/10 rounded-md"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-white/10">
              <Link href="/contacto" className="block">
                <Button fullWidth variant="primary">Agendar Asesoría</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};