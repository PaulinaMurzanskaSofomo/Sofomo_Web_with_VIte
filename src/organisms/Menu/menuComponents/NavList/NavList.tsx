import React, { MouseEvent } from "react";
import { mainMenu } from "../../../../assets/content/navMenu/mainMenu";
import { ListItem, List } from "../../../../components/molecules";
import { Button } from "../../../../components/atoms";
import { MenuContent } from "../MenuContent/MenuContent";
import { useContactFormContext } from "../../../../context/ContactFormContext";
import {
  StyledDividerLine,
  StyledNavList,
  StyledMobileContentWrapper,
  StyledMobileContent,
} from "./StyledNavList";

interface Props {
  handleActiveNavItem?: (e: MouseEvent<Element, MouseEvent>) => void;
  selectedItem?: string;
  navItemActive?: boolean;
  isMenuActive?: boolean;
}

export const NavList = ({
  handleActiveNavItem,
  selectedItem = "",
  navItemActive,
  isMenuActive,
}: Props) => {
  const { setFormActive } = useContactFormContext();

  return (
    <StyledNavList className={isMenuActive ? "active" : ""}>
      <List variant="navlist" margin="0">
        {mainMenu.map((navItem) => (
          <StyledMobileContentWrapper
            key={navItem.id}
            className={selectedItem === navItem.id && navItemActive ? "active" : ""}
          >
            <ListItem
              margin="0 0.5rem 1.5rem"
              variant={navItem.chevron ? "dropdown-chevrons" : "dropdown-no-chevrons"}
              listItem={navItem.title}
              key={navItem.id}
              id={navItem.id}
              onClick={handleActiveNavItem}
              dropdownActive={selectedItem === navItem.id && navItemActive}
              path={navItem.path}
              data-path={navItem.path}
              cursorPointer
            />
            {navItem.chevron && (
              <StyledMobileContent
                className={selectedItem === navItem.id && navItemActive ? "active" : ""}
              >
                <MenuContent selectedItem={selectedItem} navItemActive={navItemActive} />
              </StyledMobileContent>
            )}
            <StyledDividerLine />
          </StyledMobileContentWrapper>
        ))}
        <Button
          variant="secondary"
          label="Contact Us"
          margin="4rem 0 0 0"
          onClick={() => setFormActive(true)}
        />
      </List>
    </StyledNavList>
  );
};
