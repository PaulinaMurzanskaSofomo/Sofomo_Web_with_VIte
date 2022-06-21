import styled from "styled-components";
import { device } from "../../../utils";
import { infiniteLoop } from "../../../keyframes";
import { StyledResponsiveContainer } from "../../atoms";

export const StyledGrid = styled(StyledResponsiveContainer)`
  width: 100%;
  display: grid;
  &.grid-4-items {
    margin-left: -1rem;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 3rem;
    @media ${device.tablet} {
      grid-template-columns: repeat(4, 1fr);
    }
  }
  &.grid-5-items {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 3rem;
    @media ${device.tablet} {
      grid-template-columns: repeat(5, 1fr);
    }
    .grid-item {
      &:nth-child(5) {
        display: none;
        @media ${device.tablet} {
          display: block;
        }
      }
    }
    &.loop {
      .grid-item {
        &:nth-child(6),
        &:nth-child(7),
        &:nth-child(8),
        &:nth-child(9),
        &:nth-child(10) {
          display: none;
        }
      }
      @media ${device.tablet} {
        grid-template-columns: repeat(10, 1fr);
        width: calc(16rem * 10);
        animation: ${infiniteLoop} 20s linear infinite;
        grid-gap: 0;
        .grid-item {
          &:nth-child(6),
          &:nth-child(7),
          &:nth-child(8),
          &:nth-child(9),
          &:nth-child(10) {
            display: block;
          }
          width: 16rem;
          margin: 0;
          div {
            margin: 0;
          }
        }
      }
    }
  }
  &.grid-6-items {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 3rem;
    .grid-item {
      height: 100%;
    }
    @media ${device.tablet} {
      grid-template-columns: repeat(3, 1fr);
    }
    @media ${device.laptop} {
      grid-template-columns: repeat(6, 1fr);
      grid-column-gap: 0;
    }
  }
`;
