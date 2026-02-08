import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PropiedadPage from './PropiedadPage';
import { properties, zones } from '@/data';

interface Props {
    params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
    return properties.map((prop) => ({
        id: prop.id,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;
    const property = properties.find(p => p.id === id);

    if (!property) {
        return {
            title: 'Propiedad no encontrada',
        };
    }

    const zone = zones.find(z => z.id === property.zoneId);

    return {
        title: `${property.title} | Terreno en ${zone?.name || 'Paraguay'}`,
        description: `${property.description} ${property.size}m² en ${property.location}. Cuota desde Gs. ${property.monthlyPayment.toLocaleString()}.`,
        keywords: [
            `terreno ${zone?.name?.toLowerCase()}`,
            'lote en cuotas',
            'terreno capiatá',
            `${property.size}m² terreno`,
        ],
        openGraph: {
            title: property.title,
            description: `Lote de ${property.size}m² en ${property.location}. Financiación propia.`,
            images: [property.image],
            type: 'website',
        },
    };
}

export default async function Page({ params }: Props) {
    const { id } = await params;
    const property = properties.find(p => p.id === id);

    if (!property) {
        notFound();
    }

    const zone = zones.find(z => z.id === property.zoneId);

    // JSON-LD for RealEstateListing schema
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'RealEstateListing',
        name: property.title,
        description: property.description,
        image: property.image,
        url: `https://teko.com.py/propiedad/${property.id}`,
        offers: {
            '@type': 'Offer',
            price: property.price,
            priceCurrency: 'PYG',
            availability: property.status === 'available' ? 'InStock' : 'SoldOut',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: property.coordinates.lat,
            longitude: property.coordinates.lng,
        },
        address: {
            '@type': 'PostalAddress',
            addressLocality: zone?.name || 'Capiatá',
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
            <PropiedadPage property={property} zone={zone} />
        </>
    );
}
