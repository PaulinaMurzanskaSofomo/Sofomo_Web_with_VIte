import React, { useContext } from "react";
import { Meta, Story } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { Menu } from "./Menu";
import {
  NavItemStateContext,
  NavItemStateCtx,
  PageOverlayContext,
  PageOverlayCtx,
} from "../../context";

export default {
  title: "Organisms/Menu",
  component: Menu,
} as Meta;

const Template: Story = (args) => {
  const { setPageOverlayActive } = useContext(PageOverlayCtx);
  const { setNavItemActive } = useContext(NavItemStateCtx);

  const closeMenu = () => {
    setNavItemActive(false);
    setPageOverlayActive(false);
  };
  return (
    <NavItemStateContext>
      <PageOverlayContext>
        <BrowserRouter>
          <Menu closeMenu={closeMenu} />
        </BrowserRouter>
      </PageOverlayContext>
    </NavItemStateContext>
  );
};

export const Default = Template.bind({});
