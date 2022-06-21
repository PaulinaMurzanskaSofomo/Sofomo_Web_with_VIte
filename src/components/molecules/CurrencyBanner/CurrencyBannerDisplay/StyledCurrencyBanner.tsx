import styled from "styled-components";
import { StyledResponsiveContainer } from "../../../atoms";
import { device } from "../../../../utils";
import { currencyLoop } from "../../../../keyframes";

export const StyledCurrencyDisplay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 60;
`;

export const StyledContainer = styled(StyledResponsiveContainer)`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
  @media ${device.tablet} {
    padding: 0 3rem;
  }
`;

export const StyledDate = styled.div`
  margin-right: 0.5rem;
`;

export const StyledRatesContainer = styled.div`
  width: 90%;
  padding: 0 3rem;
  overflow: hidden;
  @media ${device.tablet} {
    width: 80%;
  }
`;

export const StyledAnimatedBlocksWrapper = styled.div`
  display: flex;
  width: 200%;
`;

export const StyledCurrencyBox = styled.div`
  display: flex;
  width: auto;
  justify-content: flex-end;
  align-items: center;
  height: 3rem;
  width: 16rem;
`;

export const StyledCurrency = styled.div`
  margin: 0 1rem;
`;

export const StyledAnimatedBlock = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-evenly;
  animation: ${currencyLoop} 40s linear infinite;
`;
