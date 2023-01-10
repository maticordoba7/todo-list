import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";
import Providers from "./components/Providers";
import Login from "./pages/Login";
import Todos from "./pages/Todos";

function App() {
  return (
    <Providers>
      <Router>
        <Header />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/">
            <Todos />
          </PrivateRoute>
        </Switch>
      </Router>
    </Providers>
  );
}

export default App;
