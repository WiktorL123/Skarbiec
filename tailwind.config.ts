import type { Config } from 'tailwindcss';
import { tokens } from './src/ui/tokens';

export default {
  content: ['./src/**/*.{ts,tsx}'],
  // NativeWind exposes this preset as CommonJS; Tailwind loads config at runtime.
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        void: tokens.colors.background.void,
        primary: tokens.colors.text.primary,
      },
      spacing: { screen: `${tokens.spacing.screen}px` },
      fontSize: {
        greeting: [
          `${tokens.typography.greeting}px`,
          { lineHeight: `${tokens.typography.greetingLine}px` },
        ],
      },
    },
  },
  plugins: [],
} satisfies Config;
