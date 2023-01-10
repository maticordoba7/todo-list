import React, { useContext } from "react";
import { todosContext } from "../components/TodosContextProvider";

const useTodos = (): any => {
  return useContext(todosContext);
};
export default useTodos;
