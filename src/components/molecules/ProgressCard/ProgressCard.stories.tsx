import React from "react";
import { Meta, Story } from "@storybook/react";
import { ProgressCard, Props } from "./ProgressCard";
import { StyledResponsiveContainer } from "../../atoms";

export default {
  title: "Molecules/Progress Card",
  component: ProgressCard,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => (
  <div className="container">
    <StyledResponsiveContainer>
      <ProgressCard {...args} />
    </StyledResponsiveContainer>
  </div>
);
export const Default = Template.bind({});
Default.args = {
  cardTitle: "Android Technologies",
  cardBodyText:
    "Proficient in Kotlin/Java/C++, Coroutines/RxAndroid, Retrofit Dagger/Koin, RESTful API’s, GraphQL, WebRTC, Firebase",
  cardActive: false,
  visited: true,
};
