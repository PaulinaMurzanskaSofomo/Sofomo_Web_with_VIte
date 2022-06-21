import React, { FC } from "react";
import { Form, Formik } from "formik";
import { StyledContactForm } from "./StyledContactFormik";
import { Input, Button } from "../../components/atoms";
import { formInitialValues, validationSchema } from "../../libs/formik";
import { useContactFormContext } from "../../context/ContactFormContext";

interface Props {
  outsource?: boolean;
}
type Values = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export const ContactFormik: FC<Props> = ({ outsource }) => {
  const { setFormSubmitted } = useContactFormContext();

  const handleSubmit = (values: Values, resetForm: VoidFunction) => {
    setTimeout(() => {
      setFormSubmitted(true);
      resetForm();
      console.log("DATA:", values);
    }, 500);
  };

  return (
    <StyledContactForm>
      <Formik
        validateOnChange={true}
        initialValues={formInitialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          handleSubmit(values, resetForm);
        }}
      >
        {({}) => (
          <Form>
            <Input type="text" name="name" placeholder="First name" />
            <Input type="email" name="email" placeholder="Email" />
            <Input type="text" name="subject" placeholder="Subject" />
            <Input
              as="textarea"
              name="message"
              placeholder="Tell us about your outsource developer needs"
            />
            <Button
              variant={`secondary ${outsource ? "outsource-form" : "contact-form"}`}
              type="submit"
              label={outsource ? "Contact us Today!" : "Submit"}
            />
          </Form>
        )}
      </Formik>
    </StyledContactForm>
  );
};
