import { keyframes } from "styled-components";
import { theme } from "../themes/MainTheme";

export const menuLineFadeIn = () => keyframes`
  0% {
    box-shadow: 0 0 0 0 ${theme.colors.shadow};
  }
  100% {
    box-shadow: 0 1px 0 0 ${theme.colors.shadow};
  }
`;

export const menuLineFadeOut = () => keyframes`
  0% {
    box-shadow: 0 1px 0 0 ${theme.colors.shadow};
  }
  50% {
    box-shadow: 0 0.5px 0 0 ${theme.colors.shadow};
  }
  100% {
    box-shadow: 0 0 0 0 ${theme.colors.shadow};
  }
`;
