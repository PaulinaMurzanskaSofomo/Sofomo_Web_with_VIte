import React, { ElementType, FC } from "react";
import { StyledSectionContainer } from "./StyledSectionContainer";

interface Props {
  background?: string;
  children?: any;
  as?: ElementType;
}

export const SectionContainer: FC<Props> = ({ children, background = "none", as }) => {
  return (
    <StyledSectionContainer background={background} as={as}>
      {children}
    </StyledSectionContainer>
  );
};
