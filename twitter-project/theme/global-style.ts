import { SystemStyleObject } from "@chakra-ui/react";

export const globalStyle: SystemStyleObject = {
  html: {
    fontSize: "16px",
  },
  body: {
    minWidth: "320px",
    backgroundColor: "black",
    fontFamily: `MaisonNeue, sans-serif`,
    color: "platinum",
  },
  "*": {
    boxSizing: "border-box",
    fontFamily: `MaisonNeue, sans-serif`,
  },
  "*, *::before, &::after": {
    boxSizing: "inherit",
  },
  "h1, h2, h3, h4, h5, h6": {
    margin: 0,
    fontWeight: 500,
  },
  h1: {
    fontSize: "2rem",
  },
  h2: {
    fontSize: "1.5rem",
  },
  h3: {
    fontSize: "1.25rem",
  },
  h4: {
    fontSize: "1rem",
  },
  h5: {
    fontSize: "0.875rem",
  },
  h6: {
    fontSize: "0.75rem",
  },
  p: {
    margin: 0,
  },
  a: {
    textDecoration: "none",
    color: "inherit",
  },
  img: {
    maxWidth: "100%",
    height: "auto",
  },
  button: {
    cursor: "pointer",
    border: "none",
    outline: "none",
    background: "none",
    padding: 0,
    margin: 0,
  },
  input: {
    border: "none",
    outline: "none",
    background: "none",
    padding: 0,
    margin: 0,
  },
  textarea: {
    border: "none",
    outline: "none",
    background: "none",
    padding: 0,
    margin: 0,
  },
  select: {
    border: "none",
    outline: "none",
    background: "none",
    padding: 0,
    margin: 0,
  },
  svg: {
    display: "block",
    color: "platinum",
  },
};
