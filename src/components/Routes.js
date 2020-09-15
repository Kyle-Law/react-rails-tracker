import React from "react";
import ProtectedLogin from "./ProtectedLogin";
import ProtectedRoute from "./ProtectedRoute";
// import AuthApi from "./AuthApi";
import { Switch } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";

const Routes = () => {
  // const Auth = React.useContext(AuthApi);
  return (
    <Switch>
      <ProtectedLogin path="/login" component={Login} />
      <ProtectedRoute path="/" component={Dashboard} />
    </Switch>
  );
};

export default Routes;
