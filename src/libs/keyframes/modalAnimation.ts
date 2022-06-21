import { keyframes } from "styled-components";

export const modalScaleDown = () => keyframes`
  0% {
    opacity: 1;
    z-index: 50;
    transform: scale(1);
  }
  99% {
    opacity: 0;
    z-index: 50;
    transform: scale(0);
  }
  100% {
    z-index: -50;
  } 
`;

export const modalScaleUp = () => keyframes`
  0% {
    opacity: 0;
    z-index: 50;
    transform: scale(0);
  }
  100% {
    opacity: 1;
    z-index: 50;
    transform: scale(1);
  }
  
`;
