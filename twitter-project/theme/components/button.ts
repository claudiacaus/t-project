import { ComponentStyleConfig, theme } from '@chakra-ui/react';

import { link } from './link';

export const button: ComponentStyleConfig = {
  sizes: {
    md: {
      px: '35px',
    },
  },
  baseStyle: {
    borderRadius: '70px',
    display: 'flex',
    height: 'unset',
    paddingY: '12px',
    gap: '10px',
    width: 'fit-content',
    alignItems: 'center',
  },
  defaultProps: {
    variant: 'onyx',
  },
  variants: {
    onyx: {
      backgroundColor: 'onyx',
      color: 'white',
      _hover: {
        backgroundColor: 'onyxHover',
      },
      _active: {
        backgroundColor: 'platinum',
        color: 'black',
      },
    },
    dimgrey: {
      backgroundColor: 'dimgrey',
      color: 'white',
      _hover: {
        backgroundColor: 'dimgreyHover',
      },
      _active: {
        backgroundColor: 'platinum',
        color: 'black',
      },
    },
    silver: {
      backgroundColor: 'silver',
      color: 'black',
      _hover: {
        backgroundColor: 'silverHover',
      },
      _active: {
        backgroundColor: 'onyx',
        color: 'white',
      },
    },
    platinum: {
      backgroundColor: 'platinum',
      color: 'black',
      _hover: {
        backgroundColor: 'platinumHover',
      },
      _active: {
        backgroundColor: 'onyx',
        color: 'white',
      },
    },
    white: {
      backgroundColor: 'white',
      color: 'black',
      _hover: {
        backgroundColor: 'whiteHover',
      },
      _active: {
        backgroundColor: 'onyx',
        color: 'white',
      },
    },
    red: {
      backgroundColor: 'red',
      color: 'white',
      _hover: {
        backgroundColor: 'redHover',
      },
      _active: {
        backgroundColor: 'redActive',
        color: 'white',
      },
    },
    hansblue: {
      backgroundColor: 'hansblue',
      color: 'white',
      _hover: {
        backgroundColor: 'hansHover',
      },
      _active: {
        backgroundColor: 'hansActive',
        color: 'white',
      },
    },
    ghost: {
      backgroundColor: 'transparant',
      color: 'onyx',
      px: 0,
      py: 2,
    },
    link: {
      // Imports next base styles
      ...theme.components.Link.baseStyle,
      ...link.baseStyle,
    },
    icon: {
      backgroundColor: 'black',
      width: '40px',
      height: '40px',
      minWidth: '0px',
      borderRadius: 'full',
      p: '0',
      _hover: {
        backgroundColor: 'secondary',
        transform: 'scale(1.2)',
      },
      svg: {
        width: '20px',
        height: '20px',
      },
      path: {
        fill: 'white',
      },
    },
  },
};
