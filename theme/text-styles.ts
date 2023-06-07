import { ChakraTheme } from '@chakra-ui/react';
import { rem } from 'polished';

export const textStyles: ChakraTheme['textStyles'] = {
  h1: {
    fontSize: rem(72),
    fontWeight: '400',
    lineHeight: '1.1',
    letterSpacing: '-4%',
    fontFamily: 'heading',
  },
  h2: {
    fontSize: rem(60),
    fontWeight: '400',
    lineHeight: '1.1',
    letterSpacing: '-4%',
    fontFamily: 'heading',
  },
  h3: {
    fontSize: rem(48),
    fontWeight: '400',
    lineHeight: '1.2',
    letterSpacing: '-4%',
    fontFamily: 'heading',
  },
  h4: {
    fontSize: rem(36),
    fontWeight: '400',
    lineHeight: '1.2',
    letterSpacing: '-2%',
    fontFamily: 'heading',
  },
  h5: {
    fontSize: rem(24),
    fontWeight: '400',
    lineHeight: '1.3',
    letterSpacing: '-2%',
    fontFamily: 'heading',
  },
  paragraph_L: {
    fontSize: rem(21),
    fontWeight: '300',
    lineHeight: '1.5',
    letterSpacing: '-2%',
    fontFamily: 'body',
  },
  paragraph_M: {
    fontSize: rem(16),
    fontWeight: '300',
    lineHeight: '1.5',
    letterSpacing: '-2%',
    fontFamily: 'body',
  },
  paragraph_S: {
    fontSize: rem(14),
    fontWeight: '300',
    lineHeight: '1.4',
    letterSpacing: '-2%',
    fontFamily: 'body',
  },
  paragraph_XS: {
    fontSize: rem(13),
    fontWeight: '300',
    lineHeight: '1.3',
    letterSpacing: '-2%',
    fontFamily: 'body',
  },
  button: {
    fontSize: rem(14),
    lineHeight: '1.4',
    letterSpacing: '-2%',
    fontFamily: 'button',
    fontWeight: 'light',
  },
  label: {
    fontSize: rem(12),
    fontWeight: '500',
    lineHeight: '1',
    letterSpacing: '-2%',
    fontFamily: 'body',
  },
};
