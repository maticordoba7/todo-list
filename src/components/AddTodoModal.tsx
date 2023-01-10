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
import { Actions } from "../reducers/todosReducer";
// import { v1 as uuid } from "uuid";

const AddTodoModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const { dispatch } = useTodos();
  const [title, setTitle] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    add();
    onClose();
    setTitle("");
  };
  const handleTitleChange = (e: any) => {
    e.preventDefault();
    setTitle(e.target.value);
  };
  const add = () => {
    dispatch({
      type: Actions.addTodo,
      // here i was going use uuid for a unique id
      todo: { id: 1, title, userId: 1, completed: false },
    });
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>New todo</ModalHeader>
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
                Add
              </Button>
            </form>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
export default AddTodoModal;
