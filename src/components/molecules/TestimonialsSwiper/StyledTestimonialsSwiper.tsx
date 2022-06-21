import styled from "styled-components";
import { theme } from "../../../themes/MainTheme";
import { device } from "../../../utils";
import { StyledResponsiveContainer } from "../../atoms";

export const StyledTestimonialsSwiper = styled(StyledResponsiveContainer)`
  margin: 0 auto;
  text-align: center;
  position: relative;
  margin: 0 auto;
  width: 100vw;
  padding: 8rem 1.5rem;
  .swiper-pagination-bullet {
    background-color: ${theme.colors.gray400};
    margin-right: 1.5rem !important;
  }
  .swiper-pagination-bullet-active {
    background-color: ${theme.colors.blue};
  }
  .my-swiper-slide {
    @media ${device.tablet} {
      padding: 0 8rem;
    }
    @media ${device.laptop} {
      padding: 0 8rem;
    }
  }
  @media ${device.tablet} {
    padding: 16rem 0 14rem;
  }
  @media ${device.laptop} {
    padding: 22rem 3rem 16rem;
  }
`;

export const StyledTextWrapper = styled.div`
  margin: 1rem 0 5rem;
`;

export const StyledNavIndicators = styled.div`
  position: absolute;
  top: 25%;
  transform: translateY(-50%);
  z-index: 3;
  display: none;
  width: 5.4rem;
  height: 5.4rem;
  &.swiper-nav-prev {
    left: 0;
  }
  &.swiper-nav-next {
    right: 0;
  }
  @media ${device.tablet} {
    display: block;
  }
`;
