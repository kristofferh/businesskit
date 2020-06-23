import { addDecorator } from "@storybook/react";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import classNames from "classnames";
import React from "react";

import "./preview.css";

addDecorator((story, context) => {
  const theStory = story();
  const darkMode = boolean("Dark mode", false);

  return <div className={classNames("preview", { darkMode })}>{theStory}</div>;
});
addDecorator(withKnobs);
