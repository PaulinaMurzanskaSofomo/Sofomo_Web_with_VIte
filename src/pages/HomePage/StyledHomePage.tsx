import styled from "styled-components";
import { device } from "../../utils";

export const StyledHomePage = styled.div`
  min-width: 37.5rem;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
`;

export const StyledClockImage = styled.div`
  width: 3rem;
  height: 3rem;
  margin: 0 auto 1.5rem;
  @media ${device.tablet} {
    width: 3.5rem;
    height: 3.5rem;
    margin: 0 auto 2rem;
  }
  @media ${device.laptop} {
    margin: 0 0 3rem 0;
    height: max(3.5rem);
  }
`;

export const StyledParagraphWrapper = styled.div`
  margin: 1.5rem 0 3rem 0;
`;
