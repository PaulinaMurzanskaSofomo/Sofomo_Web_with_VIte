import styled from "styled-components";
import { device } from "../../../utils/devices/devices";

export const StyledResponsiveContainer = styled.div`
  margin: 0 auto;
  max-width: 1094px;
  @media ${device.tablet} {
    max-width: 768px;
  }
  @media ${device.laptop} {
    max-width: 1094px;
  }
`;
