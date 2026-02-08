'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';
import Link from 'next/link';
import { blogPosts } from '@/data';
import { Button } from '@/components/Button';

export default function BlogPage() {
    return (
        <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-teko-gold font-bold uppercase tracking-widest text-sm"
                    >
                        Guía del Inversor
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-serif font-bold text-teko-navy mt-4 mb-6"
                    >
                        Todo lo que necesitás saber <br />sobre terrenos en Paraguay
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-600 text-lg"
                    >
                        Artículos, guías y consejos de expertos para asegurar tu inversión y construir tu legado.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full"
                        >
                            <Link href={`/blog/${post.id}`} className="block aspect-video overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </Link>
                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex items-center gap-4 mb-4 text-xs font-semibold text-slate-400 uppercase tracking-widest">
                                    <span className="px-2 py-1 bg-teko-navy/5 text-teko-navy rounded">
                                        {post.category}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Clock size={14} /> {post.readTime}
                                    </span>
                                </div>
                                <h2 className="text-2xl font-bold text-teko-navy mb-4 hover:text-teko-gold transition-colors">
                                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                                </h2>
                                <p className="text-slate-600 mb-6 flex-grow">
                                    {post.excerpt}
                                </p>
                                <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-teko-navy text-white flex items-center justify-center text-[10px] font-bold">
                                            {post.author.charAt(0)}
                                        </div>
                                        <span className="text-sm font-medium text-slate-700">{post.author}</span>
                                    </div>
                                    <Link href={`/blog/${post.id}`} className="text-teko-navy hover:text-teko-gold transition-colors">
                                        <ArrowRight size={20} />
                                    </Link>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* Newsletter / CTA */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mt-20 bg-teko-navy rounded-3xl p-12 text-center text-white relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-teko-gold/10 rounded-full blur-3xl -mr-32 -mt-32" />
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-3xl font-serif font-bold mb-4">¿Querés recibir oportunidades antes que nadie?</h2>
                        <p className="text-slate-300 mb-8 text-lg">
                            Suscribite a nuestro boletín de inversores y recibí lanzamientos exclusivos y consejos del mercado inmobiliario.
                        </p>
                        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Tu correo electrónico"
                                className="flex-grow px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-teko-gold transition-all"
                            />
                            <Button variant="gold" className="whitespace-nowrap">Unirme a la lista</Button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
