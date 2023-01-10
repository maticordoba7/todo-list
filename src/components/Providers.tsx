import React from "react";
import { ChakraProvider } from "@chakra-ui/react";  
import AuthContextProvider from "./AuthContextProvider";
import TodosContextProvider from "./TodosContextProvider";

const Providers = ({ children }: { children: JSX.Element }): JSX.Element => {
  return (
    <AuthContextProvider>
      <TodosContextProvider>
        <ChakraProvider>{children}</ChakraProvider>
      </TodosContextProvider>
    </AuthContextProvider>
  );
};

export default Providers;
