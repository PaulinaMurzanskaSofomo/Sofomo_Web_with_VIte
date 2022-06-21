import React from "react";
import { Meta, Story } from "@storybook/react";
import { SectionContainer, StyledResponsiveContainer } from "../../atoms";
import { theme } from "../../../themes/MainTheme";
import { Title, ITitle } from "./Title";

export default {
  title: "Molecules/Title",
  component: Title,
  argTypes: {},
} as Meta;

const Template: Story<ITitle> = (args) => (
  <div className="container">
    <StyledResponsiveContainer>
      <Title {...args} />
    </StyledResponsiveContainer>
  </div>
);
export const Default = Template.bind({});
Default.args = {
  title: "Scale your development team with Sofomo",
  titleVariant: "heading_2",
};

export const WithUppercaseTitle = Template.bind({});
WithUppercaseTitle.args = {
  title: "Scale your development team with Sofomo",
  titleVariant: "heading_2",
  label: "Clients Success",
};

export const Highlighted = Template.bind({});
Highlighted.args = {
  titleVariant: "heading_3",
  label: "Proven Approach",
  title: `Sofomo developers join your team &\u00a0become`,
  titleHighlighted: "YOUR superpower!",
};

export const WithQuoteHighlightMiddle = Template.bind({});
WithQuoteHighlightMiddle.args = {
  titleVariant: "heading_2",
  title: "The best thing about our Sofomo developers is that they’re",
  titleHighlighted: "Our Teammates,",
  titleAfter: "working with us every step of the way.",
  quotationMarkColor: theme.colors.gray500,
  quotationMarkSize: "20px",
};

export const HighlightedQuote = Template.bind({});
HighlightedQuote.args = {
  quotationMarkColor: theme.colors.white,
  quotationMarkSize: "3rem",
  label: "Your struggle is real. Sofomo can help.",
  labelColor: "#b5bff4",
  titleColor: theme.colors.white,
  titleVariant: "heading_2",
  titleHighlighted: "We understand that scaling development team is the hardest thing",
  titleAfter: `digital companies do, period.That's\u00a0why we started Sofomo a decade ago.`,
  highlightColor: theme.colors.purpleHighlight,
};
