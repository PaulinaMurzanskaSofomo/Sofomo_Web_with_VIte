import React from "react";
import { Grid, Props } from "./Grid";
import { Meta, Story } from "@storybook/react";
import {
  leadersLogoList,
  logosOutsource,
  partnersLogosList,
} from "../../../assets/logos/logoLists";

export default {
  title: "Molecules/Grid",
  component: Grid,
} as Meta;

const Template: Story<Props> = (args) => (
  <div className="container">
    <p style={{ marginBottom: "4rem" }}>If you can't see any content, please switch to dark mode</p>
    <Grid {...args} />
  </div>
);
export const With6Items = Template.bind({});
With6Items.args = {
  itemsList: partnersLogosList,
  variant: "grid-6-items",
};

export const With5Items = Template.bind({});
With5Items.args = {
  itemsList: logosOutsource,
  variant: "grid-5-items",
};

export const With4Items = Template.bind({});
With4Items.args = {
  itemsList: leadersLogoList,
  variant: "grid-4-items",
};
