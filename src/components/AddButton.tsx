import { IconButton } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

const AddButton = ({ ...props }: any) => {
  return (
    <IconButton
      style={{ position: "fixed", bottom: "2rem", right: "2rem" }}
      aria-label="Add a new todo"
      icon={<AddIcon />}
      {...props}
    />
  );
};
export default AddButton;
