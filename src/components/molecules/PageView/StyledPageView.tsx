import styled, { css } from "styled-components";
import { device } from "../../../utils";
import { StyledResponsiveContainer } from "../../atoms";
import { pageViewVariants } from "./pageViewVariants";

interface Props {
  name: string;
  flexDirection?: string;
}

export const StyledPageView = styled(StyledResponsiveContainer)<Props>(
  ({ name, flexDirection }) => {
    const { paddingTop, paddingBottom, tablet, laptop } = pageViewVariants[name];
    return [
      css`
        margin: 0 auto;
        display: flex;
        align-items: flex-start;
        position: relative;
        flex-direction: ${flexDirection};
        padding: 0 1.5rem;
        padding-top: ${paddingTop};
        padding-bottom: ${paddingBottom};
        @media ${device.tablet} {
          padding: 0 3rem;
          padding-top: ${tablet.paddingTop};
          padding-bottom: ${tablet.paddingBottom};
        }
        @media ${device.laptop} {
          padding-top: ${laptop.paddingTop};
          padding-bottom: ${laptop.paddingBottom};
        }
        ${name === "withArrow" &&
        css`
          position: relative;
        `}
        ${name === "skillset" &&
        css`
          button {
            display: none;
            @media${device.laptop} {
              display: block;
            }
          }
        `}
      `,
    ];
  }
);

export const StyledContent = styled.div<Props>(({ name }) => {
  const { contentMargin, contentWidth, textAlign, tablet, laptop } = pageViewVariants[name];
  return [
    css`
      width: ${contentWidth};
      text-align: ${textAlign};
      margin: ${contentMargin};
      @media ${device.tablet} {
        width: ${tablet.contentWidth};
        text-align: ${tablet.textAlign};
        margin: ${tablet.contentMargin};
        height: ${tablet.height};
      }
      @media ${device.laptop} {
        width: ${laptop.contentWidth};
        text-align: ${laptop.textAlign};
        margin: ${laptop.contentMargin};
        height: ${laptop.height};
      }
    `,
  ];
});

export const StyledViewImage = styled.div<Props>`
  width: 100%;
  overflow: hidden;
  &.intro {
    margin-top: 6.6rem;
    margin: 6.6rem auto 0;
    max-width: 50rem;
    img {
      height: auto;
    }
  }
  &.primary {
    transform: scale(1.1);
    margin-top: 3.5rem;
    margin-bottom: 4rem;
  }
  &.tertiary {
    max-width: 47.5rem;
    margin: 0;
  }
  &.quaternary {
    width: 100%;
    display: flex;
  }
  @media ${device.tablet} {
    &.home,
    &.primary {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 60%;
      height: auto;
      width: calc(60% + ((100vw - 768px) / 2));
    }
    &.intro {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: calc(60% + ((100vw - 768px) / 2));
      margin-top: 0;
      padding-top: 13rem;
      left: 55%;
      height: 100%;
    }
    &.primary {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 60%;
      height: 100%;
      padding: 16rem 0;
      width: auto;
    }
    &.secondary {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 60%;
      height: 100%;
      padding: 16rem 0;
      display: flex;
      align-items: center;
      width: calc(40% + ((100vw - 768px) / 2));
      img {
        height: auto;
      }
    }
    &.tertiary {
      display: none;
    }
    &.quaternary {
      flex-direction: column;
      width: 38.3rem;
    }
  }
  @media ${device.laptop} {
    &.intro,
    &.home {
      left: calc(60% - 10rem);
      width: calc(60% + ((100vw - 1094px) / 2));
      padding-top: 0;
      max-width: 72.4rem;
    }
    &.intro {
      height: 100%;
    }
    &.home {
      height: auto;
    }
    &.primary {
      padding: 16rem 0 22rem;
    }
    &.secondary {
      width: calc(40% + ((100vw - 1094px) / 2));
      align-items: flex-start;
      padding: 16rem 0 22rem;
      img {
        width: auto;
        height: 100%;
      }
    }
    &.tertiary {
      display: block;
      left: 42rem;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      height: auto;
      width: calc(60% + ((100vw - 768px) / 2));
    }
    &.skillset {
      position: absolute;
      top: calc(50% - 3rem);
      transform: translateY(-50%);
      left: 53%;
      width: 47%;
      img {
        height: auto;
      }
    }
    &.quaternary {
      width: 60rem;
    }
  }
`;
