import React from "react";
import { StyledResponsiveContainer } from "../StyledResponsiveContainer";
import { Button, IButton } from "./Button";
import { Meta, Story } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "Atoms/Button",
  component: Button,
  argTypes: {
    background: {
      control: "text",
    },
    onClick: { actions: "clicked" },
  },
} as Meta;

const Template: Story<IButton> = (args) => (
  <BrowserRouter>
    <div className="container">
      <StyledResponsiveContainer>
        <Button {...args} />
      </StyledResponsiveContainer>
    </div>
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {
  label: "Contact us",
  variant: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Contact us",
  variant: "secondary",
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  label: "Our Story",
  variant: "tertiary",
};
