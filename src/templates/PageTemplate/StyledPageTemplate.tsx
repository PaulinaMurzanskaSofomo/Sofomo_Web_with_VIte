import styled from "styled-components";
import { device } from "../../utils";

export const StyledPageTemplate = styled.main`
  position: absolute;
  top: 0;
  left: 0;
  position: relative;
  @media ${device.tablet} {
    margin: 8rem auto 0;
  }
`;

export const PageOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: white;
  opacity: 0.7;
  z-index: 3;
  display: none;
  &.active {
    @media ${device.laptop} {
      display: block;
    }
  }
`;
