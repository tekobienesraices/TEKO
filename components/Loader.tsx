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
            }, 3000);

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
                    exit={{ opacity: 0, transition: { duration: 1.0, ease: [0.22, 1, 0.36, 1] } }}
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a1628] overflow-hidden"
                >
                    <div className="relative flex flex-col items-center">
                        {/* TEKO Text - Elegant Reveal */}
                        <motion.div
                            className="relative overflow-hidden"
                        >
                            <motion.h1
                                className="text-7xl md:text-8xl font-serif font-light text-white tracking-widest relative z-10"
                                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                transition={{ duration: 1.2, ease: "easeOut" }}
                            >
                                TEKO
                            </motion.h1>
                        </motion.div>

                        {/* Gold Divider Line - Expands smoothly */}
                        <motion.div
                            className="h-[1px] bg-[#D4AF37] mt-8"
                            initial={{ width: 0, opacity: 0 }}
                            animate={{ width: "100px", opacity: 1 }}
                            transition={{ delay: 0.8, duration: 1.2, ease: "easeInOut" }}
                        />

                        {/* Subtitle - Fades in */}
                        <motion.p
                            className="text-[#D4AF37] text-xs md:text-sm tracking-[0.4em] uppercase mt-6 font-medium font-sans"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.8 }}
                            transition={{ delay: 1.5, duration: 1.0 }}
                        >
                            Bienes Raíces
                        </motion.p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
