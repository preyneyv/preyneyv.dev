import { accentLine } from './src/constants'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bloo: '#3399D8',
        grae: '#424242',
        dark: accentLine,
      },
      fontFamily: {
        'space-grotesk': 'var(--font-space-grotesk), sans-serif',
        syne: 'var(--font-syne), sans-serif',
      },
    },
  },
  plugins: [],
}
export default config
