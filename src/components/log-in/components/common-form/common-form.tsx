import React from "react";
import * as CH from "@chakra-ui/react";
import * as C from "components";
import * as LD from "./duck";
import { FORM_STYLES } from "../../duck/constants";

const CommonForm: React.FC<{ setResetOn: () => void }> = ({ setResetOn }) => {
  return (
    <C.Form
      {...FORM_STYLES}
      onSubmit={(data) => console.log(data)}
      schema={LD.commonFormConstants.SCHEMA}
    >
      <CH.VStack spacing={4}>
        <C.TextInput label="Email" name="email" />
        <C.TextInput label="Password" name="password" type="password" />

        <CH.VStack spacing={1}>
          <C.Form.Controls />
          <CH.Link
            as="span"
            fontSize={14}
            color="blue.600"
            onClick={setResetOn}
          >
            Forgot password?
          </CH.Link>
        </CH.VStack>
      </CH.VStack>
    </C.Form>
  );
};

export default CommonForm;
