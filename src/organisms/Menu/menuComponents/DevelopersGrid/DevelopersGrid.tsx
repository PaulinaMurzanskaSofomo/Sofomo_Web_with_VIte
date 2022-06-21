import React, { MouseEvent, useState, useId } from "react";
import { developers } from "../../../../assets/content/developers";
import { devices } from "../../../../assets/images";
import { Image, Typography } from "../../../../components/atoms";
import { ListItem } from "../../../../components/molecules";
import { theme } from "../../../../themes/MainTheme";
import { Link } from "react-router-dom";
import { useLaptopScreen } from "../../../../hooks";
import { DevelopersGridVariant } from "../../../../types/developersGridTypes";
import {
  StyledDevelopersGrid,
  StyledDevelopersWrapper,
  StyledTitle,
  StyledDescription,
  StyledListOuter,
  StyledImageWrapper,
  StyledListInner,
} from "./StyledDevelopersGrid";

export interface Props {
  variant?: DevelopersGridVariant;
}

export const DevelopersGrid = ({ variant }: Props) => {
  const [devClicked, setDevClicked] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");
  const largeScreen = useLaptopScreen();

  const handleSelectedItem = (e: MouseEvent<Element, MouseEvent>) => {
    const target = e.currentTarget.id;
    setSelectedItem(target);
    setDevClicked(!devClicked);
  };

  return (
    <StyledDevelopersWrapper>
      <StyledTitle>
        <Typography
          as="p"
          variant="body_text_2"
          color={theme.colors.gray400}
          textTransform="uppercase"
        >
          Hire Developers
        </Typography>
      </StyledTitle>
      <StyledDevelopersGrid
        className={`${variant} ${devClicked ? `active-${selectedItem}` : ""}`}
        id={selectedItem}
      >
        {developers.map((dev) => (
          <StyledListOuter
            onMouseLeave={() => {
              largeScreen && setDevClicked(false);
            }}
            key={dev.id}
            className={`grid-area ${variant} ${
              devClicked && dev.id === selectedItem ? "active" : ""
            }`}
          >
            <ListItem
              variant="icon-left larger-to-smaller"
              listItem={dev.type}
              icon={dev.icon}
              iconWidth="1.8rem"
              onClick={handleSelectedItem}
              hover
              id={dev.id}
            />
            {variant === "clickable-cards" && largeScreen && (
              <StyledDescription
                className={`${variant} ${devClicked && dev.id === selectedItem ? "active" : ""}`}
              >
                <Typography as="p" variant="body_text_7" color={theme.colors.gray600}>
                  {dev.description}
                </Typography>
              </StyledDescription>
            )}
            <StyledListInner
              className={`${variant} ${devClicked && dev.id === selectedItem ? "active" : ""}`}
            >
              {dev.role.map((role) => (
                <Link to={role.path} key={useId()}>
                  <ListItem variant="plain arrow" listItem={role.title} hover />
                </Link>
              ))}
            </StyledListInner>
          </StyledListOuter>
        ))}
        {largeScreen && (
          <StyledImageWrapper className={`grid-area ${variant}`}>
            <Image
              src={devices}
              alt="devices"
              label="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            />
          </StyledImageWrapper>
        )}
      </StyledDevelopersGrid>
    </StyledDevelopersWrapper>
  );
};
