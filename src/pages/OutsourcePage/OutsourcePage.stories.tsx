import React from "react";
import { OutsourcePage } from "./OutsourcePage";
import { Meta, Story } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "Pages/Outsource",
  component: OutsourcePage,
} as Meta;

const Template: Story = (args) => (
  <BrowserRouter>
    <OutsourcePage />
  </BrowserRouter>
);

export const Default = Template.bind({});
