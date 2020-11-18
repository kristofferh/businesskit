import React from "react";
import { Label } from "./index";
import { boolean, color as colorFn, number } from "@storybook/addon-knobs";

export default {
  title: "Label",
  component: Label,
};

export const Story = () => {
  const showBackground = boolean("Show background", false);
  const showDashAnimation = boolean("Show dash animation", false);
  const color = colorFn("Color", "#000");
  const backgroundColor = colorFn("Background color", "#dedede");
  const borderWidth = number("Border width", 5);
  const size = number("Size", 40);
  return (
    <Label
      showDashAnimation={showDashAnimation}
      backgroundColor={backgroundColor}
      showBackground={showBackground}
      color={color}
      size={size}
      borderWidth={borderWidth}
    />
  );
};

Story.story = {
  name: "Label",
};
