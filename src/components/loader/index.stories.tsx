import React from "react";
import { Loader, Props } from "./index";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Loader",
  component: Loader,
  argTypes: {
    backgroundColor: {
      control: "color",
    },
    color: {
      control: "color",
    },
  },
} as Meta;

const LoaderTemplate: Story<Props> = (args) => <Loader {...args} />;

export const LoaderStory = LoaderTemplate.bind({});

LoaderStory.storyName = "Loader";
