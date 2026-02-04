import React from 'react';
import { FileText, AlertTriangle, Scale, Ban } from 'lucide-react';

export const TermsConditions: React.FC = () => {
    return (
        <div className="pt-24 min-h-screen bg-slate-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 rounded-full bg-teko-navy/10 flex items-center justify-center">
                            <FileText className="text-teko-navy" size={24} />
                        </div>
                        <div>
                            <h1 className="text-3xl font-serif font-bold text-teko-navy">Términos y Condiciones</h1>
                            <p className="text-slate-500 text-sm">Última actualización: Febrero 2026</p>
                        </div>
                    </div>

                    <div className="prose prose-slate max-w-none">
                        <p className="text-lg text-slate-600 mb-8">
                            Al utilizar el sitio web de TEKO Bienes Raíces, aceptás los siguientes términos y condiciones. Te recomendamos leerlos detenidamente.
                        </p>

                        <h2 className="text-xl font-bold text-teko-navy mt-8 mb-4 flex items-center gap-2">
                            <Scale size={20} /> 1. Sobre TEKO Bienes Raíces
                        </h2>
                        <p className="text-slate-600 mb-6">
                            TEKO Bienes Raíces es un emprendimiento dedicado a la intermediación y comercialización de terrenos en Paraguay. Operamos como facilitadores entre propietarios e inversores interesados en adquirir propiedades.
                        </p>

                        <h2 className="text-xl font-bold text-teko-navy mt-8 mb-4">2. Uso del Sitio Web</h2>
                        <p className="text-slate-600 mb-4">Al usar este sitio, te comprometés a:</p>
                        <ul className="list-disc list-inside text-slate-600 space-y-2 mb-6">
                            <li>Proporcionar información veraz y actualizada en los formularios</li>
                            <li>No utilizar el sitio para fines ilegales o no autorizados</li>
                            <li>No intentar acceder a áreas restringidas del sitio</li>
                            <li>Respetar los derechos de propiedad intelectual de TEKO</li>
                        </ul>

                        <h2 className="text-xl font-bold text-teko-navy mt-8 mb-4 flex items-center gap-2">
                            <AlertTriangle size={20} /> 3. Información de Propiedades
                        </h2>
                        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
                            <p className="text-amber-800">
                                <strong>Importante:</strong> La información sobre terrenos, precios, características y disponibilidad publicada en este sitio es de carácter informativo y orientativo. Los datos definitivos serán confirmados al momento de la negociación formal.
                            </p>
                        </div>
                        <ul className="list-disc list-inside text-slate-600 space-y-2 mb-6">
                            <li>Los precios pueden variar sin previo aviso</li>
                            <li>Las imágenes son ilustrativas y pueden no representar el estado actual exacto</li>
                            <li>La disponibilidad está sujeta a confirmación</li>
                            <li>Las simulaciones de financiación son estimativas</li>
                        </ul>

                        <h2 className="text-xl font-bold text-teko-navy mt-8 mb-4 flex items-center gap-2">
                            <Ban size={20} /> 4. Limitación de Responsabilidad
                        </h2>
                        <p className="text-slate-600 mb-6">
                            TEKO Bienes Raíces actúa como intermediario inmobiliario. No nos hacemos responsables por:
                        </p>
                        <ul className="list-disc list-inside text-slate-600 space-y-2 mb-6">
                            <li>Decisiones de inversión basadas únicamente en la información del sitio</li>
                            <li>Cambios en las condiciones de las propiedades por parte de los propietarios</li>
                            <li>Interrupciones técnicas del sitio web</li>
                            <li>Daños derivados del uso o imposibilidad de uso del sitio</li>
                        </ul>

                        <h2 className="text-xl font-bold text-teko-navy mt-8 mb-4">5. Propiedad Intelectual</h2>
                        <p className="text-slate-600 mb-6">
                            Todo el contenido del sitio (textos, imágenes, logos, diseño) es propiedad de TEKO Bienes Raíces o sus licenciantes. Queda prohibida la reproducción sin autorización expresa.
                        </p>

                        <h2 className="text-xl font-bold text-teko-navy mt-8 mb-4">6. Comunicaciones</h2>
                        <p className="text-slate-600 mb-6">
                            Al proporcionar tus datos de contacto, autorizás a TEKO a comunicarse contigo vía WhatsApp, llamada telefónica o correo electrónico para fines relacionados con oportunidades inmobiliarias. Podés solicitar la baja en cualquier momento.
                        </p>

                        <h2 className="text-xl font-bold text-teko-navy mt-8 mb-4">7. Modificaciones</h2>
                        <p className="text-slate-600 mb-6">
                            Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios serán efectivos desde su publicación en el sitio. El uso continuado del sitio implica la aceptación de los términos actualizados.
                        </p>

                        <h2 className="text-xl font-bold text-teko-navy mt-8 mb-4">8. Jurisdicción</h2>
                        <p className="text-slate-600 mb-6">
                            Estos términos se rigen por las leyes de la República del Paraguay. Cualquier controversia será sometida a los tribunales competentes de la ciudad de Asunción.
                        </p>

                        <h2 className="text-xl font-bold text-teko-navy mt-8 mb-4">9. Contacto</h2>
                        <p className="text-slate-600 mb-4">
                            Para consultas sobre estos términos:
                        </p>
                        <div className="bg-slate-50 rounded-lg p-4">
                            <p className="text-slate-600">
                                📧 <a href="mailto:tekobienesraices@gmail.com" className="text-teko-navy font-medium hover:underline">tekobienesraices@gmail.com</a><br />
                                📱 <a href="https://wa.me/595983783349" className="text-teko-navy font-medium hover:underline">+595 983 783 349</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
