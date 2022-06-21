import styled from "styled-components";
import { modalScaleDown, modalScaleUp } from "../../../keyframes";
import { theme } from "../../../themes/MainTheme";
import { device } from "../../../utils";

export const WrapperOuter = styled.div`
  min-width: 37.5rem;
  width: 100vw;
  height: 100%;
  z-index: -50;
  top: 0;
  opacity: 0;
  position: fixed;
  &.outsource {
    width: 100%;
    height: max-content;
    opacity: 1;
    position: relative;
  }
  &.modal-active {
    animation: ${modalScaleUp} 0.4s forwards;
  }
  &.modal-disabled {
    animation: ${modalScaleDown} 0.6s forwards;
  }
`;

export const WrapperInner = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  @media ${device.tablet} {
    overflow-y: hidden;
  }
`;

export const StyledContactModal = styled.div`
  position: relative;
  background-color: ${theme.colors.white};
  width: 100%;
  height: 100%;
  @media ${device.laptop} {
    display: flex;
    flex-direction: row-reverse;
  }
`;

export const StyledCloseButton = styled.div`
  width: 4.8rem;
  height: 4.8rem;
  border: 1px solid ${theme.colors.shadow};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  position: absolute;
  top: 2rem;
  right: 1.2rem;
  &.outsource {
    display: none;
    &.submitted {
      display: flex;
      top: 1rem;
      right: 4rem;
      @media ${device.laptop} {
        right: 1rem;
      }
    }
  }
  @media ${device.tablet} {
    width: 6rem;
    height: 6rem;
    right: 3rem;
  }
`;

export const StyledModalBody = styled.div`
  width: 100%;
  height: auto;
  border-radius: 5px;
  padding: 9rem 1.5rem 5rem;
  background-color: ${theme.colors.white};
  &.outsource {
    padding: 3.5rem 1.5rem 6rem;
    width: 35rem;
    @media ${device.laptop} {
      width: 43rem;
    }
  }
  &.submitted {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  @media ${device.tablet} {
    padding: 13rem 8.4rem;
  }
  @media ${device.laptop} {
    padding: 12.3rem 17rem;
    width: 100%;
  }
`;

export const StyledModalTitle = styled.div`
  margin: 0 0 1rem 0;
`;

export const StyledSubtitle = styled.div`
  margin-top: 1rem;
  @media ${device.tablet} {
    margin-top: 2rem;
  }
`;

export const StyledBlueSection = styled.div`
  width: 100%;
  padding: 2.5rem 3rem 3rem;
  background-color: ${theme.colors.blue};
  display: flex;
  flex-direction: column;
  justify-content: center;
  &.hide {
    display: none;
  }
  @media ${device.tablet} {
    padding: 6rem;
  }
  @media ${device.laptop} {
    padding: 29.9rem 7.5rem 33.9rem 5.5rem;
    width: 50rem;
  }
`;

export const StyledTitleWrapper = styled.div`
  margin: -1rem 0 1.5rem;
`;

export const StyledQuoteWrapper = styled.div`
  width: 1.6rem;
  height: 1.6rem;
  margin-bottom: 0.5rem;
  @media ${device.tablet} {
    width: 2rem;
    height: 2rem;
    margin-bottom: 1.5rem;
  }
  @media ${device.laptop} {
    width: 3rem;
    height: 3rem;
  }
`;
