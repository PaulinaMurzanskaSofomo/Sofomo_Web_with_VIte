import styled from "styled-components";
import { theme } from "../../../themes/MainTheme";
import { device } from "../../../utils";

interface Props {
  margin?: string;
}

export const StyledList = styled.div<Props>`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: ${({ margin }) => margin};
  &.standard {
    flex-direction: column;
  }
  &.plain {
    width: max-content;
  }
  &.in-dropdown {
    background-color: white;
    padding: 1rem 1rem 3rem 1rem;
    position: absolute;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    top: 5.5rem;
    left: 0;
    display: none;
    &.active {
      display: block;
    }
  }
  &.split {
    flex-direction: row;
    flex-wrap: wrap;
    @media ${device.tablet} {
      width: 120%;
    }
    .list-item {
      @media ${device.tablet} {
        width: calc(50% - 4rem);
        margin-right: 4rem;
        &:nth-child(2) {
          order: 3;
        }
        &:last-child {
          order: 4;
        }
      }
    }
  }
  &.dropdown-outer {
    width: 100%;
    position: relative;
    &.active {
      border-top: 4px solid ${theme.colors.blue};
      border-top-right-radius: 4px;
      border-top-left-radius: 4px;
      z-index: 2;
    }
    @media ${device.tablet} {
      max-width: 768px;
    }
    @media ${device.laptop} {
      max-width: 467px;
    }
  }
  &.navlist {
    padding: 2.5rem 1.5rem;
    @media ${device.laptop} {
      flex-direction: row;
      justify-content: flex-end;
      padding: 0;
      align-items: center;
    }
  }
`;
