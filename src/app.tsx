import React from "react";
import * as C from "components";
import * as CH from "@chakra-ui/react";

const App: React.FC = () => {
  return (
    <CH.Flex minHeight="100vh" alignItems="center" justifyContent="center">
      <C.LogIn />
    </CH.Flex>
  );
};

export default App;
