import React from "react";
import { PageTemplate } from "./PageTemplate";
import { Meta, Story } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "Templates/PageTemplate",
  component: PageTemplate,
} as Meta;

const styles = {
  margin: "100px auto",
  padding: "50px",
};

const Template: Story = (args) => (
  <BrowserRouter>
    <PageTemplate>
      <div style={styles}>Content of the page comes here</div>
    </PageTemplate>
  </BrowserRouter>
);

export const Default = Template.bind({});
