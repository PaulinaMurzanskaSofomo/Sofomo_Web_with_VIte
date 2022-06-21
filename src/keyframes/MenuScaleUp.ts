import { keyframes } from "styled-components";

export const menuScaleUp = () => keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100%{
    transform: scale(1.4);
    opacity:0;
  }
 

`;
