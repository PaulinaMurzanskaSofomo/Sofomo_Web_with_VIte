import React, { FC, ReactNode, useContext, useEffect } from "react";
import { NavItemStateCtx } from "../../context";
import { PageOverlayCtx } from "../../context/PageOverlayContext";
import { ContactModal, Footer, Menu } from "../../organisms";
import { StyledPageTemplate, PageOverlay } from "./StyledPageTemplate";
import { useLocation } from "react-router-dom";
import { CurrencyBanner } from "../../components/molecules";

interface Props {
  children: ReactNode;
}

export const PageTemplate: FC<Props> = ({ children }) => {
  const { pageOverlayActive, setPageOverlayActive } = useContext(PageOverlayCtx);
  const { setNavItemActive } = useContext(NavItemStateCtx);

  const location = useLocation();

  const closeMenu = () => {
    setNavItemActive(false);
    setPageOverlayActive(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setPageOverlayActive(false);
  }, [location]);

  return (
    <StyledPageTemplate>
      <CurrencyBanner />
      <Menu closeMenu={closeMenu} />
      {children}
      <Footer />
      <PageOverlay className={pageOverlayActive ? "active" : ""} onClick={closeMenu} />
      <ContactModal formSubtitle="Send us a message and we’ll be in touch" formTitle="Let's Talk" />
    </StyledPageTemplate>
  );
};
