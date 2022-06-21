import React from "react";
import { Footer } from "./Footer";
import { Meta, Story } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "Organisms/Footer",
  component: Footer,
} as Meta;

const Template: Story = (args) => (
  <BrowserRouter>
    <Footer />
  </BrowserRouter>
);

export const Default = Template.bind({});
