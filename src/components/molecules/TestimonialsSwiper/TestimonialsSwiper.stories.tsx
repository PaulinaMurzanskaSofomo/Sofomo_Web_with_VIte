import React from "react";
import { Meta, Story } from "@storybook/react";
import { TestimonialsSwiper } from "./TestimonialsSwiper";

export default {
  title: "Molecules/TestimonialsSwiper",
  component: TestimonialsSwiper,
} as Meta;

const Template: Story = (args) => (
  <div className="container">
    <TestimonialsSwiper />
  </div>
);

export const Default = Template.bind({});
Default.args = {};
