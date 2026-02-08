import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Términos y Condiciones | TEKO Bienes Raíces',
    description: 'Términos y condiciones de uso del sitio web y servicios de TEKO Bienes Raíces.',
};

export default function TerminosPage() {
    return (
        <div className="pt-24 pb-20 bg-white min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-serif font-bold text-teko-navy mb-8">Términos y Condiciones</h1>

                <div className="prose prose-slate prose-lg max-w-none">
                    <p className="text-slate-600 mb-6">
                        Última actualización: Febrero 2026
                    </p>

                    <h2 className="text-2xl font-bold text-teko-navy mt-8 mb-4">1. Aceptación de Términos</h2>
                    <p className="text-slate-600 mb-6">
                        Al acceder y utilizar el sitio web de TEKO Bienes Raíces, usted acepta estos términos y condiciones en su totalidad. Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestro sitio.
                    </p>

                    <h2 className="text-2xl font-bold text-teko-navy mt-8 mb-4">2. Servicios</h2>
                    <p className="text-slate-600 mb-6">
                        TEKO Bienes Raíces ofrece servicios de intermediación inmobiliaria, venta de terrenos y financiación propia. Toda la información proporcionada en este sitio es de carácter informativo y no constituye una oferta vinculante.
                    </p>

                    <h2 className="text-2xl font-bold text-teko-navy mt-8 mb-4">3. Precios y Disponibilidad</h2>
                    <p className="text-slate-600 mb-6">
                        Los precios mostrados son referenciales y pueden variar. La disponibilidad de lotes está sujeta a confirmación al momento de la reserva. TEKO se reserva el derecho de modificar precios sin previo aviso.
                    </p>

                    <h2 className="text-2xl font-bold text-teko-navy mt-8 mb-4">4. Financiación</h2>
                    <p className="text-slate-600 mb-6">
                        Las condiciones de financiación están sujetas a evaluación crediticia. Los plazos, tasas y cuotas mostrados son ilustrativos y pueden variar según el perfil del cliente y las políticas vigentes.
                    </p>

                    <h2 className="text-2xl font-bold text-teko-navy mt-8 mb-4">5. Propiedad Intelectual</h2>
                    <p className="text-slate-600 mb-6">
                        Todo el contenido de este sitio web, incluyendo textos, imágenes, logos y diseños, es propiedad de TEKO Bienes Raíces y está protegido por las leyes de propiedad intelectual.
                    </p>

                    <h2 className="text-2xl font-bold text-teko-navy mt-8 mb-4">6. Limitación de Responsabilidad</h2>
                    <p className="text-slate-600 mb-6">
                        TEKO no será responsable por daños directos o indirectos derivados del uso de este sitio web o de decisiones tomadas basándose en la información aquí proporcionada.
                    </p>

                    <h2 className="text-2xl font-bold text-teko-navy mt-8 mb-4">7. Jurisdicción</h2>
                    <p className="text-slate-600 mb-6">
                        Estos términos se rigen por las leyes de la República del Paraguay. Cualquier disputa será resuelta por los tribunales competentes de Asunción.
                    </p>

                    <h2 className="text-2xl font-bold text-teko-navy mt-8 mb-4">8. Contacto</h2>
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
