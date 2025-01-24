import { defineConfig } from '@pandacss/dev';
import { cssReset } from './app/theme/css-reset';

export default defineConfig({
  include: ['./app/routes/**/*.{ts,tsx,js,jsx}', './app/components/**/*.{ts,tsx,js,jsx}'],
  theme: {},
  exclude: [],
  outdir: 'styled-system',
  presets: [cssReset],
});
