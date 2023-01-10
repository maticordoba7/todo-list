export enum Actions {
  deleteTodo = "DELETE_TODO",
  addTodo = "ADD_TODO",
  addTodos = "ADD_TODOS",
  toggleTodo = "TOGGLE_TODO",
  modifyTodo = "MODIFY_TODO",
}

export type Todo = {
  id: number;
  userId: number;
  completed: boolean;
  title: string;
};

const todosReducer: any = (state = [], action: any) => {
  switch (action.type) {
    case Actions.toggleTodo:
      const stateWithToggleTodo = state.map((todo: Todo) =>
        todo.id !== action.todo.id ? todo : { ...action.todo }
      );
      return [...stateWithToggleTodo];
    case Actions.modifyTodo:
      const newTodos = state.map((todo: Todo) =>
        todo.id !== action.todo.id ? todo : action.todo
      );
      return [...newTodos];
    case Actions.deleteTodo:
      return [...state.filter((t: Todo) => action.id !== t.id)];
    case Actions.addTodo:
      return [...state, action.todo];
    case Actions.addTodos:
      return [...state, ...action.todos];
    default:
      return state;
  }
};

export default todosReducer;
