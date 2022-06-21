import React from "react";
import { CurrencyBanner } from "./CurrencyBanner";
import { Meta } from "@storybook/react";

export default {
  title: "Molecules/CurrencyBanner",
  component: CurrencyBanner,
} as Meta;

export const Default = () => (
  <div className="container">
    <CurrencyBanner />
  </div>
);
