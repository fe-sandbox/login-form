import * as yup from "yup";

export const SCHEMA = yup.object().shape({
  email: yup.string().required("Field is required").email("Invalid email"),
  password: yup
    .string()
    .required("Field is required")
    .matches(
      /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
      "Password should contain at least 8 characters, 1 number, 1 upper and 1 lowercase"
    ),
});
