import React, { FC, ReactNode } from "react";
import { Icon } from "../../atoms";
import { StyledSocials } from "./StyledSocials";

export interface Props {
  className?: string;
  fontSize?: string;
  iconWidth?: string;
  socialsList: {
    icon: string | ReactNode;
    variant?: string;
    path?: string;
  }[];
}

export const Socials: FC<Props> = ({ className, fontSize, socialsList, iconWidth }) => {
  return (
    <StyledSocials className={className}>
      {socialsList.map((item) => (
        <Icon
          key={item.path}
          fontSize={fontSize}
          path={item.path}
          variant={item.variant}
          width={iconWidth}
        >
          {item.icon}
        </Icon>
      ))}
    </StyledSocials>
  );
};
