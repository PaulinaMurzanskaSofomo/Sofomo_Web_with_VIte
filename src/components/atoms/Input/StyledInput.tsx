import styled from "styled-components";
import { theme } from "../../../themes/MainTheme";
import { device } from "../../../utils";

export const StyledInput = styled.div`
  input,
  textarea {
    font-size: 1.4rem;
    line-height: 2.4rem;
    width: 100%;
    color: ${theme.colors.gray500};
    padding: 1.3rem 1.5rem;
    border: none;
    outline: none;
    border-radius: 2px;
    margin-bottom: 1.5rem;
    background-color: ${theme.colors.input};
    @media ${device.tablet} {
      font-size: 1.8rem;
      line-height: 2.4rem;
      padding: 1.6rem 1.5rem;
      margin-bottom: 2rem;
    }
    &::placeholder {
      color: ${theme.colors.gray500};
      opacity: 0.5;
    }
  }
  textarea {
    resize: none;
    height: 11.6rem;
    font-family: "Neurial Grotesk", sans-serif;
    &::placeholder {
      font-family: "Neurial Grotesk", sans-serif;
    }
    @media ${device.tablet} {
      height: 15rem;
    }
    @media ${device.laptop} {
      height: 17rem;
    }
  }
  &.error {
    input,
    textarea {
      &::placeholder {
        color: #d0011b;
      }
      border: 1px solid #8b0000;
    }
  }
`;
export const StyledError = styled.small`
  color: red;
`;
