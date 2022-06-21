import styled from "styled-components";
import { StyledResponsiveContainer } from "../../components/atoms";
import { theme } from "../../themes/MainTheme";
import { device } from "../../utils/devices/devices";

export const StyledFooter = styled(StyledResponsiveContainer)`
  height: auto;
  min-width: 37.5rem;
  position: relative;
  padding: 8rem 1.5rem 12rem;
  display: grid;
  grid-gap: 3.5rem;
  grid-template-areas:
    "a a"
    "b b"
    "c c"
    "d d"
    "e f";
  .grid-area {
    &:first-child {
      grid-area: a;
      @media ${device.laptop} {
        width: 30rem;
      }
    }
    &:nth-child(2) {
      grid-area: b;
      @media ${device.laptop} {
        width: 30rem;
      }
    }
    &:nth-child(3) {
      grid-area: c;
      margin-bottom: 3rem;
      @media ${device.tablet} {
        margin: 0;
        width: 30rem;
      }
    }
    &:nth-child(4) {
      grid-area: d;
      margin: 5.5rem 0 1rem 0;
      width: 34.5rem;
      @media ${device.tablet} {
        margin: 9rem 0 0 0;
      }
      @media ${device.laptop} {
        margin: 0;
        width: 30rem;
      }
    }
    &:nth-child(5) {
      grid-area: e;
      @media ${device.laptop} {
        width: 100%;
      }
    }

    &:nth-child(6) {
      grid-area: f;
      @media ${device.laptop} {
        width: 18rem;
      }
    }
  }
  @media ${device.tablet} {
    padding: 12rem 3rem 15rem;
    max-width: 768px;
    grid-row-gap: 6.5rem;
    grid-column-gap: 6rem;
    grid-template-areas:
      "a a"
      "b c"
      "d d"
      "e f";
  }
  @media ${device.laptop} {
    padding: 12rem 3rem 11.5rem;
    max-width: 1094px;
    grid-row-gap: 15rem;
    grid-template-areas:
      "a a b b c c"
      "d d e f f f";
  }
`;

export const StyledCardBody = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
`;

export const StyledSpan = styled.span`
  position: absolute;
  bottom: 3rem;
  left: 1.5rem;
  font-size: 1.4rem;
  color: ${theme.colors.gray300};
  width: max-content;
  @media ${device.tablet} {
    bottom: 6rem;
    left: 3rem;
  }
`;

export const StyledDividerLine = styled.div`
  width: calc(100% - 3rem);
  height: 1px;
  background-color: ${theme.colors.gray100};
  position: absolute;
  top: 66rem;
  left: 1.5rem;
  @media ${device.tablet} {
    top: 55.7rem;
    left: 3rem;
    width: calc(100% - 6rem);
  }
  @media ${device.laptop} {
    top: 34.6rem;
  }
`;
