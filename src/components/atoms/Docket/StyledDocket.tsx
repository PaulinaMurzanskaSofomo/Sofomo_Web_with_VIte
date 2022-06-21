import styled from "styled-components";
import { theme } from "../../../themes/MainTheme";
import { device } from "../../../utils";

export const StyledDocket = styled.div`
  width: 13rem;
  font-size: 1.2rem;
  letter-spacing: 0.3px;
  padding: 0.3rem;
  margin: 0 0 0 1rem;
  text-align: center;
  border-radius: 1.3rem;
  line-height: 2rem;
  font-weight: 700;
  color: ${theme.colors.purpleLight};
  background-color: ${theme.colors.lightPurpleTransparent};
  &.wider {
    width: 20rem;
    margin: 1.5rem 0;
    padding: 0.7rem;
    @media ${device.tablet} {
      margin: 2.5rem 0;
    }
  }
`;
