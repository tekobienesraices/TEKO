/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // Eliminado output: 'export' para habilitar funciones serverless y optimización de imágenes
    // images: { unoptimized: true }  <-- Eliminado para que Next.js optimize imágenes
}

export default nextConfig
