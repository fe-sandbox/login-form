import * as yup from "yup";

export const SCHEMA = yup.object().shape({
  email: yup.string().required("Field is required").email("Invalid email"),
});
