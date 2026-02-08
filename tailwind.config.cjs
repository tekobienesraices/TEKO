/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                teko: {
                    navy: '#0c1c2e',
                    grey: '#b4b4b4',
                    white: '#ffffff',
                    light: '#f5f7fa',
                    gold: '#D4AF37'
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
            },
            backgroundImage: {
                'gradient-teko': 'linear-gradient(180deg, #0c1c2e 0%, #1e3a5f 100%)',
                'gradient-card': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
            }
        }
    },
    plugins: [],
}
