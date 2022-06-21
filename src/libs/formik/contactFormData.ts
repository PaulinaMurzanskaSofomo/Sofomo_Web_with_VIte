import * as Yup from "yup";

export const formInitialValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};
export const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  message: Yup.string().required("Required"),
  subject: Yup.string().required("Required"),
});
