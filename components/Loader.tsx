'use client';

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
                        {/* Logo Image - Elegant Reveal */}
                        <motion.div
                            className="relative overflow-hidden"
                            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                        >
                            <img
                                src="/logo-loader.png"
                                alt="TEKO Bienes Raíces"
                                className="w-48 md:w-64 h-auto object-contain"
                            />
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
