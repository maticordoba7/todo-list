import React, { createContext } from "react";
import useProvideAuth from "../hooks/useProvideAuth";

export const authContext = createContext({});

const AuthContext = ({ children }: { children: JSX.Element }) => {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export default AuthContext;
