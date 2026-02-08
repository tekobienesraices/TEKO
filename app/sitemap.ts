import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.tekobienesraicespy.com';

    // Rutas estáticas principales
    const routes = [
        '',
        '/terrenos',
        '/blog',
        '/calculadora',
        '/guia',
        '/contacto',
        '/nosotros',
        '/privacidad',
        '/terminos',
        '/cookies',
        // Landing pages SEO optimizadas
        '/venta-terrenos-capiata',
        '/lotes-cuotas-paraguay',
        '/terrenos-baratos-paraguay',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Aquí podríamos agregar rutas dinámicas de blog si tuviéramos una base de datos o API
    // Por ahora, como es estático, agregamos las rutas conocidas si las hubiera manual o dinámicamente

    return [...routes];
}
