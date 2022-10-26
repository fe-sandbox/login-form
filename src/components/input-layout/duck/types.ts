import React from "react";
import * as CH from "@chakra-ui/react";

export interface InputLayoutProps
  extends React.PropsWithChildren,
    CH.FormControlProps {
  label?: string;
  errorMessage?: string;
  helperText?: string;
}
