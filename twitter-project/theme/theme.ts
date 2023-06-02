import { extendTheme } from '@chakra-ui/react';

import { radii } from './border-radius';
import { colors } from './colors';
import { components } from './components';
import { globalStyle } from './global-style';
import { sizes } from './sizes';
import { space } from './spacing';
import { textStyles } from './text-styles';
import { fonts, fontSizes } from './typography';

export const theme = extendTheme({
  components,
  colors,
  fonts,
  sizes,
  textStyles,
  fontSizes,
  radii,
  space,
  styles: { global: globalStyle },
});

export type CustomTheme = typeof theme;
