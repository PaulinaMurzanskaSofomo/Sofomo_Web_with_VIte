import React, { MouseEvent, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useNavItemStateContext, usePageOverlayContext } from "../../context";
import { ROUTE } from "../../routes";
import { MenuDisplay } from "./menuComponents/MenuDisplay/MenuDisplay";
import { useMobileScreen, useTabletScreen } from "../../hooks";

export interface Props {
  closeMenu: VoidFunction;
}

export const Menu = ({ closeMenu }: Props) => {
  const { pageOverlayActive, setPageOverlayActive } = usePageOverlayContext();
  const { navItemActive, setNavItemActive } = useNavItemStateContext();
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);
  const [lineVisible, setLineVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");
  const isTabletScreen = useTabletScreen();
  const isSmallMobile = useMobileScreen();
  const location = useLocation();
  const navigate = useNavigate();
  const outsourceView = location.pathname === `/${ROUTE.OUTSOURCE}`;

  const toggleMobileMenu = () => {
    setIsMobileMenuActive(!isMobileMenuActive);
    setPageOverlayActive(false);
  };

  const handleActiveNavItem = (e: MouseEvent<Element, MouseEvent>) => {
    const target = e.currentTarget;
    const navBtnPath = target.getAttribute("data-path");

    setSelectedItem(target.id);

    if (navBtnPath) {
      navigate(navBtnPath);
    }
    if (target.id === selectedItem) {
      setNavItemActive(!navItemActive);
      if (navBtnPath) {
        setPageOverlayActive(false);
      } else setPageOverlayActive(!pageOverlayActive);
    }
    if (target.id !== selectedItem) {
      setNavItemActive(true);
      if (navBtnPath) {
        setPageOverlayActive(false);
        setNavItemActive(false);
      } else setPageOverlayActive(true);
    }
  };

  useEffect(() => {
    if (!isTabletScreen) {
      setIsMobileMenuActive(false);
    }
    setIsMobileMenuActive(false);
    closeMenu();
  }, [isTabletScreen]);

  const setLine = () => {
    if (window.scrollY > 66) {
      setLineVisible(true);
    } else {
      setLineVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", setLine);
    return () => {
      window.removeEventListener("scroll", setLine);
    };
  }, []);

  return (
    <MenuDisplay
      navItemActive={navItemActive}
      isMobileMenuActive={isMobileMenuActive}
      lineVisible={lineVisible}
      isSmallMobile={isSmallMobile}
      outsourceView={outsourceView}
      selectedItem={selectedItem}
      toggleMobileMenu={toggleMobileMenu}
      handleCloseMenu={closeMenu}
      handleActiveNavItem={handleActiveNavItem}
    />
  );
};
