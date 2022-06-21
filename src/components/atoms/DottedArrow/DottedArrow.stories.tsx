import React from "react";
import { StyledResponsiveContainer } from "../StyledResponsiveContainer";
import { DottedArrow, IArrow } from "./DottedArrow";
import { Meta, Story } from "@storybook/react";
import { theme } from "../../../themes/MainTheme";

export default {
  title: "Atoms/DottedArrow",
  component: DottedArrow,
  argTypes: {
    onClick: { actions: "clicked" },
  },
} as Meta;

const Template: Story<IArrow> = (args) => (
  <div className="container">
    <StyledResponsiveContainer>
      <DottedArrow {...args} />
    </StyledResponsiveContainer>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  variant: "right",
  width: "54px",
};
export const ColoredBackground = Template.bind({});
ColoredBackground.args = {
  backgroundColor: theme.colors.blue,
  variant: "right",
  width: "54px",
  color: "white",
};
