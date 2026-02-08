import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Política de Privacidad | TEKO Bienes Raíces',
    description: 'Conocé cómo TEKO Bienes Raíces protege tus datos personales y tu privacidad.',
};

export default function PrivacidadPage() {
    return (
        <div className="pt-24 pb-20 bg-white min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-serif font-bold text-teko-navy mb-8">Política de Privacidad</h1>

                <div className="prose prose-slate prose-lg max-w-none">
                    <p className="text-slate-600 mb-6">
                        Última actualización: Febrero 2026
                    </p>

                    <h2 className="text-2xl font-bold text-teko-navy mt-8 mb-4">1. Información que Recopilamos</h2>
                    <p className="text-slate-600 mb-4">
                        En TEKO Bienes Raíces recopilamos información que usted nos proporciona directamente, incluyendo:
                    </p>
                    <ul className="list-disc pl-6 text-slate-600 mb-6">
                        <li>Nombre completo y datos de contacto</li>
                        <li>Número de cédula de identidad</li>
                        <li>Información financiera para evaluación de crédito</li>
                        <li>Preferencias de búsqueda de propiedades</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-teko-navy mt-8 mb-4">2. Uso de la Información</h2>
                    <p className="text-slate-600 mb-4">
                        Utilizamos su información para:
                    </p>
                    <ul className="list-disc pl-6 text-slate-600 mb-6">
                        <li>Procesar sus solicitudes de información sobre propiedades</li>
                        <li>Evaluar su elegibilidad para financiación</li>
                        <li>Comunicarnos con usted sobre oportunidades de inversión</li>
                        <li>Mejorar nuestros servicios</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-teko-navy mt-8 mb-4">3. Protección de Datos</h2>
                    <p className="text-slate-600 mb-6">
                        Implementamos medidas de seguridad técnicas y organizativas para proteger su información personal contra acceso no autorizado, pérdida o alteración.
                    </p>

                    <h2 className="text-2xl font-bold text-teko-navy mt-8 mb-4">4. Sus Derechos</h2>
                    <p className="text-slate-600 mb-4">
                        Usted tiene derecho a:
                    </p>
                    <ul className="list-disc pl-6 text-slate-600 mb-6">
                        <li>Acceder a sus datos personales</li>
                        <li>Solicitar corrección de información inexacta</li>
                        <li>Solicitar eliminación de sus datos</li>
                        <li>Retirar su consentimiento en cualquier momento</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-teko-navy mt-8 mb-4">5. Contacto</h2>
                    <p className="text-slate-600 mb-6">
                        Para ejercer sus derechos o consultas sobre privacidad, contáctenos:
                    </p>
                    <p className="text-slate-600">
                        Email: <a href="mailto:info@teko.com.py" className="text-teko-gold hover:underline">info@teko.com.py</a><br />
                        WhatsApp: <a href="https://wa.me/595974202163" className="text-teko-gold hover:underline">+595 974 202 163</a>
                    </p>
                </div>

                <div className="mt-12 pt-8 border-t border-slate-200">
                    <Link href="/" className="text-teko-navy hover:text-teko-gold transition-colors">
                        ← Volver al inicio
                    </Link>
                </div>
            </div>
        </div>
    );
}
