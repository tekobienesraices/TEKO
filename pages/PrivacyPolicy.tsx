import React from 'react';
import { Shield, Lock, UserCheck, Mail } from 'lucide-react';

export const PrivacyPolicy: React.FC = () => {
    return (
        <div className="pt-24 min-h-screen bg-slate-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 rounded-full bg-teko-navy/10 flex items-center justify-center">
                            <Shield className="text-teko-navy" size={24} />
                        </div>
                        <div>
                            <h1 className="text-3xl font-serif font-bold text-teko-navy">Política de Privacidad</h1>
                            <p className="text-slate-500 text-sm">Última actualización: Febrero 2026</p>
                        </div>
                    </div>

                    <div className="prose prose-slate max-w-none">
                        <p className="text-lg text-slate-600 mb-8">
                            En TEKO Bienes Raíces nos comprometemos a proteger tu privacidad. Esta política explica cómo recopilamos, usamos y protegemos tu información personal.
                        </p>

                        <h2 className="text-xl font-bold text-teko-navy mt-8 mb-4 flex items-center gap-2">
                            <UserCheck size={20} /> 1. Información que Recopilamos
                        </h2>
                        <p className="text-slate-600 mb-4">Recopilamos la siguiente información cuando completás nuestros formularios:</p>
                        <ul className="list-disc list-inside text-slate-600 space-y-2 mb-6">
                            <li><strong>Nombre completo:</strong> Para identificarte y personalizar la comunicación</li>
                            <li><strong>Número de WhatsApp:</strong> Para contactarte sobre propiedades de tu interés</li>
                            <li><strong>Correo electrónico (opcional):</strong> Para enviarte información relevante</li>
                            <li><strong>Interés inmobiliario:</strong> Para ofrecerte opciones acordes a tus necesidades</li>
                        </ul>

                        <h2 className="text-xl font-bold text-teko-navy mt-8 mb-4 flex items-center gap-2">
                            <Lock size={20} /> 2. Cómo Usamos tu Información
                        </h2>
                        <p className="text-slate-600 mb-4">Utilizamos tus datos exclusivamente para:</p>
                        <ul className="list-disc list-inside text-slate-600 space-y-2 mb-6">
                            <li>Contactarte sobre terrenos y propiedades disponibles</li>
                            <li>Responder tus consultas y brindarte asesoría personalizada</li>
                            <li>Enviarte información sobre nuevas oportunidades de inversión</li>
                            <li>Mejorar nuestros servicios y tu experiencia de usuario</li>
                        </ul>

                        <h2 className="text-xl font-bold text-teko-navy mt-8 mb-4">3. Compartición de Datos</h2>
                        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                            <p className="text-green-800 font-medium">
                                ✓ NO compartimos, vendemos ni alquilamos tu información personal a terceros.
                            </p>
                        </div>

                        <h2 className="text-xl font-bold text-teko-navy mt-8 mb-4">4. Almacenamiento y Seguridad</h2>
                        <p className="text-slate-600 mb-6">
                            Tu información se almacena de forma segura utilizando servicios de Google (Google Sheets) con acceso restringido únicamente al equipo de TEKO. Implementamos medidas de seguridad razonables para proteger tus datos.
                        </p>

                        <h2 className="text-xl font-bold text-teko-navy mt-8 mb-4">5. Tus Derechos</h2>
                        <p className="text-slate-600 mb-4">Tenés derecho a:</p>
                        <ul className="list-disc list-inside text-slate-600 space-y-2 mb-6">
                            <li>Solicitar acceso a los datos que tenemos sobre vos</li>
                            <li>Pedir la corrección de información incorrecta</li>
                            <li>Solicitar la eliminación de tus datos de nuestra base</li>
                            <li>Retirar tu consentimiento para comunicaciones de marketing</li>
                        </ul>

                        <h2 className="text-xl font-bold text-teko-navy mt-8 mb-4">6. Contacto</h2>
                        <p className="text-slate-600 mb-4">
                            Para ejercer cualquiera de estos derechos o realizar consultas sobre privacidad, contactanos:
                        </p>
                        <div className="bg-slate-50 rounded-lg p-4 flex items-center gap-3">
                            <Mail className="text-teko-navy" size={20} />
                            <a href="mailto:tekobienesraices@gmail.com" className="text-teko-navy font-medium hover:underline">
                                tekobienesraices@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
