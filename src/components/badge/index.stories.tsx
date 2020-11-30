import React from "react";
import { Badge, Props } from "./index";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Badge",
  component: Badge,
  argTypes: {
    bg: {
      control: "color",
    },
  },
} as Meta;

const BadgeTemplate: Story<Props> = (args) => <Badge {...args} />;

export const BadgeStory = BadgeTemplate.bind({});
BadgeStory.args = { children: "hello" };

BadgeStory.storyName = "Badge";
