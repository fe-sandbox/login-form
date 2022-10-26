import React from "react";
import * as CH from "@chakra-ui/react";
import * as C from "components";
import * as LD from "./duck";
import { useController, useFormContext } from "react-hook-form";

const TextInput: React.FC<LD.textInputTypes.TextInputProps> = ({
  label,
  name,
  helperText,
  ...rest
}) => {
  const { control } = useFormContext();

  const {
    field: { onChange, onBlur, value },
    fieldState: { error },
  } = useController({ control, name, defaultValue: "" });

  return (
    <C.InputLayout
      label={label}
      errorMessage={error?.message}
      helperText={helperText}
    >
      <CH.Input onChange={onChange} onBlur={onBlur} value={value} {...rest} />
    </C.InputLayout>
  );
};

export default TextInput;
