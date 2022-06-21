import React, { useState } from "react";
import { StyledResponsiveContainer } from "../../atoms";
import { Meta, Story } from "@storybook/react";
import { ListItem, Props } from "./ListItem";
import { tenPlus } from "../../../assets/icons";
import { theme } from "../../../themes/MainTheme";

export default {
  title: "Molecules/ListItem",
  component: ListItem,
  args: {},
} as Meta;

const Template: Story<Props> = (args) => {
  const [dropdownActive, setDropdownActive] = useState(false);
  return (
    <StyledResponsiveContainer>
      <div className="container items">
        <ListItem
          {...args}
          dropdownActive={dropdownActive}
          listItem="I am the first list item!"
          onClick={() => {
            setDropdownActive(!dropdownActive);
          }}
        />
        <ListItem
          {...args}
          dropdownActive={dropdownActive}
          onClick={() => {
            setDropdownActive(!dropdownActive);
          }}
          listItem="I am the second list item!"
        />
      </div>
    </StyledResponsiveContainer>
  );
};

export const PlainNoHover = Template.bind({});
PlainNoHover.args = {
  variant: "plain",
};

export const PlainWithArrowOnHover = Template.bind({});
PlainWithArrowOnHover.args = {
  hover: true,
  cursorPointer: true,
  path: "/",
  variant: "plain arrow",
};

export const WithCheckIcon = Template.bind({});
WithCheckIcon.args = {
  variant: "icon-left",
  checkIconColor: theme.colors.blue,
  iconWidth: "16px",
};

export const WithOtherIcon = Template.bind({});
WithOtherIcon.args = {
  variant: "icon-left",
  icon: tenPlus,
  iconWidth: "40px",
};

export const WithCheckIconAndDottedArrowOnHover = Template.bind({});
WithCheckIconAndDottedArrowOnHover.args = {
  variant: "icon-check-arr-dots",
  checkIconColor: theme.colors.blue,
  iconWidth: "16px",
  hover: true,
  cursorPointer: true,
};

export const WithPlusOrMinusWhenActive = Template.bind({});
WithPlusOrMinusWhenActive.args = {
  variant: "dropdown-plus-minus",
  cursorPointer: true,
};

export const WithWithChevrons = Template.bind({});
WithWithChevrons.args = {
  variant: "dropdown-chevrons",
  cursorPointer: true,
};
