import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Loader } from '@/components/Loader';
import { MessageCircle } from 'lucide-react';
import { FacebookPixel } from '@/components/FacebookPixel';
import { Suspense } from 'react';
import * as fp from '@/lib/fpixel';


const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-playfair',
    display: 'swap',
});

export const metadata: Metadata = {
    metadataBase: new URL('https://www.tekobienesraicespy.com'),
    title: {
        default: 'Terrenos en Cuotas en Paraguay | Lotes Financiados #1 - TEKO',
        template: '%s | TEKO Bienes Raíces',
    },
    description: 'TEKO Bienes Raíces: Líderes en terrenos en cuotas en Paraguay. Lotes financiados con entrega mínima en Capiatá, San Bernardino y zonas de alta plusvalía. ¡Tu futuro empieza hoy!',
    keywords: [
        'terrenos en cuotas paraguay',
        'lotes financiados paraguay',
        'terrenos en capiatá',
        'lotes en cuotas central',
        'inversión inmobiliaria paraguay',
        'comprar terreno sin informconf',
        'terrenos baratos paraguay 2026',
        'financiación propia lotes',
    ],
    authors: [{ name: 'TEKO Bienes Raíces' }],
    creator: 'TEKO Bienes Raíces',
    publisher: 'TEKO Bienes Raíces',
    openGraph: {
        type: 'website',
        locale: 'es_PY',
        url: 'https://www.tekobienesraicespy.com',
        siteName: 'TEKO Bienes Raíces',
        title: 'Terrenos en Cuotas y Lotes Financiados en Paraguay | TEKO',
        description: 'Accedé a terrenos exclusivos con financiación propia. Cuotas fijas, sin letra chica. Capiatá, San Bernardino y más.',
        images: [
            {
                url: '/logo-vertical.png',
                width: 800,
                height: 600,
                alt: 'TEKO Bienes Raíces - Terrenos en Paraguay',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Terrenos en Cuotas y Lotes Financiados en Paraguay | TEKO',
        description: 'Tu terreno propio con financiación flexible en las mejores zonas de Paraguay.',
        images: ['/logo-vertical.png'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: 'your-google-verification-code',
    },
    alternates: {
        canonical: 'https://www.tekobienesraicespy.com',
    },
    icons: {
        icon: '/icon.png',
        shortcut: '/favicon.ico',
        apple: '/apple-icon.png',
    },
};

export const viewport: Viewport = {
    themeColor: '#0c1c2e',
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
};

// JSON-LD Structured Data
const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'RealEstateAgent',
            '@id': 'https://www.tekobienesraicespy.com/#organization',
            name: 'TEKO Bienes Raíces',
            url: 'https://www.tekobienesraicespy.com',
            logo: 'https://www.tekobienesraicespy.com/logo-symbol.png',
            image: 'https://www.tekobienesraicespy.com/logo-vertical.png',
            description: 'Líderes en venta de terrenos financiados en Paraguay. Capiatá, San Bernardino, Areguá y zonas de alta plusvalía del Departamento Central.',
            address: {
                '@type': 'PostalAddress',
                addressCountry: 'PY',
                addressRegion: 'Central',
                addressLocality: 'Capiatá',
            },
            geo: {
                '@type': 'GeoCoordinates',
                latitude: -25.3548,
                longitude: -57.4467,
            },
            telephone: '+595974202163',
            email: 'tekobienesraices@gmail.com',
            priceRange: 'Gs. 81.000.000 - Gs. 135.000.000',
            areaServed: {
                '@type': 'GeoCircle',
                geoMidpoint: {
                    '@type': 'GeoCoordinates',
                    latitude: -25.3,
                    longitude: -57.5,
                },
                geoRadius: '50000',
            },
            sameAs: [
                'https://instagram.com/teko.bienesraices',
                'https://tiktok.com/@teko.bienesraices',
                'https://facebook.com/tekobienesraices',
            ],
        },
        {
            '@type': 'LocalBusiness',
            '@id': 'https://www.tekobienesraicespy.com/#localbusiness',
            name: 'TEKO Bienes Raíces',
            image: 'https://www.tekobienesraicespy.com/logo-vertical.png',
            priceRange: 'Gs. 81.000.000 - Gs. 135.000.000',
            address: {
                '@type': 'PostalAddress',
                addressCountry: 'Paraguay',
                addressRegion: 'Central',
                addressLocality: 'Capiatá',
            },
            telephone: '+595974202163',
            openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                opens: '08:00',
                closes: '18:00',
            },
        },
        {
            '@type': 'WebSite',
            '@id': 'https://www.tekobienesraicespy.com/#website',
            url: 'https://www.tekobienesraicespy.com',
            name: 'TEKO Bienes Raíces',
            description: 'Terrenos en cuotas y lotes financiados en Paraguay',
            publisher: {
                '@id': 'https://www.tekobienesraicespy.com/#organization',
            },
            potentialAction: {
                '@type': 'SearchAction',
                target: 'https://www.tekobienesraicespy.com/terrenos?q={search_term_string}',
                'query-input': 'required name=search_term_string',
            },
        },
    ],
};

const WhatsAppButton = () => (
    <a
        href="https://wa.me/595974202163"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => {
            fp.customEvent('WhatsAppClick', {
                location: 'Floating Button',
                source: 'GlobalLayout'
            });
            // Also standard Lead event if you want, but custom is better for noise
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

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className="bg-slate-50 text-teko-navy antialiased selection:bg-teko-navy selection:text-white font-sans">
                <Suspense fallback={null}>
                    <FacebookPixel />
                </Suspense>
                <Loader />
                <div className="flex flex-col min-h-screen">
                    <Navbar />
                    <main className="flex-grow">{children}</main>
                    <Footer />
                    <WhatsAppButton />
                </div>
            </body>
        </html>
    );
}
