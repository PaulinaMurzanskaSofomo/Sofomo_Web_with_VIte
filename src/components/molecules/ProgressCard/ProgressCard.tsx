import React, { FC, useState } from "react";
import { ReactSVG } from "react-svg";
import { Card } from "../Card";
// import { ReactComponent as CheckMark } from "../../../assets/icons/CheckMark.svg";
import { checkSvg } from "../../../assets/icons";
import {
  StyledProgressCard,
  StyledBarWithCheckIcon,
  StyledVerticalBar,
  StyledCardWrapper,
} from "./StyledProgressCard";
import { Typography } from "../../atoms";
import { theme } from "../../../themes/MainTheme";

export interface Props {
  cardTitle: string;
  cardBodyText: string;
  cardActive?: boolean;
  visited?: boolean;
  id: string;
  handleCardClick?: (e: any) => void;
  selectedCard?: string;
}
export const ProgressCard: FC<Props> = ({
  cardTitle,
  cardBodyText,
  cardActive,
  visited,
  id,
  handleCardClick,
}) => {
  return (
    <StyledProgressCard
      data-testid="progress-card"
      id={id}
      onClick={handleCardClick}
      className={cardActive ? "active" : ""}
    >
      <StyledBarWithCheckIcon data-testid="vertical-bar">
        <ReactSVG
          src={checkSvg}
          className={`check-mark ${cardActive ? "active" : ""} ${visited ? "visited" : ""}`}
          data-testid="check-mark"
        />
        <StyledVerticalBar
          className={`${cardActive ? "active" : ""} ${visited ? "visited" : ""}`}
          data-testid="vertical-line"
        />
      </StyledBarWithCheckIcon>
      <StyledCardWrapper className={cardActive ? "active" : ""} data-testid="card-wrapper">
        <Card variant="medium-xl" title={cardTitle}>
          <Typography as="p" variant="body_text_10" color={theme.colors.gray500}>
            {cardBodyText}
          </Typography>
        </Card>
      </StyledCardWrapper>
    </StyledProgressCard>
  );
};
