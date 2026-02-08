/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        unoptimized: true, // Required for static export
    },
    output: 'export',
    distDir: 'dist',
}

export default nextConfig
