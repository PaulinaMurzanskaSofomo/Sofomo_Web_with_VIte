import styled from "styled-components";
import { theme } from "../../../themes/MainTheme";
import { device } from "../../../utils";

interface Props {
  width?: string;
  height?: string;
  headingColor?: string;
}

export const StyledCard = styled.div<Props>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  &.hovered {
    &:hover {
      background-color: ${theme.colors.blueTransparent};
      transition: all 0.3s;
      h3 {
        color: ${theme.colors.blue};
      }
    }
  }
  &.medium-responsive {
    padding: 1.5rem;
    border-radius: 2px;
  }
  &.large-responsive {
    margin-bottom: 3.5rem;
    @media ${device.tablet} {
      margin-left: -1.5rem;
      padding: 1.5rem;
    }
  }
`;
export const StyledHeading = styled.h3<Props>`
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  &.small-nonresponsive {
    font-size: 1.6rem;
    line-height: 2.4rem;
    font-weight: 700;
    color: ${({ headingColor }) => headingColor};
  }
  &.large-nonresponsive {
    font-size: 2.2rem;
    line-height: 3rem;
    font-weight: 700;
    color: ${({ headingColor }) => headingColor};
  }
  &.large-responsive {
    font-size: 2rem;
    line-height: 2.8rem;
    font-weight: 700;
    color: ${({ headingColor }) => headingColor};
    margin-bottom: 1rem;
    @media ${device.tablet} {
      font-size: 2.2rem;
      line-height: 3rem;
      margin-bottom: 1.5rem;
    }
    @media ${device.laptop} {
      font-size: 2.6rem;
      line-height: 4rem;
    }
  }
  &.medium-responsive {
    font-size: 1.6rem;
    line-height: 2.4rem;
    font-weight: 400;
    color: ${({ headingColor }) => headingColor};
    text-transform: capitalize;
    margin-bottom: 0.5rem;
    @media ${device.tablet} {
      font-size: 1.5rem;
      line-height: 2.2rem;
    }
  }
`;

export const StyledCardBody = styled.div`
  width: 100%;
  height: auto;
`;
