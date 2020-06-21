import React from "react";
import { Loader } from "./index";
import { boolean, color as colorFn } from "@storybook/addon-knobs";

export default {
  title: "Loader",
  component: Loader,
};

export const Story = () => {
  const showBackground = boolean("Show background", false);
  const showDashAnimation = boolean("Show dash animation", false);
  const color = colorFn("Color", "#000");
  const backgroundColor = colorFn("Background Color", "#dedede");
  return (
    <Loader
      showDashAnimation={showDashAnimation}
      backgroundColor={backgroundColor}
      showBackground={showBackground}
      color={color}
    />
  );
};

Story.story = {
  name: "Loader",
};
