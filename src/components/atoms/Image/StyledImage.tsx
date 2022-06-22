import styled from "styled-components";
import { device } from "../../../utils";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface Props {
  width?: string;
  height?: string;
  margin?: string;
}

export const StyledImageContainer = styled.div<Props>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
  text-align: center;
  position: relative;
  p {
    opacity: 0.4;
  }
  svg {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
  &.android {
    svg {
      z-index: 3;
    }
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  &.grid-item {
    width: auto;
    height: auto;
  }
  &.with-label {
    @media ${device.tablet} {
      margin-bottom: 0.6rem;
    }
    @media ${device.laptop} {
      margin-bottom: 1rem;
    }
  }
`;
