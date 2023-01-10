import useData from "../hooks/useData";
import {
  HStack,
  IconButton,
  Spacer,
  StackDivider,
  Text,
  useDisclosure,
  VStack,
  Checkbox,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Actions, Todo } from "../reducers/todosReducer";
import { useCallback, useEffect, useState } from "react";
import useTodos from "../hooks/useTodos";
import AddButton from "../components/AddButton";
import AddTodoModal from "../components/AddTodoModal";
import ModifyTodoModal from "../components/ModifyTodoModal";

const vStackProps = {
  p: "4",
  w: "100%",
  maxW: { base: "90vw", sm: "80vw", lg: "50vw", xl: "40vw" },
  borderColor: "gray.100",
  borderWidth: "2px",
  borderRadius: "lg",
  alignItems: "stretch",
  divider: <StackDivider />,
};
const Todos = () => {
  const { data, loading } = useData(
    "https://jsonplaceholder.typicode.com/todos"
  );
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenModify,
    onOpen: onOpenModify,
    onClose: onCloseModify,
  } = useDisclosure();
  const [modifyTodo, setModifyTodo] = useState<Todo>({
    id: 1,
    title: "",
    userId: 1,
    completed: false,
  });

  const { dispatch } = useTodos();
  useEffect(() => {
    !loading && dispatch({ type: Actions.addTodos, todos: data });
  }, [loading]);

  const deleteTodo = useCallback(
    (id: Todo) => dispatch({ type: Actions.deleteTodo, id }),
    []
  );
  const { todos } = useTodos();
  const handleOpenModify = (todo: Todo) => () => {
    setModifyTodo(todo);
    onOpenModify();
  };
  const handleToggleTodo = (todo: Todo) => () => {
    dispatch({
      type: Actions.toggleTodo,
      todo: { ...todo, completed: !todo.completed },
    });
  };
  return loading ? null : (
    <>
      <AddTodoModal isOpen={isOpen} onClose={onClose} />
      <ModifyTodoModal
        isOpen={isOpenModify}
        onClose={onCloseModify}
        todo={modifyTodo as Todo}
      />

      <VStack {...vStackProps}>
        {todos.map((todo: any) => (
          <HStack key={todo.id}>
            <Checkbox
              defaultChecked={todo.completed}
              onChange={handleToggleTodo(todo)}
            />
            <Text>{todo.title}</Text>
            <Spacer />
            <IconButton
              icon={<EditIcon />}
              isRound={true}
              aria-label="edit"
              onClick={handleOpenModify(todo)}
            />
            <IconButton
              icon={<DeleteIcon />}
              isRound={true}
              aria-label="delete"
              onClick={() => deleteTodo(todo.id)}
            />
          </HStack>
        ))}
      </VStack>
      <AddButton
        onClick={(e: any) => {
          e.preventDefault();
          onOpen();
        }}
      />
    </>
  );
};

export default Todos;
