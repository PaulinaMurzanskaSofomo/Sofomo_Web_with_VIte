import styled from "styled-components";
import { StyledResponsiveContainer } from "../../../components/atoms";
import { hideCard, showCard, showForm } from "../../../keyframes";
import { theme } from "../../../themes/MainTheme";
import { device } from "../../../utils";

export const StyledOutsourcePageDisplay = styled.div`
  min-width: 37.5rem;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
`;

export const WrapperStickyRelative = styled.div`
  position: relative;
`;

export const StyledStickyContainer = styled(StyledResponsiveContainer)`
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 35;
  padding-bottom: 20rem;
  display: none;
  border: 2px solid red;
  @media ${device.tablet} {
    display: block;
    width: max-content;
    left: calc(((100vw - 768px) / 2) + 42rem);
  }
  @media ${device.laptop} {
    width: max-content;
    left: calc(((100vw - 1094px) / 2) + 65rem);
  }
`;

export const StyledStickyForm = styled.div`
  display: none;
  background-color: ${theme.colors.white};
  border-radius: 5px;
  padding: 0.5rem;
  position: relative;
  box-shadow: 0px 18px 40px -15px rgba(50, 49, 94, 0.2);
  @media ${device.tablet} {
    width: 35rem;
  }
  @media ${device.laptop} {
    width: 43rem;
  }
  &.show-modal {
    display: block;
    z-index: 12;
    position: sticky;
    top: 15rem;
    right: 0;
    opacity: 1;
    height: max-content;
    animation: ${showForm} 0.5s linear forwards;
    overflow: hidden;
  }
`;

export const StyledArrow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
  &.arrow-rotating {
    width: max-content;
    margin: 1.5rem auto 0;
    @media ${device.tablet} {
      position: absolute;
      top: 40rem;
      left: 14rem;
      transform: rotate(-90deg);
    }
    @media ${device.laptop} {
      top: 44rem;
      left: 47rem;
      transform: rotate(-90deg);
    }
  }
`;

export const StyledGridWrapper = styled(StyledResponsiveContainer)`
  display: none;
  height: 5.9rem;
  padding: 0 3rem;
  @media ${device.tablet} {
    display: block;
  }
  @media ${device.laptop} {
    display: flex;
    align-items: center;
  }
`;

export const StyledLoopWrapper = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  @media ${device.tablet} {
    &::after,
    &:before {
      background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
      content: "";
      height: 100%;
      position: absolute;
      width: 25%;
      z-index: 2;
    }
    &:before {
      left: 0;
      top: 0;
    }
    &::after {
      right: 0;
      top: 0;
      background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%);
    }
  }
  @media ${device.laptop} {
    width: 90%;
  }
`;

export const StyledListWrapper = styled(StyledResponsiveContainer)`
  margin: 5.5rem auto 0;
  min-width: 37.5rem;
  width: 100%;
  display: grid;
  grid-row-gap: 3.5rem;
  grid-template-areas:
    "a b"
    "a b"
    "a d"
    "a e"
    "c e"
    "c f"
    "c f";
  .grid-area {
    &:first-child {
      grid-area: a;
    }
    &:nth-child(2) {
      grid-area: b;
    }
    &:nth-child(3) {
      grid-area: c;
    }
    &:nth-child(4) {
      grid-area: d;
    }
    &:nth-child(5) {
      grid-area: e;
    }
    &:nth-child(6) {
      grid-area: f;
    }
  }
`;

export const StyledButtonWrapper = styled.div`
  width: 100%;
  height: 8.6rem;
  padding: 1.5rem;
  background-color: ${theme.colors.white};
  position: fixed;
  bottom: 0;
  z-index: 3;
  @media ${device.tablet} {
    display: none;
  }
`;

export const StyledCardWhite = styled.div`
  padding: 0 1.5rem;
  height: 15rem;
  &:after {
    content: "";
    background-color: transparent;
    animation: ${hideCard} 0.2s linear backwards;
  }
  @media ${device.tablet} {
    background-color: transparent;
    animation: ${hideCard} 0.2s linear backwards;
    margin-bottom: 3rem;
    &.animate-card {
      border-radius: 5px;
      position: relative;
      animation: ${showCard} 0.3s linear 0.2s forwards;
      &:after {
        content: "";
        height: 100%;
        width: 3px;
        animation: ${showCard} 0.3s linear 0.2s forwards;
        position: absolute;
        top: 0;
        left: -7px;
      }
    }
  }
`;

export const StyledAvatar = styled.img`
  margin: 3.5rem 0 0 0;
  object-position: left;
  width: 100%;
  height: 100%;
  object-fit: contain;
  @media ${device.tablet} {
    height: 7.6rem;
  }
`;
