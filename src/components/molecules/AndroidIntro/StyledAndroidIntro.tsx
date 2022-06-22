import styled from "styled-components";
import { StyledResponsiveContainer } from "../../../components/atoms";
import { device } from "../../../utils";

export const StyledAndroidIntro = styled(StyledResponsiveContainer)`
  margin-top: 11rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  @media ${device.tablet} {
    padding: 3rem 0 22rem;
    flex-direction: row-reverse;
  }
`;

export const StyledImageBlock = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  @media ${device.tablet} {
    position: relative;
    width: 50%;
    padding-bottom: 3rem;
    margin-bottom: 0;
  }
`;

export const StyledIntroAndCardsWrapper = styled.div`
  width: 100%;
  @media ${device.tablet} {
    width: 50%;
  }
`;

export const StyledCardsWrapper = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  padding-top: 6rem;
  @media ${device.tablet} {
    padding-top: 22rem;
  }
`;

export const StyledIntroWrapper = styled.div`
  width: 100%;
`;

export const StickyElement = styled.div`
  width: 100%;
  @media ${device.tablet} {
    position: sticky;
    top: 14rem;
    width: calc(60% + ((100vw - 768px) / 2));
  }
`;
