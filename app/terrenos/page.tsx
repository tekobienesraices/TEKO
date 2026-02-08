import type { Metadata } from 'next';
import TerrenosPage from './TerrenosPage';

export const metadata: Metadata = {
    title: 'Terrenos en Cuotas en Paraguay | Lotes Financiados',
    description: 'Explorá nuestro catálogo de terrenos en cuotas en Capiatá, San Bernardino y zonas de alta plusvalía. Financiación propia hasta 72 meses. Sin bancos, sin burocracia.',
    keywords: [
        'terrenos en cuotas paraguay',
        'lotes en capiatá',
        'terrenos financiados central',
        'comprar terreno sin informconf',
        'lotes baratos paraguay',
        'inversión terrenos 2026',
    ],
    openGraph: {
        title: 'Catálogo de Terrenos en Cuotas | TEKO Paraguay',
        description: 'Lotes premium con financiación propia. Entrega mínima 20%, hasta 72 cuotas.',
        images: ['/properties/costa-salinas-drone-1.jpg'],
    },
};

export default function Page() {
    return <TerrenosPage />;
}
