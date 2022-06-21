import React, { FC } from "react";
import { DocketVariantTypes } from "../../../types/docketTypes";
import { StyledDocket } from "./StyledDocket";

export interface Props {
  label?: string;
  padding?: string;
  variant?: DocketVariantTypes;
}
export const Docket: FC<Props> = ({ label, variant }) => {
  return <StyledDocket className={variant}>{label}</StyledDocket>;
};
