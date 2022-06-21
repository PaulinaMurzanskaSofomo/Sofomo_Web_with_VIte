import React, { MouseEvent } from "react";
import { sofomo } from "../../../../assets/logos/logotypes";
import { greenBadge, menu } from "../../../../assets/icons";
import { Link } from "react-router-dom";
import { ROUTE } from "../../../../routes";
import { Typography, Image } from "../../../../components/atoms";
import { NavList } from "../NavList/NavList";
import { theme } from "../../../../themes/MainTheme";
import { MenuContent } from "../MenuContent/MenuContent";
import {
  StyledMenuDisplay,
  StyledNavPositionWrapper,
  StyledMenuBarDisplayWrapper,
  StyledBars,
  StyledContentLaptopWrapper,
  StyledOutsourceTopTitle,
} from "./StyledMenuDisplay";

interface MenuProps {
  navItemActive: boolean;
  isMobileMenuActive: boolean;
  lineVisible: boolean;
  isSmallMobile: boolean;
  outsourceView: boolean;
  selectedItem: string;
  toggleMobileMenu: VoidFunction;
  handleCloseMenu: VoidFunction;
  handleActiveNavItem: (e: MouseEvent<Element, MouseEvent>) => void;
}
export const MenuDisplay = ({
  navItemActive,
  isMobileMenuActive,
  lineVisible,
  isSmallMobile,
  outsourceView,
  selectedItem,
  toggleMobileMenu,
  handleCloseMenu,
  handleActiveNavItem,
}: MenuProps) => {
  return (
    <StyledMenuDisplay
      className={`${navItemActive || isMobileMenuActive ? "active" : ""} ${
        lineVisible ? "line-visible" : ""
      }`}
    >
      <StyledMenuBarDisplayWrapper>
        <Link to={ROUTE.HOME_PAGE} onClick={handleCloseMenu}>
          <Image width="10.3rem" height="2.3rem" src={sofomo} alt="sofomo" />
        </Link>
        {outsourceView ? (
          <StyledOutsourceTopTitle>
            <Image width="1.8rem" src={greenBadge} alt="" />
            <Typography variant="body_text_5" fontWeight="700" color={theme.colors.gray400}>
              Outsource development partner for 10+ years
            </Typography>
          </StyledOutsourceTopTitle>
        ) : (
          <>
            <StyledNavPositionWrapper>
              <NavList
                handleActiveNavItem={handleActiveNavItem}
                selectedItem={selectedItem}
                navItemActive={navItemActive}
                isMenuActive={isMobileMenuActive}
              />
              <StyledContentLaptopWrapper className={navItemActive ? "active-laptop" : ""}>
                <MenuContent navItemActive={navItemActive} selectedItem={selectedItem} />
              </StyledContentLaptopWrapper>
            </StyledNavPositionWrapper>
            <StyledBars onClick={toggleMobileMenu}>
              <Image src={menu} alt="menu" />
            </StyledBars>
          </>
        )}
      </StyledMenuBarDisplayWrapper>
    </StyledMenuDisplay>
  );
};
