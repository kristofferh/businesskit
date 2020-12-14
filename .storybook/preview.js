import classNames from "classnames";
import React from "react";
import { Provider } from "../src/provider";
import { Provider as ThemeProvider } from "../src/provider";
import { theme } from "../src/theme";

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "light",
    toolbar: {
      icon: "globe",
      // array of plain string values or MenuItem shape (see below)
      items: ["light", "dark"],
    },
  },
};

const withThemeProvider = (Story, context) => {
  // const theme = getTheme(context.globals.theme);
  return (
    <ThemeProvider>
      <Story {...context} />
    </ThemeProvider>
  );
};
export const decorators = [withThemeProvider];
