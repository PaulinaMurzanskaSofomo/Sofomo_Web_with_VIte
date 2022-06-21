import styled from "styled-components";
import { theme } from "../../../themes/MainTheme";
import { device } from "../../../utils";
import { arrowRightPlain } from "../../../assets/icons";
import { ElementType } from "react";

interface Props {
  color?: string;
  hoverWeight?: string;
  cursorPointer?: string;
  iconWidth?: string;
  iconMargin?: string;
  checkIconColor?: string;
}
interface WrapperProps extends Props {
  as?: ElementType;
  itemWidth?: string;
  backgroundColor?: string;
  margin?: string;
}
export const StyledItemWrapper = styled.div<WrapperProps>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  margin: ${({ margin }) => margin};
  color: ${({ color }) => color};
  width: ${({ itemWidth }) => itemWidth};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: nowrap;
  position: relative;
  cursor: ${({ cursorPointer }) => cursorPointer};
  &.plain {
    margin-bottom: 1.4rem;
  }
  &.icon-check-arr-dots {
    padding: 1rem 1.2rem 1rem 2.5rem;
    border-radius: 4px;
  }
  &.icon-left {
    align-items: flex-start;
    @media ${device.tablet} {
      margin-bottom: 2rem;
    }
    &.larger-to-smaller {
      margin: 0;
    }
  }

  &.dropdown-plus-minus {
    padding: 1.8rem 2rem 1.8rem 3rem;
    border-radius: 4px;
    height: 6.4rem;
    margin-bottom: 2.5rem;
    background-color: ${theme.colors.white};
    @media ${device.tablet} {
      height: 6.4rem;
      margin-bottom: 2.5rem;
      padding: 2rem 2rem 2rem 3rem;
    }
  }
  &.dropdown-chevrons,
  &.dropdown-no-chevrons {
    height: 5.6rem;
    @media ${device.tablet} {
      height: 4.6rem;
    }
    @media ${device.laptop} {
      height: 3.6rem;
      margin: 0 0 0 3.4rem;
    }
  }
  &.hovered {
    &:hover {
      transition: all 0.9s;
      color: ${theme.colors.blue};
      font-weight: ${({ hoverWeight }) => hoverWeight};
      p {
        color: ${theme.colors.blue};
        font-weight: ${({ hoverWeight }) => hoverWeight};
      }
      .arrow {
        &:after {
          display: block;
        }
      }
      &.icon-check-arr-dots {
        font-weight: 400;
        background-color: ${theme.colors.blueTransparent};
        p {
          font-weight: ${({ hoverWeight }) => hoverWeight};
        }
        .last {
          display: block;
        }
      }
    }
  }
`;

export const StyledIcon = styled.div<Props>`
  align-items: flex-start;
  justify-content: center;
  width: auto;
  display: none;
  margin: ${({ iconMargin }) => iconMargin};
  height: 100%;
  padding-top: 5px;
  &.icon-left,
  &.icon-check-arr-dots {
    display: flex;
  }
  &.larger-to-smaller {
    display: flex;
    margin-right: 1.5rem;
  }
  &.icon-left-bold {
    display: flex;
    margin-right: 2rem;
  }
  @media ${device.tablet} {
    align-self: flex-start;
    align-items: flex-start;
    padding-top: 0.5rem;
  }
  .check-icon {
    rect {
      fill: ${({ checkIconColor }) => checkIconColor};
    }
  }
`;

export const StyledItem = styled.p<Props>`
  position: relative;
  &.plain,
  &.icon-left {
    font-size: 1.4rem;
    line-height: 2.4rem;
    font-weight: 400;
    letter-spacing: 0.4px;
    color: ${({ color }) => color};
  }
  &.plain {
    line-height: 1.8rem;
  }
  &.larger-to-smaller,
  &.icon-check-arr-dots {
    font-size: 1.6rem;
    line-height: 2.4rem;
    color: ${({ color }) => color};
  }
  &.dropdown-plus-minus {
    font-weight: 700;
  }
  &.icon-left {
    @media ${device.tablet} {
      font-size: 1.7rem;
      line-height: 3rem;
      letter-spacing: 0.4px;
    }
  }
  &.icon-left-bold {
    font-size: 1.6rem;
    line-height: 2.4rem;
    color: ${({ color }) => color};
    font-weight: 700;
    @media ${device.tablet} {
      font-size: 1.8rem;
      line-height: 2.4rem;
    }
    @media ${device.tablet} {
      font-size: 2.2rem;
      line-height: 3rem;
    }
  }
  &.icon-check-arr-dots,
  &.dropdown-plus-minus {
    @media ${device.tablet} {
      font-size: 1.8rem;
      line-height: 2.4rem;
    }
  }
  &.dropdown-plus-minus {
    font-weight: 700;
  }
  &.dropdown-chevrons,
  &.dropdown-no-chevrons {
    font-size: 1.8rem;
    line-height: 2.6rem;
    letter-spacing: 0.4px;
    color: ${({ color }) => color};
    text-transform: capitalize;
    @media ${device.tablet} {
      font-size: 1.5rem;
      line-height: 2.2rem;
      letter-spacing: 0;
    }
    @media ${device.laptop} {
      color: ${theme.colors.gray600};
    }
    &.active {
      color: ${theme.colors.blue};
    }
  }
  &.larger-to-smaller {
    @media ${device.tablet} {
      font-size: 1.5rem;
      line-height: 2.2rem;
      letter-spacing: 0;
    }
  }
  &.arrow {
    text-transform: capitalize;
    color: ${({ color }) => color};
    @media ${device.tablet} {
      font-size: 1.2rem;
      line-height: 2rem;
      letter-spacing: 0.4px;
    }
    &:after {
      content: "";
      background-image: url(${arrowRightPlain});
      position: absolute;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      top: 50%;
      transform: translateY(-50%);
      right: -3rem;
      width: 1.6rem;
      height: 1.6rem;
      display: none;
    }
  }
  &:first-letter {
    text-transform: capitalize;
  }
`;

export const StyledIconAfter = styled.div<Props>`
  display: none;
  &.icon-check-arr-dots,
  &.dropdown-plus-minus {
    position: absolute;
    right: 1.2rem;
    top: 50%;
    transform: translateY(-50%);
    width: 2rem;
  }
  &.dropdown-plus-minus,
  &.dropdown-chevrons {
    display: block;
  }
  &.dropdown-chevrons {
    margin-left: 0.5rem;
  }
`;

export const StyledChevrons = styled.div`
  color: ${theme.colors.gray600};
  &.dropdown-chevrons {
    .up {
      display: none;
    }
    .down {
      display: block;
    }
    &.active {
      .up {
        color: ${theme.colors.blue};
        display: block;
      }
      .down {
        display: none;
      }
    }
  }
  &.dropdown-no-chevrons {
    display: none;
  }
`;
