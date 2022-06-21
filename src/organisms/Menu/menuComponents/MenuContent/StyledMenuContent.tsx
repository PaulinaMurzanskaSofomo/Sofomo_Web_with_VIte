import styled from "styled-components";
import { StyledResponsiveContainer } from "../../../../components/atoms";
import { navItemFadeIn, navItemSlideDown, navItemSlideUp } from "../../../../keyframes";
import { device } from "../../../../utils";

export const StyledMenuContent = styled(StyledResponsiveContainer)`
  height: max-content;
  transform: translateY(-1000px);
  animation: ${navItemSlideUp} 0.2s linear backwards;
  padding: 0;
  &.active {
    animation: ${navItemSlideDown} 0.2s ease 0.2s forwards;
  }
  @media ${device.laptop} {
    margin: 0 auto;
    padding: 4rem 0;
  }
`;

export const Wrapper = styled.div`
  opacity: 0;
  &.animate {
    animation: ${navItemFadeIn} 0.8s ease forwards;
  }
`;

export const StyledTitle = styled.div`
  padding-left: 3rem;
  margin-bottom: 1.5rem;
  display: none;
  @media ${device.laptop} {
    display: block;
  }
`;

export const StyledCardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media ${device.tablet} {
    flex-direction: row;
    flex-wrap: nowrap;
    width: 67%;
  }
  @media ${device.laptop} {
    width: 50%;
    padding: 0 1.5rem;
  }
`;
