import React, { useContext } from "react";
import { Meta, Story } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { DevelopersGrid, Props } from "./DevelopersGrid";
import { StyledResponsiveContainer } from "../../../../components/atoms";

export default {
  title: "Organisms/Menu/menuComponents/DevelopersGrid",
  component: DevelopersGrid,
  argTypes: {
    variant: {
      options: ["clickable-cards", "default"],
      control: { type: "select" },
    },
  },
} as Meta;

const Template: Story = (args: Props) => {
  return (
    <BrowserRouter>
      <div className="container">
        <StyledResponsiveContainer>
          <DevelopersGrid {...args} />
        </StyledResponsiveContainer>
      </div>
    </BrowserRouter>
  );
};

export const Default = Template.bind({});
Default.args = {
  variant: "default",
};
