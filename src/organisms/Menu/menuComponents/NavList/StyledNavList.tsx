import styled from "styled-components";
import { theme } from "../../../../themes/MainTheme";
import { device } from "../../../../utils";
import { StyledResponsiveContainer } from "../../../../components/atoms";

export const StyledNavList = styled(StyledResponsiveContainer)`
  width: 100%;
  height: 0;
  &.active {
    height: 100vh;
    overflow-y: scroll;
    padding-bottom: 4.5rem;
  }
  @media ${device.laptop} {
    height: 3.6rem;
    padding: 0;
  }
`;

export const StyledMobileContentWrapper = styled.div`
  margin-bottom: 5px;
  position: relative;
  @media ${device.laptop} {
    margin: 0;
  }
`;

export const StyledMobileContent = styled.div`
  width: 100%;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s;
  transition-delay: 0.1s;
  &.active {
    transition: max-height 0.3s;
    max-height: 1200px;
  }
  @media ${device.laptop} {
    display: none;
  }
`;

export const StyledDividerLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${theme.colors.gray100};
  position: absolute;
  bottom: 0;
  left: 0;
  @media ${device.laptop} {
    display: none;
  }
`;
