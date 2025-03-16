import { defineConfig } from '@pandacss/dev';
import { cssReset } from './app/theme/css-reset';
import { baseTheme } from './app/theme/base-theme';

export default defineConfig({
  include: ['./app/routes/**/*.{ts,tsx,js,jsx}', './app/components/**/*.{ts,tsx,js,jsx}'],
  theme: {},
  exclude: [],
  outdir: 'styled-system',
  jsxFramework: 'react',
  presets: [cssReset, baseTheme]
});
