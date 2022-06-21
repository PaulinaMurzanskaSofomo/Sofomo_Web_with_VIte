import styled from "styled-components";
import { device } from "../../../../utils/devices/devices";
import { StyledResponsiveContainer } from "../../../../components/atoms";
import { theme } from "../../../../themes/MainTheme";

export const StyledDevelopersWrapper = styled(StyledResponsiveContainer)`
  padding: 0;
  @media ${device.laptop} {
    margin: 0 auto;
    padding: 4rem 0;
  }
`;

export const StyledTitle = styled.div`
  display: none;
  padding-left: 3rem;
  margin-bottom: 1.5rem;
  @media ${device.laptop} {
    display: block;
  }
`;

export const StyledListOuter = styled.ul`
  padding: 1.5rem;
  margin: 0;
  &:hover {
    background-color: ${theme.colors.blueTransparent};
    transition: all 0.3s;
    border-radius: 4px;
  }
  &.clickable-cards {
    display: none;
    @media ${device.laptop} {
      display: block;
    }
  }
`;

export const StyledListInner = styled.ul`
  padding-left: 3.5rem;
  margin: 1rem 0 0 0;
  &.clickable-cards {
    display: none;
    &.active {
      display: block;
    }
  }
`;

export const StyledDescription = styled.div`
  width: auto;
  height: auto;
  padding: 0.5rem 1.5rem 1.5rem 3.8rem;
  &.active {
    display: none;
  }
`;

export const StyledImageWrapper = styled.div`
  img {
    margin-bottom: 2rem;
    height: 18.8rem;
  }
  &.clickable-cards {
    margin-top: -80%;
  }
`;

export const StyledDevelopersGrid = styled(StyledResponsiveContainer)`
  display: grid;
  grid-gap: 0.5rem;
  grid-template-areas: "a" "b" "c" "d" "e" "f";
  .grid-area {
    &:first-child {
      grid-area: a;
    }
    &:nth-child(2) {
      grid-area: b;
    }
    &:nth-child(3) {
      grid-area: c;
    }
    &:nth-child(4) {
      grid-area: d;
    }
    &:nth-child(5) {
      grid-area: e;
    }
    &:nth-child(6) {
      grid-area: f;
    }
    &:nth-child(7) {
      grid-area: g;
    }
    @media ${device.laptop} {
      width: 26rem;
    }
  }
  @media ${device.tablet} {
    grid-template-areas: "a b c g" "d e f g";
  }
  @media ${device.laptop} {
    grid-template-areas: "a b c g" "d e f g";
    margin-top: 1.5rem;
    padding: 0 1.5rem;
    &.clickable-cards {
      &.active-devs-1 {
        grid-template-areas:
          "a b c g"
          "a e f g";
        .grid-area:nth-child(4) {
          display: none;
        }
        .grid-area:nth-child(1) {
          height: max-content;
        }
      }
      &.active-devs-2 {
        grid-template-areas:
          "a b c g"
          "d b f g";
        .grid-area:nth-child(5) {
          display: none;
        }
        .grid-area:nth-child(2) {
          height: max-content;
        }
      }
      &.active-devs-3 {
        grid-template-areas:
          "a b c g"
          "d e c g";
        .grid-area:nth-child(6) {
          display: none;
        }
        .grid-area:nth-child(3) {
          height: max-content;
        }
      }
    }
  }
`;
