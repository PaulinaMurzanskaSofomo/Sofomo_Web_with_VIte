import React, { FC, MouseEvent, useState } from "react";
import { developers } from "../../assets/content/developers";
import { StyledNestedDropdown, StyledListOverlay } from "./StyledNestedDropdownList";
import { NestedList } from "../../components/molecules/NestedList/NestedList";

export const NestedDropdownList: FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [overlayActive, setOverlayActive] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  const handleActiveClass = (e: MouseEvent<Element, MouseEvent>) => {
    const target = e.currentTarget;
    setIsActive(!isActive);
    setOverlayActive(!overlayActive);
    setSelectedItem(target.id);
  };

  const handleOverlay = () => {
    setOverlayActive(false);
    setIsActive(false);
  };

  return (
    <StyledNestedDropdown className="grid-area-c">
      {developers.map((item) => (
        <NestedList
          isActive={isActive && selectedItem === item.id}
          selectedItem={selectedItem}
          itemOuter={item.type}
          itemOuterId={item.id}
          itemInnerList={item.role}
          key={item.id}
          handleActiveClass={handleActiveClass}
        />
      ))}
      <StyledListOverlay className={overlayActive ? "active" : ""} onClick={handleOverlay} />
    </StyledNestedDropdown>
  );
};
