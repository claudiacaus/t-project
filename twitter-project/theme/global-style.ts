import { SystemStyleObject } from '@chakra-ui/react';

export const globalStyle: SystemStyleObject = {
  html: {
    fontSize: '16px',
  },
  body: {
    minWidth: '320px',
    backgroundColor: 'black',
    fontFamily: `MaisonNeue, sans-serif`,
    color: 'white',
  },
  '*': {
    boxSizing: 'border-box',
    fontFamily: `MaisonNeue, sans-serif`,
  },
};
