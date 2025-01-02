import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1200px'
    },
    extend: {
      fontFamily: {
        sans: 'var(--font-archivo)'
      },
      colors: {
        // background: 'var(--background)',
        // foreground: 'var(--foreground)',
        'red-oranges': {
          500: 'color-mix(in srgb, theme("color.red.500") 50%, theme("color.orange.500") 50%'
        },
        'red-orange': {
          500: 'color-mix(in srgb, red 50%, orange 50%)'
        }
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          md: '2rem',
          lg: '4rem'
        }
      }
    }
  },
  plugins: []
}
export default config;
