import React from "react";
import { StyledResponsiveContainer } from "../StyledResponsiveContainer";
import { Image, Props } from "./Image";
import { Meta, Story } from "@storybook/react";
import { devices } from "../../../assets/images";
import { kahoots } from "../../../assets/logos/logotypes";

export default {
  title: "Atoms/Image",
  component: Image,
} as Meta;

const Template: Story<Props> = (args) => (
  <div className="container">
    <StyledResponsiveContainer>
      <p style={{ marginBottom: "4rem" }}>
        If you don't see any content, please switch to dark mode.
      </p>
      <Image {...args} />
    </StyledResponsiveContainer>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  src: devices,
  width: "200px",
  height: "auto",
};

export const IconType = Template.bind({});
IconType.args = {
  src: kahoots,
  width: "200px",
  height: "auto",
};

export const IconWithLabel = Template.bind({});
IconWithLabel.args = {
  src: kahoots,
  width: "200px",
  height: "auto",
  label: "lorem ipsum",
};
