import React, { FC } from "react";
import { ThemeProvider } from "@emotion/react";
import { theme as defaultTheme } from "../theme";

type Props = {
  theme?: any;
};

export const Provider: FC<Props> = ({ theme = defaultTheme, children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
