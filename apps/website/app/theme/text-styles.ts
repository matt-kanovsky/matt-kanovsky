import { defineTextStyles } from '@pandacss/dev';

export const textStyles = defineTextStyles({
  h1: {
    value: {
      fontFamily: 'NikkeiJournal-Ultrabold',
      fontSize: {
        base: '64px',
        sm: '96px'
      },
      lineHeight: '1'
    }
  },
  h2: {
    value: {
      fontFamily: 'EditorialNew-Regular',
      fontSize: {
        base: '30px',
        sm: '42px'
      }
    }
  }
});
