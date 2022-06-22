import styled from "styled-components";
import { theme } from "../../../themes/MainTheme";
import { device } from "../../../utils";

export const StyledProgressCard = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 1rem;
  cursor: pointer;
  .check-mark {
    width: 1.4rem;
    rect {
      fill: ${theme.colors.gray100};
    }
    &.active,
    &.visited {
      rect {
        fill: ${theme.colors.blue};
      }
    }
  }
`;

export const StyledCardWrapper = styled.div`
  padding: 2rem;
  &.active {
    background-color: ${theme.colors.blueTransparent};
    border-radius: 2px;
  }
`;

export const StyledBarWithCheckIcon = styled.div`
  padding: 2.6rem 0 1rem 0;
  margin-right: 2.6rem;
`;

export const StyledVerticalBar = styled.div`
  width: 2px;
  height: 85%;
  margin: 5px auto 0;
  background-color: ${theme.colors.gray100};
  position: relative;
  &::after {
    content: "";
    background-color: ${theme.colors.blue};
    width: 100%;
    height: 0;
    position: absolute;
    top: 0;
    left: 0;
  }
  &.active {
    &::after {
      height: 100%;
      transition: all 0.6s;
    }
  }
  &.visited {
    &::after {
      height: 100%;
    }
  }
`;
