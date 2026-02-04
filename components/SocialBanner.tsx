import React from 'react';
import { Instagram } from 'lucide-react';

export const SocialBanner: React.FC = () => {
    return (
        <section className="py-16 bg-gradient-to-r from-teko-navy via-slate-800 to-teko-navy relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                    {/* Text Content */}
                    <div className="text-center lg:text-left">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                            Seguinos en Redes Sociales
                        </h2>
                        <p className="text-slate-300 text-lg max-w-xl">
                            Descubrí terrenos exclusivos, tours virtuales y contenido premium sobre inversión inmobiliaria.
                        </p>
                    </div>

                    {/* Social Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        {/* Instagram */}
                        <a
                            href="https://instagram.com/teko.bienesraices"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-3 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white px-6 py-4 rounded-xl font-semibold shadow-lg hover:shadow-pink-500/30 hover:scale-105 transition-all duration-300"
                        >
                            <Instagram size={24} />
                            <div className="flex flex-col items-start">
                                <span className="text-xs opacity-80">Seguinos en</span>
                                <span className="text-lg font-bold">Instagram</span>
                            </div>
                        </a>

                        {/* TikTok */}
                        <a
                            href="https://tiktok.com/@teko.bienesraices"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-3 bg-black text-white px-6 py-4 rounded-xl font-semibold shadow-lg hover:shadow-white/20 hover:scale-105 transition-all duration-300 border border-white/10"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                            </svg>
                            <div className="flex flex-col items-start">
                                <span className="text-xs opacity-80">Seguinos en</span>
                                <span className="text-lg font-bold">TikTok</span>
                            </div>
                        </a>
                    </div>
                </div>

                {/* Stats Row */}
                <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    <div>
                        <div className="text-3xl font-bold text-white">500+</div>
                        <div className="text-slate-400 text-sm">Familias Felices</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-white">50+</div>
                        <div className="text-slate-400 text-sm">Terrenos Disponibles</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-white">10+</div>
                        <div className="text-slate-400 text-sm">Años de Experiencia</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-white">100%</div>
                        <div className="text-slate-400 text-sm">Financiación Propia</div>
                    </div>
                </div>
            </div>
        </section>
    );
};
