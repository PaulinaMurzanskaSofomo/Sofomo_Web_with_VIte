import React from "react";
import { StyledResponsiveContainer, Typography } from "../../atoms";
import { Card, Props } from "./Card";
import { Meta, Story } from "@storybook/react";
import { List } from "../List";
import { developers1 } from "../../../assets/content/footer/SectionAbout";
import { ListItem } from "../ListItem";
import { socialIconsList } from "../../../assets/icons/socialIconsList";
import { theme } from "../../../themes/MainTheme";

export default {
  title: "Molecules/Card",
  component: Card,
} as Meta;

const Template: Story<Props> = (args) => (
  <div className="container">
    <StyledResponsiveContainer>
      <Card {...args} width="200px" />
    </StyledResponsiveContainer>
  </div>
);

export const CardWithList = Template.bind({});
CardWithList.args = {
  variant: "medium-responsive",
  width: "200px",
  title: "List of Items",
  children: (
    <List variant="plain">
      {developers1.map((item, i) => (
        <ListItem variant="plain" listItem={item.title} key={i} hover />
      ))}
    </List>
  ),
};

export const CardWithSocials = Template.bind({});
CardWithSocials.args = {
  variant: "small-nonresponsive",
  width: "200px",
  title: "About us",
  socialIconsList: socialIconsList,
  children: (
    <Typography variant="body_text_5" width="200px" color={theme.colors.gray400}>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem rem reiciendis asperiores!
    </Typography>
  ),
};
