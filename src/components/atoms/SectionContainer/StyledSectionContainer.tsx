import { ElementType } from "react";
import styled from "styled-components";
import { device } from "../../../utils/devices/devices";

interface Props {
  background?: string;
  as?: ElementType;
}

export const StyledSectionContainer = styled.div<Props>`
  width: 100%;
  height: auto;
  margin: 0 auto;
  min-width: 37.5rem;
  background-color: ${({ background }) => background};
  @media ${device.tablet} {
    width: 100vw;
  }
`;
