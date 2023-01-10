import { Button } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { useHistory } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Header = (): JSX.Element => {
  const { user, signout } = useAuth();
  const history = useHistory();
  const logout = () => {
    signout();
    history.push("/");
  };

  return (
    <>
      {user && (
        <header>
          <Button
            onClick={logout}
            rightIcon={<ChevronRightIcon />}
            variant="ghost"
          >
            Logout
          </Button>
        </header>
      )}
    </>
  );
};

export default Header;
