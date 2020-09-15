import React from "react";
import { connect } from "react-redux";
import { login, fetchUsers } from "../actions";

const Login = ({ login, users, fetchUsers }) => {
  React.useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onLogin = (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    if (username) {
      const userObj = users.filter((u) => u.username === username)[0];
      if (userObj) {
        login(userObj, username);
      } else {
        login(userObj, username);
      }
    } else {
      alert("Please enter your username");
    }
  };

  return (
    <div className="login-container">
      <form>
        {users[0] && <label htmlFor="username">Username: </label>}
        {users[0] && <input type="text" id="username" />}
        {users[0] ? <button onClick={onLogin}>Login</button> : "Loading..."}
      </form>
    </div>
  );
};
const mapStateToProps = (state) => ({
  users: state.users,
});

const mapDispatchToProps = () => ({
  login,
  fetchUsers,
});

export default connect(mapStateToProps, mapDispatchToProps())(Login);
