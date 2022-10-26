import React from "react";
import * as CH from "@chakra-ui/react";
import * as C from "components";
import * as LD from "./duck";
import { FORM_STYLES } from "../../duck/constants";

const ResetForm: React.FC<{ setResetOff: () => void }> = ({ setResetOff }) => {
  return (
    <C.Form
      {...FORM_STYLES}
      onSubmit={(data) => {
        console.log("reset", data);
        setResetOff();
      }}
      schema={LD.resetFormConstants.SCHEMA}
    >
      <CH.VStack spacing={4}>
        <C.TextInput
          label="Email"
          name="email"
          helperText="You will get message on your email with following instructions"
        />

        <CH.VStack spacing={1}>
          <C.Form.Controls submitButtonText="Reset" />
          <CH.Link
            as="span"
            fontSize={14}
            color="blue.600"
            onClick={setResetOff}
          >
            Go back
          </CH.Link>
        </CH.VStack>
      </CH.VStack>
    </C.Form>
  );
};

export default ResetForm;
