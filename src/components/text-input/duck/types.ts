import React from "react";
import * as CH from "@chakra-ui/react";

export interface TextInputProps
  extends React.PropsWithChildren,
    Omit<CH.InputProps, "name"> {
  label?: string;
  name: string;
  helperText?: string;
}
