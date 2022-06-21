import { keyframes } from "styled-components";

export const showCard = () => keyframes`
  0% {
    background-color: transparent;
  }
  100% {
    background-color: white;
  }
`;

export const hideCard = () => keyframes`
  0% {
    background-color: white;
  }
  100% {
    background-color: transparent;
  }
`;
