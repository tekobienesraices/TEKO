import type { Metadata } from 'next';
import ContactoPage from './ContactoPage';

export const metadata: Metadata = {
    title: 'Contacto | Asesoría Gratuita de Terrenos',
    description: 'Contactá a TEKO Bienes Raíces para asesoría gratuita sobre terrenos en cuotas en Paraguay. WhatsApp +595 974 202 163. Respuesta inmediata.',
    keywords: [
        'contacto teko',
        'inmobiliaria paraguay contacto',
        'asesoría terrenos gratis',
        'whatsapp inmobiliaria',
    ],
    openGraph: {
        title: 'Contacto TEKO | Asesoría Inmobiliaria Gratuita',
        description: 'Agendá tu visita a los terrenos. Sin compromiso.',
        images: ['/logo-vertical.png'],
    },
};

// FAQ Schema for Contact page
const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: '¿Necesito estar en Informconf limpio para comprar?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'No. En TEKO ofrecemos financiación propia. No miramos tu Informconf, solo validamos tu capacidad de pago real.',
            },
        },
        {
            '@type': 'Question',
            name: '¿Cuáles son los requisitos mínimos?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Solo necesitás tu Cédula de Identidad y un comprobante de ingresos (certificado de trabajo, boleta de IPS o IVA).',
            },
        },
        {
            '@type': 'Question',
            name: '¿Puedo visitar los terrenos los fines de semana?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: '¡Sí! Realizamos visitas guiadas todos los sábados y domingos. Agendá tu visita al WhatsApp.',
            },
        },
        {
            '@type': 'Question',
            name: '¿Cuándo me entregan el terreno?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'La posesión es inmediata al firmar el contrato y realizar la entrega inicial. Podés empezar a usarlo desde el día 1.',
            },
        },
    ],
};

export default function Page() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />
            <ContactoPage />
        </>
    );
}
