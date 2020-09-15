import React from "react";
// import AuthApi from "./AuthApi";
import Cookies from "js-cookie";
import Records from "./Records";
import Chart from "./Chart";
import AddRecord from "./AddRecord";
import { connect } from "react-redux";
import { logout } from "../actions";
import { NavLink, Switch, Route } from "react-router-dom";
import Home from "./Home";

const Dashboard = ({ logout, user }) => {
  // const Auth = React.useContext(AuthApi);

  function onLogout() {
    Cookies.remove("user");
    logout();
  }

  return (
    <div>
      {/* <AddRecord />
      <Records /> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/add" component={AddRecord} />
        <Route path="/records" component={Records} />
        <Route path="/chart" component={Chart} />
      </Switch>
      <nav>
        <NavLink exact to="/" className="nav-item">
          <i className="fas fa-home"></i>
          <p>Home</p>
        </NavLink>
        <NavLink exact to="/add" className="nav-item">
          <i className="fas fa-plus-circle"></i> <p>Add</p>
        </NavLink>
        <NavLink exact to="/records" className="nav-item">
          <i className="fas fa-database"></i> <p>Records</p>
        </NavLink>
        <NavLink exact to="/chart" className="nav-item">
          <i className="far fa-chart-bar"></i> <p>Chart</p>
        </NavLink>
        <div className="nav-item" onClick={onLogout}>
          <i className="fas fa-sign-out-alt"></i> <p>Logout</p>
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: state.users,
  user: state.user,
});

const mapDispatchToProps = () => ({
  logout,
});

export default connect(mapStateToProps, mapDispatchToProps())(Dashboard);
