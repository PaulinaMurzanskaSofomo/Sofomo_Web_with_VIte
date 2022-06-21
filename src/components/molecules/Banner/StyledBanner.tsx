import styled from "styled-components";
import { device } from "../../../utils";
import { StyledResponsiveContainer } from "../../atoms";

export const StyledBanner = styled.div`
  position: relative;
  &.outsource {
    @media ${device.tablet} {
      h3 {
        width: 50%;
      }
    }
  }
`;

export const StyledSection = styled(StyledResponsiveContainer)`
  display: grid;
  grid-column-gap: 3rem;
  grid-row-gap: 3.5rem;
  width: 100%;
  height: auto;
  grid-template-areas:
    "c a a a"
    "b b b b";

  .grid-area {
    &:first-child {
      grid-area: a;
      @media ${device.tablet} {
        padding-left: 0.5rem;
      }
    }
    &:nth-child(2) {
      grid-area: b;
      overflow: hidden;
    }
    &:nth-child(3) {
      grid-area: c;
      @media ${device.tablet} {
        h3 {
          margin-bottom: 0.5rem;
        }
      }
    }
  }
  &.image-inner {
    padding: 4rem 1.5rem 4rem 3rem;
    @media ${device.tablet} {
      padding: 4rem 1.1rem 4rem 0;
    }
    @media ${device.laptop} {
      grid-row-gap: 4rem;
      padding: 5rem 3rem 6rem;
    }
  }
  &.image-outer {
    padding: 6rem 1.5rem 6.5rem;
    grid-row-gap: 5rem;
    grid-template-areas:
      "a a a a"
      "b b b b";
    @media ${device.tablet} {
      padding: 7.5rem 3rem;
    }
    @media ${device.laptop} {
      grid-row-gap: 4rem;
      padding: 7.5rem 3rem 8.5rem;
    }
  }

  @media ${device.tablet} {
    padding: 4rem 1.1rem 4rem 0;
    grid-template-areas:
      "c a a a a "
      "c b b b b ";
  }
  @media ${device.laptop} {
    padding: 6rem 3rem;
  }
`;
export const StyledBannerImage = styled.div`
  &.outer {
    width: 23rem;
    height: 23rem;
    position: absolute;
    top: -14.5rem;
    left: -5.5rem;
    z-index: 10;
    img {
      transform: scale(1.1);
    }
    @media ${device.tablet} {
      width: 441px;
      height: 406;
      left: -17rem;
    }
  }
  &.inner {
    width: 8.5rem;
    height: 100%;
    @media ${device.tablet} {
      width: 14.8rem;
    }
    @media ${device.laptop} {
      width: 19.2rem;
    }
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const StyledChildren = styled.div`
  width: 100%;
`;
