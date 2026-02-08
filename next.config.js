/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    distDir: 'dist',
    trailingSlash: true, // Forzar estructura de carpetas (ej: /terrenos/index.html) para evitar 404 al recargar
    images: {
        unoptimized: true,
    },
}

export default nextConfig
