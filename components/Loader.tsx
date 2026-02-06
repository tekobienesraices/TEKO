import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Loader: React.FC = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [isFirstVisit, setIsFirstVisit] = useState(false);

    useEffect(() => {
        // Check if it's the first visit in this session
        const hasVisited = sessionStorage.getItem('teko-visited');

        if (!hasVisited) {
            setIsFirstVisit(true);
            sessionStorage.setItem('teko-visited', 'true');

            // Auto-hide after animation completes
            const timer = setTimeout(() => {
                setIsVisible(false);
            }, 3500);

            return () => clearTimeout(timer);
        } else {
            setIsVisible(false);
        }
    }, []);

    if (!isFirstVisit) return null;

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
                    style={{
                        background: 'linear-gradient(135deg, #0a1628 0%, #0c1c2e 50%, #132d4a 100%)'
                    }}
                >
                    {/* Animated background particles */}
                    <div className="absolute inset-0 overflow-hidden">
                        {[...Array(20)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-1 h-1 bg-teko-gold/30 rounded-full"
                                initial={{
                                    x: Math.random() * window.innerWidth,
                                    y: Math.random() * window.innerHeight,
                                    scale: 0,
                                }}
                                animate={{
                                    y: [null, -100],
                                    scale: [0, 1, 0],
                                    opacity: [0, 0.8, 0],
                                }}
                                transition={{
                                    duration: 3 + Math.random() * 2,
                                    repeat: Infinity,
                                    delay: Math.random() * 2,
                                    ease: 'linear',
                                }}
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${50 + Math.random() * 50}%`,
                                }}
                            />
                        ))}
                    </div>

                    {/* Subtle gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-teko-navy/50 via-transparent to-transparent" />

                    {/* Radial glow effect */}
                    <motion.div
                        className="absolute w-[600px] h-[600px] rounded-full"
                        style={{
                            background: 'radial-gradient(circle, rgba(212,175,55,0.15) 0%, transparent 70%)',
                        }}
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    />

                    {/* Main content container */}
                    <div className="relative z-10 flex flex-col items-center">
                        {/* Logo container with golden border animation */}
                        <motion.div
                            className="relative mb-8"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                        >
                            {/* Rotating golden ring */}
                            <motion.div
                                className="absolute -inset-4 rounded-full"
                                style={{
                                    background: 'conic-gradient(from 0deg, transparent, #D4AF37, transparent)',
                                    filter: 'blur(2px)',
                                }}
                                animate={{ rotate: 360 }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: 'linear',
                                }}
                            />

                            {/* Inner glow */}
                            <motion.div
                                className="absolute -inset-2 rounded-full bg-teko-gold/20"
                                animate={{
                                    scale: [1, 1.1, 1],
                                    opacity: [0.2, 0.4, 0.2],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                            />

                            {/* Logo */}
                            <motion.div
                                className="relative bg-teko-navy rounded-full p-6"
                                initial={{ rotateY: 0 }}
                                animate={{ rotateY: [0, 5, -5, 0] }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                            >
                                <img
                                    src="/logo-symbol.png"
                                    alt="TEKO"
                                    className="w-20 h-20 object-contain brightness-0 invert"
                                />
                            </motion.div>
                        </motion.div>

                        {/* Brand name with staggered letter animation */}
                        <motion.div
                            className="overflow-hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                        >
                            <div className="flex items-center gap-1">
                                {['T', 'E', 'K', 'O'].map((letter, idx) => (
                                    <motion.span
                                        key={idx}
                                        className="text-5xl md:text-6xl font-serif font-bold text-white tracking-wider"
                                        initial={{ y: 60, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{
                                            delay: 0.6 + idx * 0.1,
                                            duration: 0.6,
                                            ease: [0.22, 1, 0.36, 1],
                                        }}
                                    >
                                        {letter}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Tagline with fade in */}
                        <motion.p
                            className="text-teko-gold/80 text-sm md:text-base tracking-[0.3em] uppercase mt-4 font-medium"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2, duration: 0.8 }}
                        >
                            Bienes Raíces
                        </motion.p>

                        {/* Elegant loading bar */}
                        <motion.div
                            className="mt-10 w-48 h-[2px] bg-white/10 rounded-full overflow-hidden"
                            initial={{ opacity: 0, scaleX: 0 }}
                            animate={{ opacity: 1, scaleX: 1 }}
                            transition={{ delay: 1.5, duration: 0.5 }}
                        >
                            <motion.div
                                className="h-full bg-gradient-to-r from-teko-gold via-yellow-300 to-teko-gold rounded-full"
                                initial={{ x: '-100%' }}
                                animate={{ x: '100%' }}
                                transition={{
                                    delay: 1.7,
                                    duration: 1.5,
                                    ease: 'easeInOut',
                                }}
                            />
                        </motion.div>

                        {/* Premium subtitle */}
                        <motion.p
                            className="text-white/40 text-xs tracking-widest uppercase mt-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2, duration: 0.6 }}
                        >
                            Tu legado en Paraguay
                        </motion.p>
                    </div>

                    {/* Corner decorations */}
                    <motion.div
                        className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-teko-gold/30"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                    />
                    <motion.div
                        className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-teko-gold/30"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.9, duration: 0.6 }}
                    />
                    <motion.div
                        className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-teko-gold/30"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1, duration: 0.6 }}
                    />
                    <motion.div
                        className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-teko-gold/30"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.1, duration: 0.6 }}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
};
