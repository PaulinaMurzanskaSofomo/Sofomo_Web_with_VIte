import styled from "styled-components";
import { device } from "../../../utils";

interface Props {
  quotationMarkColor?: string;
  quotationMarkSize?: string;
  quotationMarginBottom?: string;
  margin?: string;
}

export const StyledTitle = styled.div<Props>`
  margin: ${({ margin }) => margin};
`;

export const StyledQuotation = styled.div<Props>`
  margin-bottom: ${({ quotationMarginBottom }) => quotationMarginBottom};
  text-align: left;
  .quotation-mark {
    width: ${({ quotationMarkSize }) => quotationMarkSize};
    rect {
      fill: ${({ quotationMarkColor }) => quotationMarkColor};
    }
  }
  @media ${device.laptop} {
    margin-bottom: 3rem;
  }
`;

export const StyledUppercaseTitle = styled.div`
  margin-bottom: 1.5rem;
`;
