import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ZonaPage from './ZonaPage';
import { zones, getPropertiesByZone } from '@/data';

interface Props {
    params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
    return zones.map((zone) => ({
        id: zone.id,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;
    const zone = zones.find(z => z.id === id);

    if (!zone) {
        return {
            title: 'Zona no encontrada',
        };
    }

    const properties = getPropertiesByZone(id);
    const minPrice = properties.length > 0 ? Math.min(...properties.map(p => p.price)) : 0;

    return {
        title: `Terrenos en ${zone.name} | Lotes desde Gs. ${minPrice.toLocaleString()}`,
        description: `${zone.description || zone.tagline}. Lotes disponibles con financiación propia hasta 72 meses. ${zone.highlights.slice(0, 3).join(', ')}.`,
        keywords: [
            `terrenos ${zone.name.toLowerCase()}`,
            'lotes en cuotas',
            'inversión terrenos paraguay',
            `comprar lote ${zone.name.toLowerCase()}`,
        ],
        openGraph: {
            title: `Terrenos en ${zone.name} | TEKO`,
            description: `Lotes desde Gs. ${minPrice.toLocaleString()} con financiación propia.`,
            images: [zone.heroImage],
        },
    };
}

export default async function Page({ params }: Props) {
    const { id } = await params;
    const zone = zones.find(z => z.id === id);

    if (!zone) {
        notFound();
    }

    const properties = getPropertiesByZone(id);

    // JSON-LD for Place schema
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Place',
        name: zone.name,
        description: zone.description || zone.tagline,
        image: zone.heroImage,
        geo: {
            '@type': 'GeoCoordinates',
            latitude: '-25.3',
            longitude: '-57.5',
        },
        address: {
            '@type': 'PostalAddress',
            addressLocality: zone.name,
            addressRegion: 'Central',
            addressCountry: 'Paraguay',
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ZonaPage zone={zone} properties={properties} />
        </>
    );
}
