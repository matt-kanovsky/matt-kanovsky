import { definePreset } from '@pandacss/dev';

export const cssReset = definePreset({
  name: 'cssReset',
  globalCss: {
    '*, *::before, *::after': {
      boxSizing: 'border-box',
    },
    // 2. Remove default margin
    '*': {
      margin: '0',
    },
    // 3. Add accessible line-height
    body: {
      lineHeight: '1.5',
      // 4. Improve text rendering
      WebkitFontSmoothing: 'antialiased',
    },
    // 5. Improve media defaults
    'img, picture, video, canvas, svg': {
      display: 'block',
      maxWidth: '100%',
    },
    // 6. Inherit fonts for form controls
    'input, button, textarea, select': {
      font: 'inherit',
    },
    // 7. Avoid text overflows
    'p, h1, h2, h3, h4, h5, h6': {
      overflowWrap: 'break-word',
    },
    // 8. Improve line wrapping
    p: {
      textWrap: 'pretty',
    },
    'h1, h2, h3, h4, h5, h6': {
      textWrap: 'balance',
    },
    // 9. Create a root stacking context
    '#root, #__next': {
      isolation: 'isolate',
    },
  },
});
