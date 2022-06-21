import styled from "styled-components";
import { theme } from "../../../themes/MainTheme";
import { device } from "../../../utils/devices/devices";

interface IStyledButton {
  margin?: string;
  width?: string;
}

export const StyledButton = styled.button<IStyledButton>`
  margin: ${({ margin }) => margin};
  background-color: ${theme.colors.blue};
  width: ${({ width }) => width};
  color: ${theme.colors.white};
  letter-spacing: 0.4px;
  border-radius: 2px;
  font-size: 1.7rem;
  height: 5rem;
  text-align: center;
  border: none;
  outline: none;
  text-transform: capitalize;
  cursor: pointer;
  &.secondary {
    font-size: 1.8rem;
    line-height: 2.6rem;
    height: 5.2rem;
    width: 100%;
    background-color: ${theme.colors.actionPrimaryGreen};
    &.contact-form {
      font-size: 1.6rem;
      font-weight: 500;
    }
    @media ${device.tablet} {
      font-size: 1.5rem;
      line-break: 2.2rem;
      height: 4.6rem;
      &.contact-form {
        width: 12rem;
        margin: 1rem 0 0 0;
      }
      &.outsource-form {
        width: 100%;
        margin: 0 auto;
      }
    }
    @media ${device.laptop} {
      height: 3.6rem;
      width: 10.5rem;
      margin: 0 0 0 3.4rem;
    }
    &:hover {
      filter: brightness(1.04);
    }
  }
  &.tertiary {
    font-weight: 500;
    color: ${theme.colors.blue};
    background-color: ${theme.colors.white};
  }
  a {
    color: inherit;
  }
`;
