import React from "react";
import { StyledResponsiveContainer } from "../StyledResponsiveContainer";
import { Icon, Props } from "./Icon";
import { Meta, Story } from "@storybook/react";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";

export default {
  title: "Atoms/Icon",
  component: Icon,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => (
  <div className="container">
    <StyledResponsiveContainer>
      <Icon {...args} />
    </StyledResponsiveContainer>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  children: <FaFacebookF />,
};

export const LinkedIn = Template.bind({});
LinkedIn.args = {
  children: <FaLinkedinIn />,
  variant: "linked-in",
};
