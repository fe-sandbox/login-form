import React from "react";
import * as CH from "@chakra-ui/react";

const FormControls: React.FC<CH.StackProps & { submitButtonText?: string }> = ({
  submitButtonText = "Submit",
  ...rest
}) => {
  return (
    <CH.HStack {...rest}>
      <CH.Button type="submit" colorScheme="blue">
        {submitButtonText}
      </CH.Button>
    </CH.HStack>
  );
};

export default FormControls;
