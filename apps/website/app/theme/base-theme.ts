import { definePreset } from '@pandacss/dev';
import { breakpoints } from './breakpoints';
import { textStyles } from './text-styles';

export const baseTheme = definePreset({
  name: 'Base Theme',
  theme: {
    breakpoints: breakpoints,
    textStyles: textStyles,
    tokens: {
      colors: {
        text: { value: '#F6E9D9' }
      }
    }
  }
});
