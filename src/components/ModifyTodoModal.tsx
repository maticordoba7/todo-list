import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import useTodos from "../hooks/useTodos";
import { Actions, Todo } from "../reducers/todosReducer";
// import { v1 as uuid } from "uuid";

const ModifyTodoModal = ({
  isOpen,
  onClose,
  todo,
}: {
  isOpen: boolean;
  onClose: () => void;
  todo: Todo;
}) => {
  const { dispatch } = useTodos();
  const [title, setTitle] = useState(todo.title);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    modify();
    onClose();
    setTitle("");
  };
  const handleTitleChange = (e: any) => {
    e.preventDefault();
    setTitle(e.target.value);
  };
  const modify = () => {
    dispatch({
      type: Actions.modifyTodo,
      todo: { id: 1, title, userId: 1, completed: false },
    });
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modify todo</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack>
            <form onSubmit={handleSubmit}>
              <FormControl isRequired>
                <FormLabel htmlFor="description">Description</FormLabel>
                <Input
                  type="text"
                  id="title"
                  placeholder="Title"
                  onChange={handleTitleChange}
                  value={title}
                  name="title"
                />
              </FormControl>
              <Button type="submit" colorScheme="teal">
                Charge
              </Button>
            </form>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
export default ModifyTodoModal;
