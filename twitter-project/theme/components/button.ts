import { ComponentStyleConfig, theme } from "@chakra-ui/react";

import { link } from "./link";

export const button: ComponentStyleConfig = {
  sizes: {
    md: {
      px: "35px",
    },
  },
  baseStyle: {
    borderRadius: "70px",
    display: "flex",
    height: "unset",
    paddingY: "12px",
    gap: "10px",
    width: "fit-content",
    alignItems: "center",
  },
  defaultProps: {
    variant: "onyx",
  },
  variants: {
    onyx: {
      backgroundColor: "blue",
      color: "white",
      _hover: {
        backgroundColor: "blueHover",
      },
      _active: {
        backgroundColor: "blueHover",
      },
    },
    ghost: {
      backgroundColor: "transparant",
      color: "onyx",
      px: 0,
      py: 2,
    },
    link: {
      // Imports next base styles
      ...theme.components.Link.baseStyle,
      ...link.baseStyle,
    },
    icon: {
      backgroundColor: "black",
      width: "40px",
      height: "40px",
      minWidth: "0px",
      borderRadius: "full",
      p: "0",
      _hover: {
        backgroundColor: "secondary",
        transform: "scale(1.2)",
      },
      svg: {
        width: "20px",
        height: "20px",
      },
      path: {
        fill: "white",
      },
    },
  },
};
