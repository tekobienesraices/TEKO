/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    distDir: 'dist', // CRUCIAL: Mantenemos 'dist' para que Vercel encuentre el build
    // NOTA: Eliminamos 'output: export' para habilitar Serverless (arregla 404 en recargas y favicons dinámicos)
}

export default nextConfig
