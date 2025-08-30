tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                'inter': ['Inter', 'sans-serif'],
                'playfair': ['"Playfair Display"', 'serif'],
            },
            colors: {
                gold: {
                    '100': '#fef9f0',
                    '200': '#fceec5',
                    '300': '#f9e39b',
                    '400': '#f5d46c',
                    '500': '#c9a96e', // Main Gold
                    '600': '#b8941f',
                    '700': '#9c7b1a',
                    '800': '#7d6215',
                    '900': '#644e11',
                },
                'brand-dark': {
                    '600': '#313235',
                    '700': '#252628',
                    '800': '#1a1a1b',
                    '900': '#0f0f10',
                },
            },
            animation: {
                'fade-in-up': 'fadeInUp 1s ease-out forwards',
                'float-3d': 'float3D 6s ease-in-out infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'text-shine': 'textShine 5s linear infinite',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                float3D: {
                    '0%, 100%': { transform: 'translateY(0) rotateX(10deg) rotateY(-5deg) translateZ(0)' },
                    '50%': { transform: 'translateY(-20px) rotateX(10deg) rotateY(5deg) translateZ(20px)' },
                },
                textShine: {
                    '0%': { 'background-position': '200% center' },
                    '100%': { 'background-position': '-200% center' },
                }
            },
        },
    },
    plugins: [],
};