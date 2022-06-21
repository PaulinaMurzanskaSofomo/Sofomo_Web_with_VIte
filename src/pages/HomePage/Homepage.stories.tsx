import React from "react";
import { HomePage } from "./HomePage";
import { Meta, Story } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "Pages/HomePage",
  component: HomePage,
} as Meta;

const Template: Story = (args) => (
  <BrowserRouter>
    <HomePage />
  </BrowserRouter>
);

export const Default = Template.bind({});
