import { addDecorator } from "@storybook/react";
import { withKnobs, boolean } from "@storybook/addon-knobs";
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
  console.log(context);
  return (
    <ThemeProvider theme={theme}>
      <Story {...context} />
    </ThemeProvider>
  );
};
export const decorators = [withThemeProvider];

// addDecorator((story, context) => {
//   const theStory = story();
//   const darkMode = boolean("Dark mode", false);

//   return <div className={classNames("preview", { darkMode })}>{theStory}</div>;
// });
// addDecorator(withKnobs);
