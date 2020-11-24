import React from "react";
import { Badge, Props as BadgeProps } from "./index";
import { Meta, Story } from "@storybook/react/types-6-0";

export default {
  title: "Badge",
  component: Badge,
} as Meta;

const BadgeTemplate: Story<BadgeProps> = (args) => <Badge {...args} />;

export const BadgeStory = BadgeTemplate.bind({});
BadgeStory.args = { children: "hello" };
BadgeStory.argTypes = { bg: { control: "color" } };

BadgeStory.storyName = "Badge";
