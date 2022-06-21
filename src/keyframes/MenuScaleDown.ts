import { keyframes } from "styled-components";

export const menuScaleDown = () => keyframes`
  0% {
    transform: scale(1.4);
    opacity: 0;

  }
  100%{
    transform: scale(1);
    opacity:1;
  }

`;
