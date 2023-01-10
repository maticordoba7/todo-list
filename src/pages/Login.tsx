import { useState } from "react";
import { Input, InputGroup, VStack, Box, Button } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState();
  const history = useHistory();
  const { signin } = useAuth();

  const handleChangeUsername = (event: any) => setUsername(event.target.value);

  const handleChangePassword = (event: any) => setPassword(event.target.value);
  const handleLogin = (event: any) => {
    if (username === "johndoe" && password === "1234") {
      signin();
      return history.push("/");
    }
  };
  return (
    <VStack
      spacing={4}
      height="100%"
      direction={["column"]}
      align="center"
      justify="center"
    >
      <Box w="50%" h="40px">
        <InputGroup size="md">
          <Input
            value={username}
            onChange={handleChangeUsername}
            placeholder="Enter username johndoe"
          />
        </InputGroup>
      </Box>
      <Box w="50%" h="40px">
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={"password"}
            placeholder="Enter password 1234"
            onChange={handleChangePassword}
          />
        </InputGroup>
      </Box>
      <Button onClick={handleLogin} disabled={!username || !password}>
        Login
      </Button>
    </VStack>
  );
};

export default Login;
