import React from "react";
import { StyledResponsiveContainer } from "../StyledResponsiveContainer";
import { Docket, Props } from "./Docket";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Atoms/Docket",
  component: Docket,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => (
  <div className="container">
    <StyledResponsiveContainer>
      <Docket {...args} />
    </StyledResponsiveContainer>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  label: "headquarters",
};
