import { keyframes } from "styled-components";

export const infiniteLoop = () => keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-16rem * 5));
  }
`;
