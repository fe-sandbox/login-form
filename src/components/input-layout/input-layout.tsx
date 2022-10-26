import React from "react";
import * as CH from "@chakra-ui/react";
import * as LD from "./duck";

const InputLayout: React.FC<LD.inputLayoutTypes.InputLayoutProps> = ({
  children,
  label,
  errorMessage,
  helperText,
}) => {
  return (
    <CH.FormControl isInvalid={!!errorMessage}>
      {label && <CH.FormLabel>{label}</CH.FormLabel>}
      {children}
      {errorMessage && (
        <CH.FormErrorMessage>{errorMessage}</CH.FormErrorMessage>
      )}
      {helperText && <CH.FormHelperText>{helperText}</CH.FormHelperText>}
    </CH.FormControl>
  );
};

export default InputLayout;
