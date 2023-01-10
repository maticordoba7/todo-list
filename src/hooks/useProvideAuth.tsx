import React, { useState } from "react";

const useProvideAuth = () => {
  const isLogged = sessionStorage.getItem("isLogged");
  const [user, setUser] = useState<boolean>(!!isLogged);

  const signin = () => {
    sessionStorage.setItem("isLogged", JSON.stringify(true));
    setUser(true);
  };

  const signout = () => {
    sessionStorage.removeItem("isLogged");
    setUser(false);
  };
  return {
    user,
    signin,
    signout,
  };
};

export default useProvideAuth;
