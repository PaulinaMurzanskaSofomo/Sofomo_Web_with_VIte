import React, { FC } from "react";
import { StyledError, StyledInput } from "./StyledInput";
import { Field, FieldAttributes, useField } from "formik";

export const Input: FC<FieldAttributes<{}>> = ({ as, placeholder, type, ...props }) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : "";
  return (
    <StyledInput className={errorText ? "error" : ""}>
      {errorText === "Invalid email" && <StyledError>{errorText}</StyledError>}
      <Field as={as} type={type} placeholder={placeholder} {...field} />
    </StyledInput>
  );
};
