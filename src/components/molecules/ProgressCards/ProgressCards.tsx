import React, { useId, useState } from "react";
import { cards } from "../../../assets/android/cards";
import { StyledResponsiveContainer } from "../../atoms";
import { PageView } from "../PageView";
import { ProgressCard } from "../ProgressCard/ProgressCard";
import { Title } from "../Title";
import {
  StyledProgressCardsWrapper,
  StyledCardsTitle,
  StyledProgressCards,
} from "./StyledProgressCards";

export const ProgressCards = () => {
  const [cardVisited, setCardVisited] = useState(false);
  const [selectedCard, setSelectedCard] = useState("");

  const handleCardClick = (e: any) => {
    console.log("klick");
    const target = e.currentTarget;
    console.log("target", target);
    setSelectedCard(target.id);
  };
  console.log("selectedCard", selectedCard);

  return (
    <StyledProgressCards data-testid="progress-cards">
      <StyledProgressCardsWrapper data-testid="progress-cards">
        <StyledCardsTitle>Skills & Experience</StyledCardsTitle>
        {cards.map((card) => (
          <ProgressCard
            cardTitle={card.title}
            cardBodyText={card.text}
            key={card.id}
            visited={cardVisited}
            cardActive={selectedCard === card.id}
            id={card.id}
            handleCardClick={handleCardClick}
            selectedCard={selectedCard}
          />
        ))}
      </StyledProgressCardsWrapper>
    </StyledProgressCards>
  );
};
