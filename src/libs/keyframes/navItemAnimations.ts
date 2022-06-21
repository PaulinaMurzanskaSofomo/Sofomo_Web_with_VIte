import { keyframes } from "styled-components";

export const navItemSlideUp = () => keyframes`
  0% {
      height: max-content;
      transform: translateY(0);
      opacity: 1;
    }
    25% {
      transform: translateY(-25px);
      opacity: 0.5;
    }
    50% {
      transform: translateY(-50px);
      opacity: 0.75;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 0;
      transform: translateY(-150%);
    }
`;

export const navItemSlideDown = () => keyframes`
    0% {
      transform: translateY(-50px);
      opacity: 0;
    }

    100% {
      height: max-content;
      transform: translateY(0);
      opacity: 1;
    }
`;

export const navItemFadeIn = () => keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
