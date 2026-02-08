/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export', // Revertido a Static Export para compatibilidad total con tu Vercel
    distDir: 'dist',  // Mantener salida en dist
    images: {
        unoptimized: true, // Necesario para Static Export
    },
}

export default nextConfig
