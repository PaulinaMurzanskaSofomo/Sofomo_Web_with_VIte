import styled from "styled-components";
import { theme } from "../../themes/MainTheme";
import { device } from "../../utils";

export const StyledNestedDropdown = styled.div`
  margin-top: 3.5rem;
  width: 100%;
  height: auto;
  position: relative;
  @media ${device.laptop} {
    align-items: flex-start;
  }
`;

export const StyledListOverlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.purple};
  opacity: 0.85;
  top: 0;
  left: 0;
  z-index: 0;
  position: absolute;
  display: none;
  &.active {
    display: block;
  }
`;
