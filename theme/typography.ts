import { ChakraTheme } from "@chakra-ui/react";
import { rem } from "polished";

export const fonts: ChakraTheme["fonts"] = {
  heading: `Inter, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, Sans-Serif`,
  body: `Inter, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, Sans-Serif`,
  button: `Inter, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, Sans-Serif`,
  label: `Inter, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, Sans-Serif`,
  p: `Inter, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, Sans-Serif`,
};

export const fontSizes: ChakraTheme["fontSizes"] = {
  xs: rem(12),
  sm: rem(14),
  md: rem(16),
  lg: rem(18),
  xl: rem(20),
  "3xl": rem(28),
  "4xl": rem(36),
  "5xl": rem(48),
  "6xl": rem(60),
  "7xl": rem(72),
  "8xl": "7.2rem",
};

export const fontWeights: ChakraTheme["fontWeights"] = {
  light: 300,
  normal: 400,
  medium: 500,
  bold: 400,
};
