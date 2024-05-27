import type { Config } from 'tailwindcss'
import { colors } from './src/constants'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ...colors,
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
