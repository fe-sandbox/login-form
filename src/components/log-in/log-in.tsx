import React from "react";
import * as CH from "@chakra-ui/react";
import * as LC from "./components";

const LogIn = () => {
  const {
    isOpen: isResetMode,
    onOpen: setResetOn,
    onClose: setResetOff,
  } = CH.useDisclosure();

  return (
    <CH.VStack spacing={8} width="100%">
      <CH.Heading as="h1" size="2xl">
        Log In
      </CH.Heading>

      {isResetMode ? (
        <LC.ResetForm setResetOff={setResetOff} />
      ) : (
        <LC.CommonForm setResetOn={setResetOn} />
      )}
    </CH.VStack>
  );
};

export default LogIn;
