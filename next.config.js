/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export',      // Vuelve a ser estático (para compatibilidad con carpeta 'dist')
    distDir: 'dist',       // Carpeta que Vercel espera
    trailingSlash: true,   // CRÍTICO: Crea carpetas /ruta/index.html para que el refresh funcione siempre
    images: {
        unoptimized: true, // Necesario para modo export
    },
}

export default nextConfig
