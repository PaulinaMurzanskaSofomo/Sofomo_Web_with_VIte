import React, { FC } from "react";
import { Link } from "react-router-dom";
import { theme } from "../../../themes/MainTheme";
import { List } from "../List";
import { ListItem } from "../ListItem";

interface Props {
  isActive: boolean;
  selectedItem: string;
  itemOuter: string;
  itemInnerList: { title: string; path: string }[];
  itemOuterId: string;
  handleActiveClass: (e: any) => void;
}

export const NestedList: FC<Props> = ({
  isActive,
  itemInnerList,
  itemOuter,
  itemOuterId,
  handleActiveClass,
}) => {
  return (
    <List variant="dropdown-outer" margin="0" isActive={isActive} id={itemOuter}>
      <ListItem
        id={itemOuterId}
        listItem={itemOuter}
        variant="dropdown-plus-minus"
        onClick={handleActiveClass}
        dropdownActive={isActive}
        backgroundColor="white"
        cursorPointer
      />
      <List variant="in-dropdown" isActive={isActive} margin="0" id={itemOuterId}>
        {itemInnerList.map((item, i) => (
          <Link key={i} to={item.path}>
            <ListItem
              checkIconColor={theme.colors.blue}
              listItem={item.title}
              variant="icon-check-arr-dots"
              hover
              backgroundColor={theme.colors.white}
            />
          </Link>
        ))}
      </List>
    </List>
  );
};
