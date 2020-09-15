import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import { fetchUsers } from "../actions";
import { connect } from "react-redux";
import Header from "./Header";
import "../styles/App.css";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes />
      </Router>
    </>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = () => ({
  fetchUsers,
});

export default connect(mapStateToProps, mapDispatchToProps())(App);
