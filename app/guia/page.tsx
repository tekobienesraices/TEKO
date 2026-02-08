import type { Metadata } from 'next';
import GuiaPage from './GuiaPage';

export const metadata: Metadata = {
    title: 'Guía Gratuita | Secretos Para Comprar Tu Terreno',
    description: 'Descargá gratis nuestra guía con los secretos para no equivocarte al comprar tu lote en Paraguay. Sin letras chicas, directo al punto.',
    keywords: [
        'guía comprar terreno',
        'consejos comprar lote paraguay',
        'errores comprar terreno',
        'ebook inversión inmobiliaria',
    ],
    openGraph: {
        title: 'Guía Gratuita: Cómo Comprar tu Terreno Sin Errores',
        description: 'Todo lo que necesitás saber antes de invertir en tierra.',
        images: ['/ebook-cover.png'],
    },
};

export default function Page() {
    return <GuiaPage />;
}
