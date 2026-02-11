'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import * as fp from '@/lib/fpixel';

export const WhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/595974202163"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
                fp.customEvent('WhatsAppClick', {
                    location: 'Floating Button',
                    source: 'GlobalLayout'
                });
            }}
            className="fixed bottom-8 right-8 z-50 group flex items-center justify-center"
            aria-label="Contactar por WhatsApp"
        >
            <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-25 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative bg-gradient-to-tr from-green-600 to-green-400 text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/50 transition-all duration-300 transform group-hover:-translate-y-1 group-hover:scale-110">
                <MessageCircle size={28} className="drop-shadow-sm" />
            </div>
        </a>
    );
};
