import { Route, Redirect } from "react-router-dom";
type Props = {
  children: JSX.Element;
  [x: string]: any;
};
const PrivateRoute: React.FC<Props> = ({ children, ...rest }) => {
  const isLogged = sessionStorage.getItem("isLogged");

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLogged ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
