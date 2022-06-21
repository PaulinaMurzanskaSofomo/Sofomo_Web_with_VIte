import React from "react";
import { Meta, Story } from "@storybook/react";
import { ImagesSwiper } from "./ImagesSwiper";

export default {
  title: "Molecules/ImagesSwiper",
  component: ImagesSwiper,
} as Meta;

const Template: Story = (args) => (
  <div className="container footer">
    <ImagesSwiper />
  </div>
);

export const Default = Template.bind({});
Default.args = {};
