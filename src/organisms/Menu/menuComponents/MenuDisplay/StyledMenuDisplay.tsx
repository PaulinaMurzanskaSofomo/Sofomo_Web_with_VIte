import styled from "styled-components";
import { theme } from "../../../../themes/MainTheme";
import { device } from "../../../../utils/devices/devices";
import { menuLineFadeIn, menuLineFadeOut } from "../../../../keyframes";
import { StyledResponsiveContainer } from "../../../../components/atoms";

export const StyledMenuDisplay = styled.nav`
  width: 100%;
  margin: 0 auto;
  min-width: 34.5rem;
  position: fixed;
  top: 3rem;
  left: 0;
  z-index: 40;
  background-color: ${theme.colors.white};
  height: 6.6rem;
  &:after {
    content: "";
    width: 100%;
    height: 1px;
    position: absolute;
    top: 6.5rem;
    left: 0;
    z-index: 21;
    animation: ${menuLineFadeOut} 0.3s ease-out 0.3s 1 backwards;
  }
  &.active,
  &.line-visible {
    &:after {
      animation: ${menuLineFadeIn} 0.3s ease-out 0.2s 1 forwards;
    }
  }
  @media ${device.tablet} {
    height: 8rem;
    width: 100vw;
    &:after {
      top: 7.9rem;
    }
  }
`;

export const StyledMenuBarDisplayWrapper = styled(StyledResponsiveContainer)`
  padding: 0 1.5rem;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  position: relative;
  height: 6.6rem;
  @media ${device.tablet} {
    height: 8rem;
    padding: 0 3rem;
  }
`;

export const StyledNavPositionWrapper = styled.div`
  background-color: ${theme.colors.white};
  height: 3.6rem;
  overflow-y: hidden;
  min-width: 37.5rem;
  @media (max-width: 1094px) {
    position: absolute;
    top: 8rem;
    left: 0;
    left: calc(-1 * ((100vw - 768px) / 2));
    width: 100vw;
    height: auto;
  }
  @media (max-width: 768px) {
    width: 100vw;
    top: 6.6rem;
    left: 0;
  }
`;

export const StyledContentLaptopWrapper = styled.div`
  @media ${device.mobile} {
    max-height: 0;
  }
  position: absolute;
  top: 6.6rem;
  width: 100vw;
  left: calc(-1 * ((100vw - 1094px) / 2));
  background-color: ${theme.colors.white};
  overflow: hidden;
  @media ${device.laptop} {
    max-height: 0;
    transition: max-height 0.3s;
    transition-delay: 0.1s;
    top: 8rem;
    box-shadow: 0px 18px 40px -15px rgba(50, 49, 94, 0.2);
    &.active-laptop {
      box-shadow: 0px 18px 40px -15px rgba(50, 49, 94, 0.2);
      transition: max-height 0.3s;
      max-height: 1200px;
    }
  }
`;

export const StyledBars = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  display: block;
  cursor: pointer;
  @media ${device.laptop} {
    display: none;
  }
`;

export const StyledOutsourceTopTitle = styled.div`
  display: none;
  @media ${device.tablet} {
    display: block;
  }
`;
