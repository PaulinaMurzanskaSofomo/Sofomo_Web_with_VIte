import React, { useEffect, useRef, useState, useId } from "react";
import { Link } from "react-router-dom";
import { Typography } from "../../../../components/atoms";
import { Card } from "../../../../components/molecules";
import { DevelopersGrid } from "../DevelopersGrid/DevelopersGrid";
import { whatWeDoCards, aboutUsCards } from "../../../../assets/content/navMenu/cards";
import { StyledMenuContent, StyledTitle, StyledCardsWrapper, Wrapper } from "./StyledMenuContent";
import { theme } from "../../../../themes/MainTheme";
import { useLaptopScreen } from "../../../../hooks";

interface Props {
  navItemActive?: boolean;
  selectedItem: string;
  label?: string;
  cardsList?: any;
}

export const MenuContent = ({ navItemActive, selectedItem }: Props) => {
  const laptopScreen = useLaptopScreen();
  const [droppedItemId, setDroppedItemId] = useState("");
  const selectedItemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const target = selectedItemRef.current;
    const targetId = target?.id;
    targetId && setDroppedItemId(targetId);
  }, [selectedItem]);

  return (
    <StyledMenuContent className={navItemActive ? "active" : ""}>
      <Wrapper
        className={droppedItemId === selectedItem ? "animate" : ""}
        id={selectedItem}
        ref={selectedItemRef}
      >
        {selectedItem === "menu-2" ? (
          <DevelopersGrid />
        ) : (
          <>
            <StyledTitle>
              <Typography
                as="p"
                variant="body_text_2"
                color={theme.colors.gray400}
                textTransform="uppercase"
              >
                {selectedItem === "menu-1" && "What we do"}
                {selectedItem === "menu-5" && "About us"}
              </Typography>
            </StyledTitle>
            <StyledCardsWrapper>
              {(selectedItem === "menu-1" ? whatWeDoCards : aboutUsCards).map((card) => (
                <Link to={card.path} key={useId()}>
                  <Card title={card.title} variant="medium-responsive" hover>
                    <Typography as="p" variant="body_text_7" color={theme.colors.gray600}>
                      {card.text}
                    </Typography>
                  </Card>
                </Link>
              ))}
            </StyledCardsWrapper>
            {laptopScreen && <DevelopersGrid variant="clickable-cards" />}
          </>
        )}
      </Wrapper>
    </StyledMenuContent>
  );
};
