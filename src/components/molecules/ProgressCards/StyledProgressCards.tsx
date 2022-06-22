import styled from "styled-components";
import { theme } from "../../../themes/MainTheme";
import { device } from "../../../utils";
import { StyledResponsiveContainer } from "../../atoms";

export const StyledProgressCards = styled(StyledResponsiveContainer)`
  display: flex;
  justify-content: left;
`;

export const StyledProgressCardsWrapper = styled.div`
  width: 100%;
`;
export const StyledCardsTitle = styled.h3`
  font-size: 2.6rem;
  color: ${theme.colors.dark};
  font-weight: 700;
  margin-bottom: 3.5rem;
`;
