import classNames from "classnames";
import React from "react";
import { ThemeProvider } from "@emotion/react";

import { theme } from "../src/themes";

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "light",
    toolbar: {
      icon: "circlehollow",
      // array of plain string values or MenuItem shape (see below)
      items: ["light", "dark"],
    },
  },
};

const withThemeProvider = (Story, context) => {
  // const theme = getTheme(context.globals.theme);
  return (
    <ThemeProvider theme={theme}>
      <Story {...context} />
    </ThemeProvider>
  );
};
export const decorators = [withThemeProvider];
