import styled, { css } from "styled-components";
import { ElementType } from "react";
import { device } from "../../../utils/devices/devices";
import { variant } from "./typographyVariants";

export interface StyledProps {
  as?: ElementType;
  color?: string;
  width?: string;
  highlightColor?: string;
  name: string;
  fontWeight?: string;
  textTransform?: string;
}

export const StyledTypography = styled.p<StyledProps>(
  ({ name, color, fontWeight, highlightColor, width, textTransform }) => {
    const { size, lineHeight, spacing, tablet, laptop } = variant[name];
    return [
      css`
        text-transform: ${textTransform};
        color: ${color};
        font-weight: ${fontWeight};
        font-size: ${size};
        line-height: ${lineHeight};
        letter-spacing: ${spacing};
        width: ${width};
        ${tablet &&
        css`
          @media ${device.tablet} {
            font-size: ${tablet.size};
            line-height: ${tablet.lineHeight};
            letter-spacing: ${tablet.spacing};
          }
        `}
        ${laptop &&
        css`
          @media ${device.laptop} {
            font-size: ${laptop.size};
            line-height: ${laptop.lineHeight};
            letter-spacing: ${laptop.spacing};
          }
        `} 
        ${highlightColor &&
        css`
          span {
            &.highlighted {
              position: relative;
              z-index: 2;
              display: inline-flex;
              &:last-child {
                &:after {
                  margin-right: 5px;
                }
              }
              &:after {
                content: "";
                background-color: ${highlightColor};
                top: calc((${lineHeight} - ${size}) * 0.5);
                left: 0;
                right: 0;
                height: calc(${size} * 0.93);
                z-index: -1;
                position: absolute;
                display: block;
                @media (min-width: 768px) {
                  height: calc(${tablet.size} * 0.93);
                  top: calc((${tablet.lineHeight} - ${tablet.size}) * 0.5);
                }
                @media (min-width: 1094px) {
                  height: calc(${laptop.size} * 0.93);
                  top: calc((${laptop.lineHeight} - ${laptop.size}) * 0.5);
                }
              }
            }
          }
        `}
      `,
    ];
  }
);
