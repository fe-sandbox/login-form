import * as yup from "yup";

export const SCHEMA = yup.object().shape({
  email: yup.string().required("Field is required").email("Invalid email"),
  password: yup
    .string()
    .required("Field is required")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
      "Password should contain at least 8 characters, 1 number, 1 upper and 1 lowercase"
    ),
});

export const RESET_SCHEMA = yup.object().shape({
  email: yup.string().required("Field is required").email("Invalid email"),
});

export const FORM_STYLES = {
  maxWidth: "md",
  width: "100%",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "gray.200",
  borderRadius: "md",
  boxShadow: "md",
  p: 8,
};
