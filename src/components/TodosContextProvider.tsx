import React, { createContext, useReducer } from "react";
import todosReducer from "../reducers/todosReducer";

export const todosContext = createContext([]);

const TodosContextProvider = ({ children }: { children: JSX.Element }) => {
  const [todos, dispatch] = useReducer(todosReducer, []);
  return (
    <todosContext.Provider value={{ todos, dispatch } as never}>
      {children}
    </todosContext.Provider>
  );
};

export default TodosContextProvider;
