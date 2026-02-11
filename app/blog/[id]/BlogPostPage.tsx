'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Clock, Share2, Facebook, Twitter } from 'lucide-react';
import Link from 'next/link';
import { blogPosts, BlogPost } from '@/data';
import * as fp from '@/lib/fpixel';


interface Props {
    post: BlogPost;
}

export default function BlogPostPage({ post }: Props) {
    return (
        <div className="pt-24 pb-20 bg-white">
            {/* Hero Header */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <Link href="/blog" className="inline-flex items-center gap-2 text-slate-500 hover:text-teko-navy transition-colors mb-8 group">
                    <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                    Volver a la Guía del Inversor
                </Link>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <span className="px-3 py-1 bg-teko-navy/5 text-teko-navy rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block">
                        {post.category}
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-teko-navy leading-tight mb-8">
                        {post.title}
                    </h1>
                    <div className="flex flex-wrap items-center gap-6 text-slate-500 text-sm border-b border-slate-100 pb-8">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-full bg-teko-navy text-white flex items-center justify-center font-bold">
                                {post.author.charAt(0)}
                            </div>
                            <div>
                                <span className="block font-bold text-teko-navy">{post.author}</span>
                                <span className="text-xs">Estratega Inmobiliario</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            {post.date}
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock size={16} />
                            {post.readTime} de lectura
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Main Image */}
            <div className="max-w-5xl mx-auto px-4 mb-16">
                <motion.img
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    src={post.image}
                    alt={post.title}
                    className="w-full aspect-[21/9] object-cover rounded-3xl shadow-2xl"
                />
            </div>

            {/* Content */}
            <div className="max-w-3xl mx-auto px-4 flex flex-col md:flex-row gap-12">
                <div className="md:w-full prose prose-slate prose-lg">
                    <p className="text-xl text-slate-600 leading-relaxed font-medium mb-10">
                        {post.excerpt}
                    </p>
                    <div className="text-slate-700 leading-relaxed space-y-6 blog-content">
                        {/* Render HTML content safely since it comes from our internal data file */}
                        <div
                            dangerouslySetInnerHTML={{ __html: post.content }}
                            className="prose prose-slate prose-lg max-w-none prose-headings:font-serif prose-headings:font-bold prose-headings:text-teko-navy prose-a:text-teko-gold prose-strong:text-teko-navy"
                        />
                    </div>

                    <div className="mt-16 pt-8 border-t border-slate-100 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <span className="text-sm font-bold text-teko-navy uppercase tracking-wider">Compartir:</span>
                            <a
                                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => fp.customEvent('SocialShare', { platform: 'facebook', post: post.title })}
                                className="p-2 hover:bg-slate-100 rounded-full transition-colors text-[#1877F2]"
                            >
                                <Facebook size={20} />
                            </a>
                            <a
                                href={`https://www.instagram.com/teko.bienesraices`}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => fp.customEvent('SocialClick', { platform: 'instagram_profile', location: 'blog_footer' })}
                                className="p-2 hover:bg-slate-100 rounded-full transition-colors text-[#E4405F]"
                            >
                                <Share2 size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Related Posts */}
            <section className="bg-slate-50 py-20 mt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-serif font-bold text-teko-navy mb-12">Artículos relacionados</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {blogPosts.filter(p => p.id !== post.id).slice(0, 3).map((p) => (
                            <Link key={p.id} href={`/blog/${p.id}`} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all group">
                                <div className="aspect-video overflow-hidden">
                                    <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                                </div>
                                <div className="p-6">
                                    <h3 className="font-bold text-teko-navy group-hover:text-teko-gold transition-colors">{p.title}</h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
