import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Política de Cookies | TEKO Bienes Raíces',
    description: 'Información sobre el uso de cookies en el sitio web de TEKO Bienes Raíces.',
};

export default function CookiesPage() {
    return (
        <div className="pt-24 pb-20 bg-white min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-serif font-bold text-teko-navy mb-8">Política de Cookies</h1>

                <div className="prose prose-slate prose-lg max-w-none">
                    <p className="text-slate-600 mb-6">
                        Última actualización: Febrero 2026
                    </p>

                    <h2 className="text-2xl font-bold text-teko-navy mt-8 mb-4">¿Qué son las cookies?</h2>
                    <p className="text-slate-600 mb-6">
                        Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita nuestro sitio web. Nos ayudan a mejorar su experiencia de navegación y a entender cómo interactúa con nuestro contenido.
                    </p>

                    <h2 className="text-2xl font-bold text-teko-navy mt-8 mb-4">Tipos de cookies que utilizamos</h2>

                    <h3 className="text-xl font-bold text-teko-navy mt-6 mb-3">Cookies esenciales</h3>
                    <p className="text-slate-600 mb-4">
                        Necesarias para el funcionamiento básico del sitio. No se pueden desactivar.
                    </p>

                    <h3 className="text-xl font-bold text-teko-navy mt-6 mb-3">Cookies de análisis</h3>
                    <p className="text-slate-600 mb-4">
                        Nos ayudan a entender cómo los visitantes interactúan con el sitio mediante la recopilación de información anónima.
                    </p>

                    <h3 className="text-xl font-bold text-teko-navy mt-6 mb-3">Cookies de marketing</h3>
                    <p className="text-slate-600 mb-6">
                        Se utilizan para mostrarle anuncios relevantes basados en sus intereses.
                    </p>

                    <h2 className="text-2xl font-bold text-teko-navy mt-8 mb-4">Gestión de cookies</h2>
                    <p className="text-slate-600 mb-6">
                        Puede configurar su navegador para rechazar cookies o alertarle cuando se envían. Sin embargo, algunas funciones del sitio pueden no funcionar correctamente si las desactiva.
                    </p>

                    <h2 className="text-2xl font-bold text-teko-navy mt-8 mb-4">Contacto</h2>
                    <p className="text-slate-600">
                        Para consultas sobre nuestra política de cookies:<br />
                        Email: <a href="mailto:tekobienesraices@gmail.com" className="text-teko-gold hover:underline">tekobienesraices@gmail.com</a>
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
