import React, { useState } from "react";
import { StyledResponsiveContainer } from "../../atoms";
import { Meta, Story } from "@storybook/react";
import { List, Props } from "./List";
import { developers } from "../../../assets/content/developers";
import { ListItem } from "../ListItem";
import { mainMenu } from "../../../assets/content/navMenu/mainMenu";
import { theme } from "../../../themes/MainTheme";

export default {
  title: "Molecules/List",
  component: List,
} as Meta;

export const ListPlain: Story<Props> = (args) => (
  <div className="container">
    <StyledResponsiveContainer>
      <List {...args}>
        {developers.map((item) => (
          <ListItem listItem={item.type} variant="plain" />
        ))}
      </List>
    </StyledResponsiveContainer>
  </div>
);
ListPlain.args = {
  variant: "plain",
};

export const ListInDropdown: Story<Props> = (args) => (
  <StyledResponsiveContainer>
    <div className="container items">
      <List {...args} variant="in-dropdown" isActive={true}>
        {developers.map((item) => (
          <ListItem
            listItem={item.type}
            variant="icon-check-arr-dots"
            checkIconColor={theme.colors.blue}
            hover
          />
        ))}
      </List>
    </div>
  </StyledResponsiveContainer>
);

export const ListSplit: Story<Props> = (args) => (
  <StyledResponsiveContainer>
    <div className="container">
      <List {...args} variant="split" isActive={true}>
        {developers.map((item) => (
          <ListItem
            listItem={item.type}
            variant="icon-left"
            checkIconColor={theme.colors.blue}
            hover
          />
        ))}
      </List>
    </div>
  </StyledResponsiveContainer>
);

export const Navlist: Story<Props> = (args) => {
  const [dropdownActive, setDropdownActive] = useState(false);
  return (
    <div className="container">
      <StyledResponsiveContainer>
        <List {...args} variant="navlist">
          {mainMenu.map((item) => (
            <ListItem
              listItem={item.title}
              variant={item.chevron ? "dropdown-chevrons" : "dropdown-no-chevrons"}
              checkIconColor={theme.colors.blue}
              onClick={() => setDropdownActive(!dropdownActive)}
              dropdownActive={dropdownActive}
            />
          ))}
        </List>
      </StyledResponsiveContainer>
    </div>
  );
};
