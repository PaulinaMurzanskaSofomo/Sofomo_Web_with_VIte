import styled from "styled-components";
import { device } from "../../../utils";
import { Image } from "../../atoms";

export const StyledImagesSwiper = styled.div`
  display: flex;
  justify-content: center;
  min-width: 34.5rem;
  height: 48.4rem;
  position: relative;
  .images-swiper {
    max-width: 1200px;
  }
  .swiper-slide {
    display: flex;
    align-items: flex-end;
  }
`;

export const StyledOverlay = styled.div`
  width: calc((100vw - 500px) / 2);
  height: 100%;
  background: rgb(255, 255, 255);
  position: absolute;
  z-index: 2;
  top: 0;
  display: none;
  &.overlay-right {
    right: 0;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%);
    @media ${device.tablet} {
      &.active {
        display: block;
        @media (min-width: 1200px) {
          display: none;
        }
      }
    }
  }
  &.overlay-left {
    left: 0;
    background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
    @media ${device.tablet} {
      &.active {
        display: block;
        @media (min-width: 1200px) {
          display: none;
        }
      }
    }
  }
`;

export const StyledImagesWrapper = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
`;

export const SwiperImage = styled(Image)`
  object-fit: cover;
  object-position: left;
  margin-bottom: 2rem;
`;

export const StyledIndicators = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 20;
  &.swiper-prev {
    left: 0;
    @media ${device.tablet} {
      left: calc(50% - 354px);
    }
    @media ${device.laptop} {
      left: calc(50% - 517px);
    }
    @media (min-width: 1200px) {
      opacity: 0;
    }
    &.swiper-button-disabled {
      opacity: 0;
    }
  }
  &.swiper-next {
    right: 0;
    @media ${device.tablet} {
      right: calc(50% - 354px);
    }
    @media ${device.laptop} {
      right: calc(50% - 517px);
    }
    @media (min-width: 1200px) {
      opacity: 0;
    }
    &.swiper-button-disabled {
      opacity: 0;
    }
  }
`;
