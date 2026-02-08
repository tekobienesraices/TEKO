import React from 'react';
import { Cookie, Info, Settings } from 'lucide-react';

export const CookiePolicy: React.FC = () => {
    return (
        <div className="pt-24 min-h-screen bg-slate-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 rounded-full bg-teko-navy/10 flex items-center justify-center">
                            <Cookie className="text-teko-navy" size={24} />
                        </div>
                        <div>
                            <h1 className="text-3xl font-serif font-bold text-teko-navy">Política de Cookies</h1>
                            <p className="text-slate-500 text-sm">Última actualización: Febrero 2026</p>
                        </div>
                    </div>

                    <div className="prose prose-slate max-w-none">
                        <p className="text-lg text-slate-600 mb-8">
                            Esta política explica qué son las cookies, cómo las utilizamos en nuestro sitio web y cómo podés gestionarlas.
                        </p>

                        <h2 className="text-xl font-bold text-teko-navy mt-8 mb-4 flex items-center gap-2">
                            <Info size={20} /> 1. ¿Qué son las Cookies?
                        </h2>
                        <p className="text-slate-600 mb-6">
                            Las cookies son pequeños archivos de texto que los sitios web almacenan en tu dispositivo (computadora, tablet o celular) cuando los visitás. Sirven para recordar tus preferencias y mejorar tu experiencia de navegación.
                        </p>

                        <h2 className="text-xl font-bold text-teko-navy mt-8 mb-4">2. Cookies que Utilizamos</h2>
                        <p className="text-slate-600 mb-4">
                            Actualmente, el sitio web de TEKO Bienes Raíces utiliza únicamente cookies esenciales:
                        </p>

                        <div className="overflow-x-auto mb-6">
                            <table className="min-w-full border border-slate-200 rounded-lg overflow-hidden">
                                <thead className="bg-slate-50">
                                    <tr>
                                        <th className="px-4 py-3 text-left text-sm font-semibold text-teko-navy">Tipo</th>
                                        <th className="px-4 py-3 text-left text-sm font-semibold text-teko-navy">Propósito</th>
                                        <th className="px-4 py-3 text-left text-sm font-semibold text-teko-navy">Duración</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-200">
                                    <tr>
                                        <td className="px-4 py-3 text-sm text-slate-600">Esenciales</td>
                                        <td className="px-4 py-3 text-sm text-slate-600">Funcionamiento básico del sitio y navegación</td>
                                        <td className="px-4 py-3 text-sm text-slate-600">Sesión</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-3 text-sm text-slate-600">Preferencias</td>
                                        <td className="px-4 py-3 text-sm text-slate-600">Recordar tu estado en formularios</td>
                                        <td className="px-4 py-3 text-sm text-slate-600">Sesión</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                            <p className="text-blue-800">
                                <strong>Nota:</strong> Actualmente NO utilizamos cookies de análisis (como Google Analytics) ni cookies de publicidad de terceros. Si esto cambia en el futuro, actualizaremos esta política.
                            </p>
                        </div>

                        <h2 className="text-xl font-bold text-teko-navy mt-8 mb-4 flex items-center gap-2">
                            <Settings size={20} /> 3. Cómo Gestionar las Cookies
                        </h2>
                        <p className="text-slate-600 mb-4">
                            Podés controlar y eliminar las cookies a través de la configuración de tu navegador:
                        </p>
                        <ul className="list-disc list-inside text-slate-600 space-y-2 mb-6">
                            <li><strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies</li>
                            <li><strong>Firefox:</strong> Opciones → Privacidad → Historial</li>
                            <li><strong>Safari:</strong> Preferencias → Privacidad</li>
                            <li><strong>Edge:</strong> Configuración → Privacidad → Cookies</li>
                        </ul>
                        <p className="text-slate-600 mb-6">
                            Tené en cuenta que deshabilitar las cookies puede afectar la funcionalidad de algunos elementos del sitio.
                        </p>

                        <h2 className="text-xl font-bold text-teko-navy mt-8 mb-4">4. Servicios de Terceros</h2>
                        <p className="text-slate-600 mb-6">
                            Nuestro sitio puede contener links a redes sociales (Instagram, TikTok, WhatsApp) que tienen sus propias políticas de cookies. Te recomendamos revisar sus políticas de privacidad respectivas.
                        </p>

                        <h2 className="text-xl font-bold text-teko-navy mt-8 mb-4">5. Actualizaciones</h2>
                        <p className="text-slate-600 mb-6">
                            Esta política puede actualizarse periódicamente. Publicaremos cualquier cambio en esta página con la fecha de última actualización.
                        </p>

                        <h2 className="text-xl font-bold text-teko-navy mt-8 mb-4">6. Contacto</h2>
                        <p className="text-slate-600 mb-4">
                            Si tenés preguntas sobre nuestra política de cookies:
                        </p>
                        <div className="bg-slate-50 rounded-lg p-4">
                            <p className="text-slate-600">
                                📧 <a href="mailto:tekobienesraices@gmail.com" className="text-teko-navy font-medium hover:underline">tekobienesraices@gmail.com</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
