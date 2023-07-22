"use client";

import {
  CssBaseline,
  ThemeOptions,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { Inter } from "next/font/google";
import { PropsWithChildren } from "react";

const inter = Inter({
  weight: ["400", "500", "600"],
  style: ["normal"],
  subsets: ["latin", "cyrillic"],
});

export const themeOptions: ThemeOptions = {
  typography: {
    fontFamily: inter.style.fontFamily,
    fontSize: 14,
  },
  palette: {
    background: {
      default: "#ffffff",
    },
  },
};

export const theme = createTheme(themeOptions);

export default function ThemeRegistry({ children }: PropsWithChildren) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}