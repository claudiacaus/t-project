import { CSSObject } from '@chakra-ui/react';

export const globalStyle: CSSObject = {
  html: {
    fontSize: '16px',
  },
  body: {
    minWidth: '320px',
    backgroundColor: 'white',
    fontFamily: `MaisonNeue, sans-serif`,
  },
  '*': {
    boxSizing: 'border-box',
    fontFamily: `MaisonNeue, sans-serif`,
  },
};
