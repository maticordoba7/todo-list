import React, { useContext } from "react";
import { authContext } from "../components/AuthContextProvider";

const  useAuth = ():any  => {
  return useContext(authContext);
}
export default useAuth;
