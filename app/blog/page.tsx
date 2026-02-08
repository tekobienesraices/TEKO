import type { Metadata } from 'next';
import BlogPage from './BlogPage';

export const metadata: Metadata = {
    title: 'Blog | Guía del Inversor Inmobiliario',
    description: 'Artículos, guías y consejos de expertos sobre inversión en terrenos en Paraguay. Todo lo que necesitás saber antes de comprar tu lote.',
    keywords: [
        'guía inversión terrenos',
        'consejos comprar lote paraguay',
        'inversión inmobiliaria 2026',
        'blog bienes raíces',
    ],
    openGraph: {
        title: 'Guía del Inversor | Blog TEKO',
        description: 'Artículos y consejos para invertir con seguridad en terrenos.',
        images: ['/ebook-cover.png'],
    },
};

export default function Page() {
    return <BlogPage />;
}
