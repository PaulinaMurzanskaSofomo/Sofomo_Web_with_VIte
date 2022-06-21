import React from "react";
import { Meta, Story } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { SectionContainer, StyledResponsiveContainer } from "../../components/atoms";
import { NestedDropdownList } from "./NestedDropdownList";
import { theme } from "../../themes/MainTheme";

export default {
  title: "Organisms/NestedDropdownList",
  component: NestedDropdownList,
} as Meta;

export const NestedDropdown: Story = () => (
  <BrowserRouter>
    <SectionContainer background={theme.colors.purple}>
      <StyledResponsiveContainer>
        <div className="container">
          <NestedDropdownList />
        </div>
      </StyledResponsiveContainer>
    </SectionContainer>
  </BrowserRouter>
);
