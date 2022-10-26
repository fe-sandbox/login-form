import React from "react";
import * as CH from "@chakra-ui/react";
import { AnyObjectSchema } from "yup";

export interface FormProps extends React.PropsWithChildren, CH.BoxProps {
  onSubmit: (data: any) => void;
  defaultValues?: any;
  schema: AnyObjectSchema;
}
