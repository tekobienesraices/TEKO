/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        unoptimized: true, // For static export or simple hosting if needed initially
    },
    // output: 'export', // Uncomment if doing purely static export later
}

export default nextConfig
