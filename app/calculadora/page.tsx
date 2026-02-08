import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import CalculadoraPage from './CalculadoraPage';

export const metadata: Metadata = {
    title: 'Calculadora de Cuotas | Simulador de Financiación',
    description: 'Simulá tu plan de financiación para terrenos en Paraguay. Calculá tu cuota mensual, entrega inicial y plazo. Sin bancos, financiación propia hasta 72 meses.',
    keywords: [
        'calculadora terrenos paraguay',
        'simulador cuotas lotes',
        'financiación terrenos',
        'cuotas fijas guaraníes',
        'plan de pago terreno',
    ],
    openGraph: {
        title: 'Calculadora de Financiación de Terrenos | TEKO',
        description: 'Armá tu plan de pago personalizado. Cuotas desde Gs. 900.000.',
        images: ['/ebook-cover.png'],
    },
};

export default function Page() {
    return (
        <Suspense fallback={<div className="pt-24 min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-4 border-teko-navy border-t-transparent rounded-full animate-spin"></div></div>}>
            <CalculadoraPage />
        </Suspense>
    );
}
