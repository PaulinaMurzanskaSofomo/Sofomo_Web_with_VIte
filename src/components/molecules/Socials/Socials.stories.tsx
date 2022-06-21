import React from "react";
import { StyledResponsiveContainer } from "../../atoms";
import { Socials, Props } from "./Socials";
import { Meta, Story } from "@storybook/react";
import { socialIconsList } from "../../../assets/icons/socialIconsList";

export default {
  title: "Molecules/Socials",
  component: Socials,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => (
  <div className="container">
    <StyledResponsiveContainer>
      <Socials {...args} />
    </StyledResponsiveContainer>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  socialsList: socialIconsList,
};
